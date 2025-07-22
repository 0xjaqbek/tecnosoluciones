import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2, Mail, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [conversationStage, setConversationStage] = useState('discovery'); // discovery, summary, confirmed, completed
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    requirements: [],
    budget: '',
    timeline: ''
  });
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const messagesEndRef = useRef(null);

  // EmailJS Configuration - Replace with your credentials
  const EMAILJS_CONFIG = {
    serviceId: 'service_odffarj', // Replace with your EmailJS service ID
    templateId: 'template_u44vofk', // Replace with your EmailJS template ID
    publicKey: 'O7U25yXlgMEevFg3D' // Replace with your EmailJS public key
  };

  // Your local server URL - update this to match your setup
  const SERVER_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001'                    // Local development
    : 'https://bolivia-ace-waterproof-sought.trycloudflare.com';    // Deployed (production)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  useEffect(() => {
    // Test connection to local server
    const testConnection = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/simple-test`, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
        if (response.ok) {
          setIsConnected(true);
        }
      } catch {
        console.log('Assistant server not available');
        setIsConnected(false);
      }
    };

    testConnection();

    // Listen for custom event to open chat widget
    const handleOpenChatWidget = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatWidget', handleOpenChatWidget);

    return () => {
      window.removeEventListener('openChatWidget', handleOpenChatWidget);
    };
  }, [SERVER_URL]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      setMessages([{
        id: 1,
        text: "¡Hola! Soy el asistente virtual de TecnoSoluciones. 👋\n\nTengo más de 8 años de experiencia ayudando a empresas argentinas a crear sitios web que realmente venden, implementar chatbots inteligentes y potenciar su marketing digital.\n\n¿En qué puedo ayudarte hoy? Para brindarte la mejor asesoría, me gustaría conocer:\n\n• ¿Cuál es tu nombre?\n• ¿Qué tipo de negocio tenés?\n• ¿Qué necesitás específicamente?",
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  // Extract client information from conversation
  const extractClientInfo = (conversation) => {
    const info = { ...clientInfo };
    
    // Simple extraction logic - you can make this more sophisticated
    conversation.forEach(msg => {
      if (msg.sender === 'user') {
        const text = msg.text.toLowerCase();
        
        // Extract email
        const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
        if (emailMatch && !info.email) {
          info.email = emailMatch[0];
        }
        
        // Extract phone
        const phoneMatch = text.match(/(\+54\s?)?(\d{1,4}\s?)?\d{3,4}[-\s]?\d{3,4}[-\s]?\d{3,4}/);
        if (phoneMatch && !info.phone) {
          info.phone = phoneMatch[0];
        }
        
        // Extract name (basic pattern)
        if (text.includes('me llamo') || text.includes('soy ') || text.includes('mi nombre es')) {
          const nameMatch = text.match(/(me llamo|soy|mi nombre es)\s+([a-záéíóúñ\s]+)/i);
          if (nameMatch && !info.name) {
            info.name = nameMatch[2].trim();
          }
        }
        
        // Identify business type mentions
        const businessKeywords = ['restaurante', 'tienda', 'consultorio', 'empresa', 'negocio', 'emprendimiento'];
        businessKeywords.forEach(keyword => {
          if (text.includes(keyword) && !info.business) {
            info.business = keyword;
          }
        });
        
        // Identify requirements
        const requirementKeywords = ['sitio web', 'página web', 'ecommerce', 'tienda online', 'chatbot', 'marketing digital', 'redes sociales', 'seo'];
        requirementKeywords.forEach(keyword => {
          if (text.includes(keyword) && !info.requirements.includes(keyword)) {
            info.requirements.push(keyword);
          }
        });
      }
    });
    
    return info;
  };

  // Generate conversation summary
  const generateSummary = (conversation, clientInfo) => {
    const userMessages = conversation.filter(msg => msg.sender === 'user').map(msg => msg.text);
    
    return {
      clientInfo,
      conversationTopics: clientInfo.requirements,
      keyPoints: userMessages.slice(0, 3), // First 3 user messages as key points
      timestamp: new Date().toISOString(),
      conversationLength: conversation.length
    };
  };

  // Send email with conversation summary
  const sendSummaryEmail = async (summary) => {
    setIsEmailSending(true);
    
    try {
      const templateParams = {
        to_email: 'tecnosolucionesuno@gmail.com', // Your company email
        client_name: summary.clientInfo.name || 'Cliente Prospecto',
        client_email: summary.clientInfo.email || 'No proporcionado',
        client_phone: summary.clientInfo.phone || 'No proporcionado',
        business_type: summary.clientInfo.business || 'No especificado',
        requirements: summary.conversationTopics.join(', ') || 'Consulta general',
        conversation_summary: summary.keyPoints.join('\n\n'),
        timestamp: new Date().toLocaleString('es-AR'),
        conversation_length: summary.conversationLength
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      setEmailSent(true);
      setConversationStage('completed');
      
      // Add confirmation message
      const confirmationMessage = {
        id: Date.now(),
        text: "✅ ¡Perfecto! Tu consulta ha sido enviada a nuestro equipo.\n\nNos pondremos en contacto contigo en las próximas horas para darte un presupuesto personalizado y sin compromiso.\n\n📞 Si necesitás algo urgente, también podés contactarnos por WhatsApp: +54 9 113 422 7461\n\n¡Gracias por elegir TecnoSoluciones!",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, confirmationMessage]);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      const errorMessage = {
        id: Date.now(),
        text: "Hubo un problema al enviar tu consulta. Por favor, contactanos directamente por WhatsApp: +54 9 113 422 7461 o email: tecnosolucionesuno@gmail.com",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsEmailSending(false);
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading || !isConnected) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Get chat history for context
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        text: msg.text
      }));

      // Add context about conversation stages and summary generation
      let contextualMessage = currentInput;
      
      // Check if enough conversation has happened for summary (e.g., 6+ exchanges)
      const userMessageCount = messages.filter(msg => msg.sender === 'user').length + 1;
      
      if (userMessageCount >= 4 && conversationStage === 'discovery') {
        contextualMessage += '\n\n[CONTEXT: Esta conversación ha progresado lo suficiente. Si has recopilado información sobre las necesidades del cliente, considera generar un resumen de los requerimientos y preguntar si es correcto antes de proceder.]';
        setConversationStage('ready_for_summary');
      }

      const response = await fetch(`${SERVER_URL}/api/tecnosoluciones-chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify({
          message: contextualMessage,
          history: history,
          language: 'es',
          stage: conversationStage
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      // Check if bot is asking for confirmation of summary
      if (data.response.includes('¿Es correcto') || data.response.includes('confirma') || 
          data.response.includes('¿Te parece bien') && conversationStage === 'ready_for_summary') {
        setConversationStage('summary');
      }

      // Check if user confirms the summary
      if (conversationStage === 'summary' && 
          (currentInput.toLowerCase().includes('sí') || 
           currentInput.toLowerCase().includes('si') || 
           currentInput.toLowerCase().includes('correcto') ||
           currentInput.toLowerCase().includes('perfecto') ||
           currentInput.toLowerCase().includes('confirmo'))) {
        
        // Extract client info and generate summary
        const extractedInfo = extractClientInfo([...messages, userMessage]);
        setClientInfo(extractedInfo);
        
        const summary = generateSummary([...messages, userMessage], extractedInfo);
        
        // Send email with summary
        await sendSummaryEmail(summary);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: "Disculpá, tuve un problema técnico. Por favor, contactanos directamente por WhatsApp: +54 9 113 422 7461 o email: tecnosolucionesuno@gmail.com",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          data-chat-widget
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline font-medium">¿Necesitás ayuda?</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            {emailSent ? <CheckCircle size={16} /> : <Bot size={16} />}
          </div>
          <div>
            <h3 className="font-semibold">TecnoSoluciones</h3>
            <p className="text-xs opacity-80">
              {emailSent ? 'Consulta enviada' : 
               isConnected ? 'Asistente virtual disponible' : 'Modo offline'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isEmailSending && <Loader2 size={16} className="animate-spin" />}
          {emailSent && <Mail size={16} className="text-green-300" />}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.sender === 'bot' && (
                  <Bot size={16} className="mt-0.5 flex-shrink-0" />
                )}
                {message.sender === 'user' && (
                  <User size={16} className="mt-0.5 flex-shrink-0" />
                )}
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.text}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl flex items-center space-x-2">
              <Bot size={16} />
              <Loader2 size={16} className="animate-spin" />
              <span className="text-sm">Escribiendo...</span>
            </div>
          </div>
        )}

        {isEmailSending && (
          <div className="flex justify-start">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-2xl flex items-center space-x-2">
              <Mail size={16} />
              <Loader2 size={16} className="animate-spin" />
              <span className="text-sm">Enviando consulta...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              emailSent ? "Consulta enviada ✓" :
              isConnected ? "Escribí tu consulta..." : "Asistente no disponible"
            }
            disabled={!isConnected || isLoading || emailSent || isEmailSending}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading || !isConnected || emailSent || isEmailSending}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white rounded-full p-2 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
        
        {!isConnected && (
          <p className="text-xs text-red-500 mt-2 text-center">
            Asistente temporalmente no disponible. 
            <br />
            Contactanos por WhatsApp: +54 9 113 422 7461
          </p>
        )}

        {conversationStage === 'summary' && !emailSent && (
          <p className="text-xs text-blue-600 mt-2 text-center">
            💡 Confirmá el resumen para enviar tu consulta
          </p>
        )}

        {emailSent && (
          <p className="text-xs text-green-600 mt-2 text-center">
            ✅ Consulta enviada exitosamente
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;