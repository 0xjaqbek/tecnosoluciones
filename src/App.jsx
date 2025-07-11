import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
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

  // Add Google Font for Contrail One
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Contrail+One&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'AW-1029418216');
  window.gtag = gtag;
};

// 3D Tech Landscape Component
const TechLandscape = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    console.log('TechLandscape mounting...', mountRef.current); // DEBUG LOG
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create grid lines (subtle wireframe ground)
    const gridGroup = new THREE.Group();
    const gridMaterial = new THREE.LineBasicMaterial({ 
      color: 0x667eea, 
      transparent: true, 
      opacity: 0.1 
    });

    // Horizontal lines
    for (let i = -10; i <= 10; i += 2) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-10, -2, i),
        new THREE.Vector3(10, -2, i)
      ]);
      const line = new THREE.Line(geometry, gridMaterial);
      gridGroup.add(line);
    }

    // Vertical lines
    for (let i = -10; i <= 10; i += 2) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i, -2, -10),
        new THREE.Vector3(i, -2, 10)
      ]);
      const line = new THREE.Line(geometry, gridMaterial);
      gridGroup.add(line);
    }

    scene.add(gridGroup);

    // Create floating geometric shapes
    const shapes = [];
    const shapeGeometries = [
      new THREE.BoxGeometry(0.2, 0.2, 0.2),
      new THREE.OctahedronGeometry(0.15),
      new THREE.TetrahedronGeometry(0.18)
    ];

    const shapeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x764ba2, 
      transparent: true, 
      opacity: 0.15,
      wireframe: true
    });

    for (let i = 0; i < 15; i++) {
      const geometry = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
      const shape = new THREE.Mesh(geometry, shapeMaterial);
      
      shape.position.x = (Math.random() - 0.5) * 20;
      shape.position.y = Math.random() * 5 - 1;
      shape.position.z = (Math.random() - 0.5) * 20;
      
      shape.userData = {
        originalPosition: shape.position.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatPhase: Math.random() * Math.PI * 2
      };
      
      scene.add(shape);
      shapes.push(shape);
    }

    // Create data streams (moving particles)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.02
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x667eea,
      size: 0.05,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Position camera
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const animate = () => {
      const time = Date.now() * 0.001;

      // Animate grid (subtle wave effect)
      gridGroup.rotation.y = time * 0.05;
      gridGroup.position.y = Math.sin(time * 0.5) * 0.1 - 2;

      // Animate floating shapes
      shapes.forEach((shape) => {
        // Rotation
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;

        // Floating movement
        shape.position.y = shape.userData.originalPosition.y + Math.sin(time + shape.userData.floatPhase) * 0.3;
      });

      // Animate particles
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // Reset particles that go too far
        if (Math.abs(positions[i * 3]) > 10) positions[i * 3] *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 10) positions[i * 3 + 2] *= -1;
        if (positions[i * 3 + 1] > 5) positions[i * 3 + 1] = -2;
        if (positions[i * 3 + 1] < -3) positions[i * 3 + 1] = 5;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Gentle camera movement
      camera.position.y = 3 + Math.sin(time * 0.3) * 0.2;
      camera.lookAt(0, Math.sin(time * 0.2) * 0.1, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0"
      style={{ 
        pointerEvents: 'none',
        opacity: 0.3
      }} 
    />
  );
};

