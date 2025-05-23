import { useState, useEffect, useRef } from 'react';
import { ChevronDown, LayoutGrid, Cloud, Brain, Glasses, Monitor, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

// Menu Item Component
const MenuItem = ({ label, icon, href, onClose, delay }) => {
  return (
    <a
      href={href}
      onClick={() => onClose && onClose()}
      className="flex items-center px-6 py-4 text-lg text-white bg-blue-900/20 hover:bg-blue-600/40 transition-all duration-300 rounded-md shadow-md border border-blue-500/20 hover:border-blue-400/40 hover:translate-y-[-2px]"
    >
      {icon && <span className="mr-4">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

// Services Item Component
const ServiceItem = ({ name, icon, href, onClose }) => {
  return (
    <a
      href={href}
      onClick={() => onClose && onClose()}
      className="flex items-center w-full px-6 py-3 text-white/90 bg-blue-800/20 hover:bg-blue-700/40 transition-all duration-300 rounded-md my-2 border border-blue-500/20 hover:border-blue-400/30 hover:translate-x-1"
    >
      <span className="mr-4">{icon}</span>
      <span>{name}</span>
    </a>
  );
};

// Background Animation for Menu
const MenuBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-blue-900/80"></div>
      <div 
        className="absolute bg-moving-pattern"
        style={{
          // Replace with your own background image URL
          backgroundImage: "url('https://i.gifer.com/origin/5a/5ab98406cc6c8fbba9ddb014c2bcdb80_w200.gif')",
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          opacity: 1
        }}
      />
    </div>
  );
};

// Menu Overlay Component
const MenuOverlay = ({ isOpen, onClose, services }) => {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (serviceDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [serviceDropdownOpen]);
  
  return (
    <div 
      className={`fixed inset-0 z-50 overflow-auto flex flex-col transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <MenuBackground />
      </div>
      
      {/* Header with logo and close button */}
      <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-black/70 backdrop-blur-sm">
        <a href="/Home" onClick={onClose} className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-blue-600/30 hover:bg-blue-600/50 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} className="text-white" />
        </button>
      </div>
      
      {/* Menu content */}
      <div className="flex-1 flex items-center justify-center relative z-10 pt-8">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          {/* Desktop layout */}
          <div className="hidden md:flex flex-row items-center justify-center space-x-4">
            <div className="transform transition-all duration-500 delay-100" style={{ opacity: isOpen ? 1 : 0 }}>
              <MenuItem label="Home" href="/Home" onClose={onClose} />
            </div>
            
            <div className="transform transition-all duration-500 delay-200" style={{ opacity: isOpen ? 1 : 0 }}>
              <MenuItem label="About" href="/about" onClose={onClose} />
            </div>
            
            {/* Services dropdown */}
            <div 
              className="relative transform transition-all duration-500 delay-300" 
              style={{ opacity: isOpen ? 1 : 0 }}
              ref={dropdownRef}
            >
              <button
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                className="flex items-center px-6 py-4 text-lg text-white bg-blue-900/30 hover:bg-blue-600/50 transition-colors rounded-md shadow-md border border-blue-500/20"
                aria-expanded={serviceDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown 
                  size={20} 
                  className={`ml-2 transition-transform duration-300 ${serviceDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`absolute left-0 min-w-max mt-2 rounded-md bg-black/80 border border-blue-600/50 backdrop-blur-sm transition-all duration-300 transform origin-top-left ${
                  serviceDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="transform transition-all duration-300"
                    style={{ 
                      transitionDelay: `${100 + (index * 50)}ms`,
                      opacity: serviceDropdownOpen ? 1 : 0
                    }}
                  >
                    <ServiceItem name={service.name} icon={service.icon} href={service.href} onClose={onClose} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="transform transition-all duration-500 delay-400" style={{ opacity: isOpen ? 1 : 0 }}>
              <MenuItem label="Contact" href="/contact" onClose={onClose} />
            </div>
          </div>
          
          {/* Mobile layout with enhanced sliding animations */}
          <div className="md:hidden flex flex-col items-center justify-center space-y-4 w-full">
            <div className="w-full transform transition-all duration-500 delay-100" 
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
              }}>
              <MenuItem label="Home" href="/Home" onClose={onClose} />
            </div>
            
            <div className="w-full transform transition-all duration-500 delay-200" 
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
              }}>
              <MenuItem label="About" href="/About" onClose={onClose} />
            </div>
            
            {/* Services accordion for mobile */}
            <div className="w-full transform transition-all duration-500 delay-300" 
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
              }}
              ref={dropdownRef}
            >
              <button
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                className="flex items-center justify-between w-full px-6 py-4 text-lg text-white bg-blue-900/30 hover:bg-blue-600/50 transition-colors rounded-md shadow-md border border-blue-500/20"
                aria-expanded={serviceDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${serviceDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 mt-2 bg-black/80 backdrop-blur-sm border border-blue-600/20 rounded-md ${
                  serviceDropdownOpen ? 'max-h-96 py-2 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="transform transition-all duration-300"
                    style={{ 
                      transitionDelay: `${100 + (index * 50)}ms`,
                      opacity: serviceDropdownOpen ? 1 : 0,
                      transform: serviceDropdownOpen ? 'translateX(0)' : 'translateX(100px)'
                    }}
                  >
                    <ServiceItem name={service.name} icon={service.icon} href={service.href} onClose={onClose} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full transform transition-all duration-500 delay-400" 
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
              }}>
              <MenuItem label="Contact" href="/contact" onClose={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Navbar Component
export default function ProfessionalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);
  
  // Services data
  const services = [
    { name: "Marketing Solution", icon: <LayoutGrid size={20} />, href: "/services/marketing" },
    { name: "Cloud Solution", icon: <Cloud size={20} />, href: "/services/cloud" },
    { name: "AI Solution", icon: <Brain size={20} />, href: "/services/ai" },
    { name: "Meta Solutions", icon: <Glasses size={20} />, href: "/services/meta" },
    { name: "Website & App Development", icon: <Monitor size={20} />, href: "/services/development" }
  ];

  useEffect(() => {
    // Preload audio for button click to ensure it plays on first click
    audioRef.current = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-light-button-click-1113.mp3");
    audioRef.current.load(); // Preload the audio
    
    // Scroll handler for navbar styling
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Lock body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [scrolled, menuOpen]);

  // Handle menu button click with guaranteed sound
  const handleMenuClick = () => {
    // Play click sound with better error handling
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      
      // Play with better error handling and user interaction awareness
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Sound played successfully
            setMenuOpen(true);
          })
          .catch(error => {
            // Auto-play was prevented, likely due to browser policy
            console.log("Audio playback failed:", error);
            // Open menu anyway
            setMenuOpen(true);
          });
      } else {
        // Older browsers might not return a promise
        setMenuOpen(true);
      }
    } else {
      // Fallback if audio ref isn't ready
      setMenuOpen(true);
    }
  };

  return (
    <>
      {/* Only show the navbar strip initially */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 border-b border-blue-600/30 shadow-lg shadow-blue-600/20 py-2' 
            : 'bg-black/50 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Center Logo - Visible on all screen sizes */}
            <div className="mx-auto">
              <a href="/Home" className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </a>
            </div>
            
            {/* Menu button with enhanced click effect */}
            <button
              onClick={handleMenuClick}
              className="absolute right-4 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none transition-colors duration-300 hover:bg-blue-900/30 active:bg-blue-900/50"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Full-page Menu Overlay */}
      <MenuOverlay 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)}
        services={services}
      />
      
      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes menuBgFloat {
          0% { transform: scale(1.05) translate(0, 0); }
          25% { transform: scale(1.08) translate(-1%, -1%); }
          50% { transform: scale(1.1) translate(-2%, -2%); }
          75% { transform: scale(1.08) translate(-1%, -1%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
        
        .bg-moving-pattern {
          animation: menuBgFloat 30s ease-in-out infinite;
        }
        
        /* Mobile menu item slide-in animation */
        @keyframes slideInFromRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        /* Enhanced hover effects */
        .menu-item:hover {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </>
  );
}