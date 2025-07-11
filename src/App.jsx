import React, { useEffect, useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  TrendingUp, 
  Wrench, 
  Brain, 
  Star, 
  Target, 
  DollarSign,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Clock,
  Users
} from 'lucide-react';

// Google Analytics setup
const initGoogleAnalytics = () => {
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-1029418216';
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'AW-1029418216');
  window.gtag = gtag;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-1029418216/rcu4CPmQ2O0aEOjZ7uoD'});
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TecnoSoluciones
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-4 h-4" />
              <span className="text-sm">tecnosolucionesuno@gmail.com</span>
            </div>
            <a
              href="https://wa.me/5491134227461"
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="w-4 h-4" />
                <span className="text-sm">tecnosolucionesuno@gmail.com</span>
              </div>
              <a
                href="https://wa.me/5491134227461"
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => {
  const handleCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-1029418216/GU-ICPaQ2O0aEOjZ7uoD'});
    }
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm text-gray-700">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>+20 años de experiencia comprobada</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Potenciá tu negocio con{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Marketing Digital
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas integrales que transforman empresas y maximizan resultados.
          </p>

          <div className="text-lg text-gray-500 max-w-2xl mx-auto">
            Especialistas en publicidad digital, con más de 20 años de experiencia comprobada.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCTAClick}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="font-semibold">Descubre nuestros servicios</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://wa.me/5491134227461"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-gray-700 px-8 py-4 rounded-full transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Consulta gratuita</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, features, gradient, delay }) => {
  const IconComponent = icon;
  
  return (
    <div 
      className="group relative bg-white/60 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 ${gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Hacé crecer tu negocio con campañas publicitarias que realmente funcionan y generan resultados medibles.",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      features: [
        "Estrategias personalizadas para tu sector",
        "Gestión completa de redes sociales",
        "Publicidad en Google y Facebook Ads",
        "Análisis de resultados y optimización continua",
        "Aumento comprobado en ventas",
        "ROI garantizado"
      ]
    },
    {
      icon: Wrench,
      title: "Soporte Técnico",
      description: "Reparación, actualización e instalación profesional para tu PC o Notebook con garantía total.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600",
      features: [
        "Diagnóstico gratuito y detallado",
        "Soluciones rápidas y efectivas",
        "Reparación de hardware y software",
        "Actualizaciones de sistemas",
        "Instalación de programas especializados",
        "Soporte remoto 24/7"
      ]
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Tutorías personalizadas para implementar IA en tu negocio y automatizar procesos clave.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      features: [
        "Automatización de procesos empresariales",
        "Implementación de chatbots inteligentes",
        "Análisis predictivo con IA",
        "Capacitación personalizada",
        "Consultoría especializada",
        "Integración con sistemas existentes"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transforman
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios especializados diseñados para impulsar tu negocio hacia el éxito digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              gradient={service.gradient}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, gradient }) => {
  const IconComponent = icon;
  
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className={`inline-flex items-center justify-center w-14 h-14 ${gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const About = () => {
  const features = [
    {
      icon: Star,
      title: "+20 años de experiencia",
      description: "Más de dos décadas brindando soluciones tecnológicas exitosas y transformando negocios.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Soluciones personalizadas",
      description: "Cada cliente es único. Desarrollamos estrategias específicas adaptadas a tu industria y objetivos.",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "Consulta gratuita",
      description: "Presupuestos sin costo y asesoramiento inicial completamente gratuito para evaluar tu proyecto.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>¿Por qué elegirnos?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Experiencia que{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                transforma
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Somos una empresa familiar con más de 20 años de trayectoria exitosa, especializada en soluciones tecnológicas innovadoras para particulares, profesionales y pequeñas empresas.
              </p>
              <p>
                Nuestro enfoque principal es el marketing digital, ayudando a cientos de negocios a crecer exponencialmente y aumentar sus ventas a través de campañas publicitarias altamente efectivas y estrategias personalizadas.
              </p>
              <p>
                Combinamos experiencia, innovación y resultados garantizados para transformar tu presencia digital.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Respuesta en 24hs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Garantía total</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-1029418216/rcu4CPmQ2O0aEOjZ7uoD'});
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TecnoSoluciones</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando negocios desde 2004 con soluciones tecnológicas innovadoras y marketing digital efectivo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5491134227461"
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <a
                  href="https://wa.me/5491134227461"
                  onClick={handleWhatsAppClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  +54 11 3422 7461
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>tecnosolucionesuno@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Lunes a Viernes 9-18hs</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <div className="space-y-2 text-gray-300">
              <p>Marketing Digital Avanzado</p>
              <p>Soporte Técnico Especializado</p>
              <p>Inteligencia Artificial</p>
              <p>Consultoría Tecnológica</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TecnoSoluciones. Todos los derechos reservados. | Transformando negocios desde 2004</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  useEffect(() => {
    initGoogleAnalytics();
    
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-1029418216/1AT6CPOQ2O0aEOjZ7uoD'});
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default App;