// 3D Network Visualization Component
const NetworkVisualization = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create network nodes
    const nodes = [];
    const dynamicConnections = [];
    const nodeCount = 25;
    const maxConnections = 4;
    const connectionDuration = 1000; // 1 second in milliseconds

    // Node geometry and materials
    const nodeGeometry = new THREE.SphereGeometry(0.03, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x667eea,
      transparent: true,
      opacity: 0.8
    });

    const pulseNodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x764ba2,
      transparent: true,
      opacity: 1
    });

    // Create nodes in 3D space
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(
        nodeGeometry, 
        Math.random() > 0.8 ? pulseNodeMaterial : nodeMaterial
      );
      
      // Position nodes in a more structured but organic way
      const radius = 3 + Math.random() * 4;
      const theta = (i / nodeCount) * Math.PI * 2 + Math.random() * 0.5;
      const phi = Math.random() * Math.PI;
      
      node.position.x = radius * Math.sin(phi) * Math.cos(theta);
      node.position.y = radius * Math.sin(phi) * Math.sin(theta);
      node.position.z = radius * Math.cos(phi);
      
      node.userData = {
        originalPosition: node.position.clone(),
        pulsePhase: Math.random() * Math.PI * 2,
        isPulse: node.material === pulseNodeMaterial,
        index: i
      };
      
      scene.add(node);
      nodes.push(node);
    }

    // Function to create a new dynamic connection
    const createConnection = () => {
      if (dynamicConnections.length >= maxConnections) return;

      // Pick two random nodes
      const nodeA = nodes[Math.floor(Math.random() * nodes.length)];
      const nodeB = nodes[Math.floor(Math.random() * nodes.length)];
      
      // Don't connect a node to itself
      if (nodeA === nodeB) return;

      // Check if connection already exists
      const exists = dynamicConnections.some(conn => 
        (conn.nodeA === nodeA && conn.nodeB === nodeB) ||
        (conn.nodeA === nodeB && conn.nodeB === nodeA)
      );
      if (exists) return;

      // Create line geometry and material
      const geometry = new THREE.BufferGeometry().setFromPoints([
        nodeA.position,
        nodeB.position
      ]);
      
      const material = new THREE.LineBasicMaterial({ 
        color: 0x667eea, 
        transparent: true, 
        opacity: 0
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      // Add to connections array
      const connection = {
        line,
        nodeA,
        nodeB,
        createdAt: Date.now(),
        opacity: 0,
        maxOpacity: 0.6 + Math.random() * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
        fadeDirection: 1 // 1 for fade in, -1 for fade out
      };

      dynamicConnections.push(connection);
    };

    // Function to remove expired connections
    const removeExpiredConnections = () => {
      const currentTime = Date.now();
      
      for (let i = dynamicConnections.length - 1; i >= 0; i--) {
        const connection = dynamicConnections[i];
        const age = currentTime - connection.createdAt;
        
        // Start fading out after 800ms, remove after 1000ms
        if (age > 800) {
          connection.fadeDirection = -1;
        }
        
        if (age > connectionDuration) {
          scene.remove(connection.line);
          connection.line.geometry.dispose();
          connection.line.material.dispose();
          dynamicConnections.splice(i, 1);
        }
      }
    };

    // Create initial connections
    let lastConnectionTime = 0;
    const connectionInterval = 200; // Create new connection every 200ms

    // Position camera
    camera.position.z = 8;
    camera.position.y = 1;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      const time = Date.now() * 0.001;
      const currentTime = Date.now();

      // Create new connections periodically
      if (currentTime - lastConnectionTime > connectionInterval) {
        createConnection();
        lastConnectionTime = currentTime;
      }

      // Remove expired connections
      removeExpiredConnections();

      // Rotate the entire network slowly
      scene.rotation.y = time * 0.1;
      scene.rotation.x = Math.sin(time * 0.05) * 0.1;

      // Animate nodes
      nodes.forEach((node, index) => {
        // Gentle floating animation
        node.position.y = node.userData.originalPosition.y + Math.sin(time + index) * 0.1;
        node.position.x = node.userData.originalPosition.x + Math.cos(time + index * 0.5) * 0.05;
        
        // Pulse effect for special nodes
        if (node.userData.isPulse) {
          const pulseScale = 1 + Math.sin(time * 3 + node.userData.pulsePhase) * 0.3;
          node.scale.setScalar(pulseScale);
          node.material.opacity = 0.7 + Math.sin(time * 2 + node.userData.pulsePhase) * 0.3;
        }
      });

      // Update dynamic connections
      dynamicConnections.forEach(connection => {
        const { line, nodeA, nodeB, createdAt, maxOpacity, pulsePhase, fadeDirection } = connection;
        
        // Update line positions
        const positions = line.geometry.attributes.position.array;
        positions[0] = nodeA.position.x;
        positions[1] = nodeA.position.y;
        positions[2] = nodeA.position.z;
        positions[3] = nodeB.position.x;
        positions[4] = nodeB.position.y;
        positions[5] = nodeB.position.z;
        line.geometry.attributes.position.needsUpdate = true;

        // Handle fading animation
        const age = currentTime - createdAt;
        let targetOpacity;
        
        if (fadeDirection === 1) {
          // Fade in
          const fadeInProgress = Math.min(age / 200, 1); // 200ms fade in
          targetOpacity = fadeInProgress * maxOpacity;
        } else {
          // Fade out
          const fadeOutProgress = Math.max(0, (connectionDuration - age) / 200); // 200ms fade out
          targetOpacity = fadeOutProgress * maxOpacity;
        }

        // Add pulse effect
        const pulseMultiplier = 0.8 + Math.sin(time * 4 + pulsePhase) * 0.2;
        connection.opacity = targetOpacity * pulseMultiplier;
        line.material.opacity = connection.opacity;

        // Add subtle color variation
        const colorShift = Math.sin(time * 2 + pulsePhase) * 0.1;
        line.material.color.setHSL(0.6 + colorShift, 0.8, 0.6);
      });

      // Mouse interaction - subtle camera movement
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Clean up dynamic connections
      dynamicConnections.forEach(connection => {
        scene.remove(connection.line);
        connection.line.geometry.dispose();
        connection.line.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0"
      style={{ 
        pointerEvents: 'none',
        opacity: 0.6
      }} 
    />
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-1029418216/rcu4CPmQ2O0aEOjZ7uoD'});
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Simple logic: if footer is visible in viewport, change color
          setIsOverDarkSection(entry.isIntersecting);
        });
      },
      {
        // Trigger when footer becomes visible at the top of the viewport
        rootMargin: '0px 0px -90% 0px',
        threshold: 0
      }
    );

    // Wait for DOM to be ready and find footer
    const findAndObserveFooter = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        observer.observe(footer);
        console.log('Footer found and observed'); // Debug log
        return true;
      }
      return false;
    };

    // Try immediately
    if (!findAndObserveFooter()) {
      // If not found, try after DOM is ready
      const timeout = setTimeout(() => {
        if (!findAndObserveFooter()) {
          console.log('Footer not found, falling back to scroll detection'); // Debug log
          
          // Fallback to scroll-based detection
          const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const threshold = documentHeight * 0.85; // Last 15% of page
            
            setIsOverDarkSection(scrollPosition > threshold);
          };

          window.addEventListener('scroll', handleScroll);
          
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }
      }, 500);

      return () => {
        clearTimeout(timeout);
        observer.disconnect();
      };
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const emailTextClass = isOverDarkSection 
    ? "text-white transition-colors duration-300" 
    : "text-gray-700 transition-colors duration-300";

  const menuButtonClass = isOverDarkSection
    ? "text-white hover:text-gray-200 transition-colors duration-300"
    : "text-gray-700 hover:text-gray-900 transition-colors duration-300";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span 
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                style={{ fontFamily: 'Contrail One, cursive' }}
              >
                TecnoSoluciones
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className={`flex items-center space-x-2 ${emailTextClass}`}>
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
              className={menuButtonClass}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <div className={`flex items-center space-x-2 ${emailTextClass}`}>
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
      {/* 3D Tech Landscape Background */}
      <TechLandscape />
      
      {/* 3D Network Visualization */}
      <NetworkVisualization />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
      </div>

      {/* Content overlay */}
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
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'Contrail One, cursive' }}
              >
                TecnoSoluciones
              </span>
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