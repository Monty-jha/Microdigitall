import React, { useState, useEffect } from 'react';

export default function AISolutionsPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const aiServices = [
    {
      id: 1,
      title: 'AI Chatbots & Virtual Assistants',
      icon: '🤖',
      category: 'automation',
      description: 'Intelligent chatbots and virtual assistants that provide 24/7 customer support and automate interactions.',
      features: ['Natural Language Processing', '24/7 Customer Support', 'Multi-language Support', 'CRM Integration', 'Learning & Adaptation'],
      price: 'Starting $1200/month',
      gradient: 'from-blue-500 to-indigo-500',
      platforms: ['💬 WhatsApp', '🌐 Website', '📱 Mobile App']
    },
    {
      id: 2,
      title: 'Machine Learning Solutions',
      icon: '🧠',
      category: 'analytics',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent automation.',
      features: ['Predictive Analytics', 'Data Pattern Recognition', 'Custom ML Models', 'Real-time Processing', 'API Integration'],
      price: 'Starting $2000/month',
      gradient: 'from-purple-500 to-violet-500',
      platforms: ['📊 Analytics', '🔗 API', '☁️ Cloud']
    },
    {
      id: 3,
      title: 'Computer Vision & OCR',
      icon: '👁️',
      category: 'vision',
      description: 'Advanced computer vision solutions for image recognition, document processing, and visual analysis.',
      features: ['Image Recognition', 'Document OCR', 'Quality Control', 'Facial Recognition', 'Object Detection'],
      price: 'Starting $1500/month',
      gradient: 'from-green-500 to-teal-500',
      platforms: ['📷 Camera', '📄 Documents', '🏭 Manufacturing']
    },
    {
      id: 4,
      title: 'AI Content Generation',
      icon: '✍️',
      category: 'content',
      description: 'AI-powered content creation including copywriting, image generation, and multimedia content.',
      features: ['AI Copywriting', 'Image Generation', 'Video Creation', 'Content Optimization', 'Brand Voice Training'],
      price: 'Starting $800/month',
      gradient: 'from-pink-500 to-rose-500',
      platforms: ['📝 Writing', '🎨 Images', '🎬 Video']
    },
    {
      id: 5,
      title: 'Process Automation',
      icon: '⚙️',
      category: 'automation',
      description: 'Intelligent process automation to streamline workflows and eliminate repetitive tasks.',
      features: ['Workflow Automation', 'Data Processing', 'Task Scheduling', 'Error Handling', 'Performance Monitoring'],
      price: 'Starting $1000/month',
      gradient: 'from-orange-500 to-red-500',
      platforms: ['🔄 Workflows', '📊 Data', '⏰ Scheduling']
    },
    {
      id: 6,
      title: 'AI-Powered Analytics',
      icon: '📊',
      category: 'analytics',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence and machine learning.',
      features: ['Predictive Insights', 'Real-time Dashboards', 'Anomaly Detection', 'Trend Analysis', 'Custom Reports'],
      price: 'Starting $900/month',
      gradient: 'from-cyan-500 to-blue-500',
      platforms: ['📈 Analytics', '📊 Dashboards', '📋 Reports']
    },
    {
      id: 7,
      title: 'Voice AI & Speech Recognition',
      icon: '🎙️',
      category: 'voice',
      description: 'Voice-enabled AI solutions including speech recognition, voice commands, and audio processing.',
      features: ['Speech-to-Text', 'Voice Commands', 'Audio Analysis', 'Multi-language Support', 'Real-time Processing'],
      price: 'Starting $700/month',
      gradient: 'from-indigo-500 to-purple-500',
      platforms: ['🎙️ Voice', '📱 Mobile', '🏠 Smart Devices']
    },
    {
      id: 8,
      title: 'AI Recommendation Systems',
      icon: '🎯',
      category: 'personalization',
      description: 'Intelligent recommendation engines for personalized user experiences and increased engagement.',
      features: ['Personalized Recommendations', 'User Behavior Analysis', 'Content Filtering', 'A/B Testing', 'Performance Optimization'],
      price: 'Starting $1100/month',
      gradient: 'from-yellow-500 to-orange-500',
      platforms: ['🛒 E-commerce', '📺 Streaming', '📰 Content']
    },
    {
      id: 9,
      title: 'AI Security Solutions',
      icon: '🛡️',
      category: 'security',
      description: 'AI-powered cybersecurity solutions for threat detection, fraud prevention, and security monitoring.',
      features: ['Threat Detection', 'Fraud Prevention', 'Behavioral Analysis', 'Real-time Monitoring', 'Incident Response'],
      price: 'Starting $1800/month',
      gradient: 'from-red-500 to-pink-500',
      platforms: ['🔒 Security', '🖥️ Network', '📱 Mobile']
    }
  ];

  const aiStats = [
    { number: '300+', label: 'AI Models Deployed', icon: '🚀' },
    { number: '85%', label: 'Efficiency Improvement', icon: '⚡' },
    { number: '1M+', label: 'Data Points Processed', icon: '📊' },
    { number: '150+', label: 'Satisfied Clients', icon: '🎉' }
  ];

  const aiTechnologies = [
    { name: 'TensorFlow', icon: '🔬', color: 'from-orange-400 to-red-400', capability: 'Deep Learning' },
    { name: 'OpenAI GPT', icon: '🧠', color: 'from-green-400 to-emerald-400', capability: 'Language AI' },
    { name: 'Computer Vision', icon: '👁️', color: 'from-blue-400 to-indigo-400', capability: 'Image AI' },
    { name: 'AWS AI', icon: '☁️', color: 'from-yellow-400 to-orange-400', capability: 'Cloud AI' },
    { name: 'Python AI', icon: '🐍', color: 'from-blue-500 to-green-400', capability: 'ML Development' },
    { name: 'Neural Networks', icon: '🕸️', color: 'from-purple-400 to-pink-400', capability: 'Deep AI' }
  ];

  const filteredServices = activeTab === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 z-10 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-slideDown">
            ARTIFICIAL
            <br />
            <span className="text-5xl md:text-7xl">INTELLIGENCE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Transform your business with cutting-edge AI solutions including machine learning, automation, computer vision, and intelligent analytics
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-3xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🤖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🧠</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>👁️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>⚙️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🎯</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slideUp" style={{ animationDelay: '1s' }}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Get AI Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
              <span className="group-hover:text-white transition-colors duration-300">View AI Demos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aiStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Technologies We Master
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative p-6 bg-gradient-to-br ${tech.color} rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm">{tech.name}</h3>
                  <p className="text-xs text-white/80">{tech.capability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Filter Tabs */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Solutions', icon: '🎯' },
              { key: 'automation', label: 'Automation', icon: '⚙️' },
              { key: 'analytics', label: 'Analytics', icon: '📊' },
              { key: 'vision', label: 'Computer Vision', icon: '👁️' },
              { key: 'content', label: 'Content AI', icon: '✍️' },
              { key: 'voice', label: 'Voice AI', icon: '🎙️' },
              { key: 'personalization', label: 'Personalization', icon: '🎯' },
              { key: 'security', label: 'AI Security', icon: '🛡️' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-full bg-gradient-to-br ${service.gradient} p-1 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20`}>
                  <div className="h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.platforms.map((platform, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-gray-300"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      <span className="text-lg font-semibold text-green-400">
                        {service.price}
                      </span>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-200">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our AI Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'AI Assessment & Strategy', desc: 'Analyze your business needs and develop a comprehensive AI strategy', icon: '🔍' },
              { step: '02', title: 'Data Preparation', desc: 'Prepare and optimize your data for AI model training and deployment', icon: '📊' },
              { step: '03', title: 'AI Model Development', desc: 'Build, train, and fine-tune custom AI models for your specific requirements', icon: '⚡' },
              { step: '04', title: 'Deploy & Monitor', desc: 'Deploy AI solutions and continuously monitor performance for optimization', icon: '🚀' }
            ].map((process, index) => (
              <div
                key={process.step}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-4">{process.step}</div>
                <div className="text-3xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Transform your business with intelligent AI solutions that automate processes, enhance decision-making, and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
              <span className="relative z-10">Start AI Transformation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-10 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105 transform hover:-translate-y-1">
              <span className="group-hover:text-white transition-colors duration-300">Schedule AI Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-lg">
            © 2025 AI Solutions Hub. Powering the Future with Artificial Intelligence.
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}