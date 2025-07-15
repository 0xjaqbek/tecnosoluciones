import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  // Your local server URL - update this to match your setup
    const SERVER_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3001'                    // Local development
  : 'https://7b868258933b.ngrok-free.app';    // Deployed (production)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
}, [SERVER_URL]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      setMessages([{
        id: 1,
        text: "¡Hola! Soy el asistente virtual de TecnoSoluciones. 👋\n\nTengo más de 20 años de experiencia ayudando a empresas a crecer con marketing digital, soporte técnico e inteligencia artificial.\n\n¿En qué puedo ayudarte hoy?",
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading || !isConnected) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get chat history for context
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        text: msg.text
      }));

      const response = await fetch(`${SERVER_URL}/api/tecnosoluciones-chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify({
          message: inputValue,
          history: history,
          language: 'es' // Spanish for TecnoSoluciones
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
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: "Disculpá, tuve un problema técnico. Por favor, contactanos directamente por WhatsApp: +54 11 3422 7461 o email: tecnosolucionesuno@gmail.com",
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
            <Bot size={16} />
          </div>
          <div>
            <h3 className="font-semibold">TecnoSoluciones</h3>
            <p className="text-xs opacity-80">
              {isConnected ? 'Asistente virtual disponible' : 'Modo offline'}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white p-1"
        >
          <X size={20} />
        </button>
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
            placeholder={isConnected ? "Escribí tu consulta..." : "Asistente no disponible"}
            disabled={!isConnected || isLoading}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading || !isConnected}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white rounded-full p-2 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
        
        {!isConnected && (
          <p className="text-xs text-red-500 mt-2 text-center">
            Asistente temporalmente no disponible. 
            <br />
            Contactanos por WhatsApp: +54 11 3422 7461
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;