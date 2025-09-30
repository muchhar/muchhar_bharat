import React, { useState, useEffect } from 'react';
import {
  Mail, Star, Code, Database, Cloud, Smartphone,
  ArrowRight, CheckCircle, Github, ExternalLink, Menu, X,
  Play, Eye, Calendar, Award, Sparkles, Zap, Users, Globe, CheckCircle as CheckCircleIcon,
  Moon, Sun, ChevronDown, CodeIcon,Server,
  Code2Icon
} from 'lucide-react';

const App = () => {
  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', project: '', budget: '', message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);

  // Asset URLs
  const profilePhoto = "https://i.ibb.co/20X5wp2D/professional-photo.jpg";
  const ytMoviesVideo = "https://player.vimeo.com/video/1123361868";
  const ytMoviesThumb = "https://i.ibb.co/Nd4gyssd/yt-movies-thumb.png";
  const reactDashboardVideo = "https://player.vimeo.com/video/1123361841";
  const reactDashboardThumb = "https://i.ibb.co/BHf0x8Bh/react-dashboard-thumb.png";
  const flutterAppVideo = "https://player.vimeo.com/video/1123361782";
  const flutterAppThumb = "https://i.ibb.co/fGYtrMRw/Screenshot-2025-10-01-at-3-15-56-AM.png";//"https://i.ibb.co/xSTfJ6F3/flutter-app-thumb.png";
  const blockchainDappVideo = "https://player.vimeo.com/video/1123361725";
  const blockchainDappThumb = "https://i.ibb.co/K33882h/blockchain-dapp-thumb.png";
  const clientMike = "https://i.ibb.co/M5SYTtWB/mike.jpg";
  const clientWilliam = "https://i.ibb.co/7tVFDdMg/william.jpg";
  const clientMatthew = "https://i.ibb.co/Q7qgNfQD/matthew.jpg";
  const clientYang = "https://i.ibb.co/KxcB7Tjt/yang.jpg";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = e => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
      });
    }, { threshold: 0.1 });
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, and Project Details)');
      return;
    }
    try {
      const response = await fetch('https://hook.eu2.make.com/e4gjx31i5nlccq8o35c1kyvmr9a1c798', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project || 'Not specified',
          budget: formData.budget || 'Not specified',
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'App Website'
        })
      });
      if (response.ok) {
        setShowSuccess(true); 
        setFormData({ name: '', email: '', project: '', budget: '', message: '' });
        setTimeout(() => setShowSuccess(false), 8000);
      } else throw new Error('Failed to send message');
    } catch (error) {
      console.error(error);
      alert('Sorry, there was an error sending your message. Try again or email muchharbharat10@gmail.com');
    }
  };

  const handleInputChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const projectTypes = [
    { value: 'flutter', label: 'Flutter Mobile App' },
    { value: 'react', label: 'React Web Application' },
    { value: 'python', label: 'Python Backend/API' },
    { value: 'nodejs', label: 'Node.js Backend' },
    { value: 'fullstack', label: 'Full Stack Solution' },
    { value: 'blockchain', label: 'Blockchain/DApp' },
    { value: 'ai', label: 'AI/ML Integration' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: '$10,000+' }
  ];

  const skillCategories = [
    { 
      title: "Frontend Development", 
      icon: <Smartphone className="w-8 h-8" />, 
      skills: ["Flutter", "React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"], 
      gradient: "from-violet-600 to-purple-600",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      iconBg: "bg-violet-100 dark:bg-violet-800/30"
    },
    { 
      title: "Backend Development", 
      icon: <Server className="w-8 h-8" />, 
      skills: ["Django", "Flask", "Node.js", "Express.js", "REST APIs","Mongodb","MySQL","PostgreSQL"], 
      gradient: "from-blue-600 to-cyan-600",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-800/30"
    },
    { 
      title: "Blockchain Development", 
      icon: <Code2Icon className="w-8 h-8" />, 
      skills: ["Solidity", "Smart Contracts", "DeFi", "NFTs", "Web3.js", "IPFS","MetaMask","ether.js"], 
      gradient: "from-emerald-600 to-teal-600",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      iconBg: "bg-emerald-100 dark:bg-emerald-800/30"
    },
    { 
      title: "Cloud & DevOps", 
      icon: <Cloud className="w-8 h-8" />, 
      skills: ["AWS", "Google Cloud", "Docker", "CI/CD", "Git", "Linux"], 
      gradient: "from-orange-600 to-red-600",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      iconBg: "bg-orange-100 dark:bg-orange-800/30"
    }
  ];

  const projects = [
    {
      id: 1, 
      title: "YouTube Movies Organizer", 
      description: "Full-stack web application for organizing and discovering YouTube movies with advanced filtering, real-time notifications, and comprehensive admin dashboard.",
      tech: ["React", "MongoDB", "Django", "Push Notifications"], 
      videoSrc: ytMoviesVideo,
      thumbnailSrc: ytMoviesThumb,
      category: "Web Application", 
      duration: "3 months", 
      client: "Anil Kapoor", 
      features: ["React Frontend", "Push Notifications", "Admin Panel", "Django REST API"]
    },
    {
      id: 2, 
      title: "Analytics Dashboard Platform", 
      description: "A React.js web application integrated with MetaAPI to fetch live MetaTrader 5 (MT5) trading data, analyze performance, and visualize trade history with interactive charts and insights.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"], 
      videoSrc: reactDashboardVideo,
      thumbnailSrc: reactDashboardThumb,
      category: "Web Application", 
      duration: "2 months", 
      client: "Lacey Boore", 
      features: ["Real-time Analytics", "User Management", "Data Export", "Custom Reports"]
    },
    {
      id: 3, 
      title: "Sports Prediction App", 
      description: "Mobile application for live basketball match tracking with AI-powered outcome predictions and real-time updates. Basketball fans can join live matches, predict outcomes, and engage with the game. Flutter app with Django backend",
      tech: ["Flutter", "Dart", "Django", "WebSockets"], 
      videoSrc: flutterAppVideo,
      thumbnailSrc: flutterAppThumb,
      category: "Mobile App", 
      duration: "4 months", 
      client: "Michael Paulsin", 
      features: ["Flutter UI", "FlutterFlow", "Django Backend", "Live Updates"]
    },
    {
      id: 4, 
      title: "Blockchain DApp Platform", 
      description: "Decentralized application with smart contracts, NFT marketplace where users can list, buy, sell, and participate in auctions. Implements ERC721 standards, custom marketplace smart contracts, and a React.js frontend to simulate a real-world NFT trading platform.",
      tech: ["Solidity", "React", "Web3.js", "MetaMask"], 
      videoSrc: blockchainDappVideo,
      thumbnailSrc: blockchainDappThumb,
      category: "Blockchain", 
      duration: "4 months", 
      client: "Herve Dalencourt", 
      features: ["Smart Contracts", "Web3 Integration", "Token Management", "DeFi Features"]
    }
  ];

  const reviews = [
    { 
      name: "Michael Paulsin", 
      rating: 5, 
      text: "Muchhar did an amazing job! I gave him a very complex task and he did it extremely well. Professional, communicative, and delivered beyond expectations.", 
      project: "Flutter App",
      avatar: clientMike,
      initial: "M",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "William", 
      rating: 5, 
      text: "Working with Bharat was a pleasure. He was fast and delivered a tested and running application. Highly recommend for any development project.", 
      project: "React Dashboard",
      avatar: clientWilliam,
      initial: "W",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Matthew Karasawa", 
      rating: 5, 
      text: "Bharat is a very hard working professional. If you want a job done right, I'd recommend Bharat without hesitation.", 
      project: "Flutter + Python Backend API",
      avatar: clientMatthew,
      initial: "M",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Yang Cui", 
      rating: 5, 
      text: "Friendly developer who communicated well and got the job done! Will continue working with him for future projects.", 
      project: "Mobile App Development",
      avatar: clientYang,
      initial: "Y",
      color: "from-orange-500 to-red-500"
    }
  ];

  const openVideoModal = videoSrc => {
    setActiveVideoSrc(videoSrc);
    document.body.style.overflow = 'hidden';
  };
  
  const closeVideoModal = () => {
    setActiveVideoSrc(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'} overflow-x-hidden transition-colors duration-300`}>
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className={`absolute -top-40 -right-40 w-96 h-96 ${darkMode ? 'bg-purple-600' : 'bg-purple-300'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}
          style={{ animation: 'blob 7s infinite' }}
        />
        <div 
          className={`absolute -bottom-40 -left-40 w-96 h-96 ${darkMode ? 'bg-blue-600' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}
          style={{ animation: 'blob 7s infinite 2s' }}
        />
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${darkMode ? 'bg-pink-600' : 'bg-pink-300'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`}
          style={{ animation: 'blob 7s infinite 4s' }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/90' : 'bg-white/90') + ' backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bharat Muchhar</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              {['home', 'skills', 'projects', 'reviews', 'contact'].map(section => (
                <button 
                  key={section} 
                  onClick={() => scrollToSection(section)} 
                  className={`px-4 py-2 ${darkMode ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-800' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'} font-medium capitalize transition-colors rounded-lg`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-2 p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-all`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all"
              >
                Hire Me
              </button>
            </div>
            
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-2">
              {['home', 'skills', 'projects', 'reviews', 'contact'].map(section => (
                <button 
                  key={section} 
                  onClick={() => scrollToSection(section)} 
                  className={`block w-full text-left px-4 py-3 ${darkMode ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-800' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'} rounded-lg font-medium capitalize transition-colors`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'} px-4 py-2 rounded-full`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Available for Freelance</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Bharat Muchhar
                  </span>
                </h1>
                <p className={`text-xl lg:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-light`}>
                  Full Stack Developer & Digital Innovator
                </p>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'} max-w-xl`}>
                  Crafting exceptional digital experiences with Flutter, React, Python, and Node.js. Turning ideas into reality, one line of code at a time.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[ 
                  { number: "23+", label: "Projects", icon: Award },
                  { number: "$35K+", label: "Revenue", icon: Globe },
                  { number: "5.0", label: "Rating", icon: Star },
                  { number: "100%", label: "Success", icon: CheckCircleIcon }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center space-y-1">
                    <stat.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.number}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-4 px-8 rounded-full hover:shadow-xl transition-all"
                >
                  Start Your Project 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`inline-flex items-center justify-center gap-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-700'} border-2 font-medium py-4 px-8 rounded-full hover:border-purple-600 hover:text-purple-600 transition-all`}
                >
                  View Portfolio
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl transform rotate-6 opacity-10" />
              <div className={`relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl`}>
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 space-y-6`}>
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={profilePhoto} 
                      alt="Bharat Muchhar" 
                      className="w-48 h-48 rounded-2xl object-cover border-4 border-purple-600 shadow-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl hidden items-center justify-center text-white text-4xl font-bold shadow-lg border-4 border-purple-600">
                      BM
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bharat Muchhar</div>
                      <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Full Stack Developer</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: "Availability", value: "Open to Work" },
                      { label: "Experience", value: "8+ Years" },
                      { label: "Completed", value: "23+ Projects" }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex justify-between items-center py-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{item.label}</span>
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <a href="https://github.com/muchhar" target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} py-3 rounded-xl transition-colors`}>
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="mailto:muchharbharat10@gmail.com" className={`flex-1 flex items-center justify-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} py-3 rounded-xl transition-colors`}>
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href="http://upwork.com/freelancers/bharatm2" target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} py-3 rounded-xl transition-colors`}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate id="skills-header">
            <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'} px-4 py-2 rounded-full mb-4`}>
              <Code className="w-4 h-4" />
              <span className="text-sm font-medium">Technical Skills</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              What I Do Best
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Specialized expertise in modern web and mobile development technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <div 
                key={i} 
                className={`group ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-purple-600' : 'bg-white border-gray-100 hover:border-purple-200'} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border`}
                data-animate 
                id={`skill-${i}`}
              >
                <div className={`w-14 h-14 ${cat.iconBg} rounded-xl flex items-center justify-center mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <span 
                      key={si} 
                      className={`text-sm px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-purple-900/30 hover:text-purple-300' : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'} rounded-full transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate id="projects-header">
            <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'} px-4 py-2 rounded-full mb-4`}>
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Showcasing innovative solutions and cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map(project => (
              <div 
                key={project.id} 
                className={`group ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border`}
              >
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 overflow-hidden">
                  <img 
                    src={project.thumbnailSrc} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center">
                    <div className={`text-6xl font-bold ${darkMode ? 'text-purple-700' : 'text-purple-200'}`}>{project.id}</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'} px-3 py-1 rounded-full text-sm font-medium`}>
                      {project.category}
                    </span>
                  </div>
                  <button 
                    onClick={() => openVideoModal(project.videoSrc)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-purple-600 ml-1" />
                    </div>
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-purple-600'} transition-colors`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>{project.description}</p>
                  
                  <div className={`flex items-center gap-4 mb-6 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.client}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-900'} mb-3`}>Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className={`${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-50 text-purple-700'} px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => openVideoModal(project.videoSrc)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideoSrc && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeVideoModal} 
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors text-4xl font-bold"
            >
              ×
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src={`${activeVideoSrc}?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <section id="reviews" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate id="reviews-header">
            <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'} px-4 py-2 rounded-full mb-4`}>
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Testimonials</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Client Success Stories
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              What clients say about working together and the results achieved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div 
                key={idx} 
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border`}
                data-animate 
                id={`review-${idx}`}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 leading-relaxed text-lg`}>
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-12 h-12 bg-gradient-to-br ${review.color} rounded-full hidden items-center justify-center text-white font-bold text-lg`}>
                    {review.initial}
                  </div>
                  <div>
                    <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{review.name}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{review.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-animate id="contact-header">
            <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'} px-4 py-2 rounded-full mb-4`}>
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Work Together
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Ready to bring your ideas to life? Let's discuss your project
            </p>
          </div>

          <form className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl shadow-xl p-8 lg:p-12 border`} onSubmit={handleSubmit}>
            {showSuccess && (
              <div className={`mb-8 p-6 ${darkMode ? 'bg-green-900/30 border-green-800 text-green-300' : 'bg-green-50 border-green-200 text-green-800'} border rounded-xl flex items-start gap-3`}>
                <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg mb-1">Message Sent Successfully! 🎉</p>
                  <p className={darkMode ? 'text-green-400' : 'text-green-700'}>Thank you for reaching out! I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className={`w-full px-4 py-3 border-2 ${darkMode ? 'bg-gray-900 border-gray-700 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-600'} rounded-xl focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/30 transition-all outline-none`}
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className={`w-full px-4 py-3 border-2 ${darkMode ? 'bg-gray-900 border-gray-700 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-600'} rounded-xl focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/30 transition-all outline-none`}
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Custom Project Type Dropdown */}
                <div className="relative">
                  <label className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Project Type</label>
                  <button
                    type="button"
                    onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
                    className={`w-full px-4 py-3 border-2 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'} rounded-xl transition-all outline-none flex items-center justify-between`}
                  >
                    <span className={!formData.project ? (darkMode ? 'text-gray-500' : 'text-gray-400') : ''}>
                      {formData.project ? projectTypes.find(p => p.value === formData.project)?.label : 'Select Project Type'}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${projectDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {projectDropdownOpen && (
                    <div className={`absolute z-50 w-full mt-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl shadow-xl max-h-60 overflow-y-auto`}>
                      {projectTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, project: type.value }));
                            setProjectDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-700'} transition-colors ${formData.project === type.value ? (darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-50 text-purple-700') : ''}`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Custom Budget Dropdown */}
                <div className="relative">
                  <label className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Project Budget</label>
                  <button
                    type="button"
                    onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                    className={`w-full px-4 py-3 border-2 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'} rounded-xl transition-all outline-none flex items-center justify-between`}
                  >
                    <span className={!formData.budget ? (darkMode ? 'text-gray-500' : 'text-gray-400') : ''}>
                      {formData.budget ? budgetRanges.find(b => b.value === formData.budget)?.label : 'Select Budget Range'}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${budgetDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {budgetDropdownOpen && (
                    <div className={`absolute z-50 w-full mt-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl shadow-xl`}>
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, budget: budget.value }));
                            setBudgetDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-700'} transition-colors ${formData.budget === budget.value ? (darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-50 text-purple-700') : ''}`}
                        >
                          {budget.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Project Details *</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows={6} 
                  className={`w-full px-4 py-3 border-2 ${darkMode ? 'bg-gray-900 border-gray-700 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-600'} rounded-xl focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/30 transition-all outline-none resize-none`}
                  placeholder="Tell me about your project, requirements, timeline, and any specific features you need..." 
                />
              </div>

              <button 
                type="submit" 
                disabled={!formData.name || !formData.email || !formData.message} 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Send Message & Get Quote
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-900 text-white'} py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BM</span>
                </div>
                <span className="font-bold text-xl">Bharat Muchhar</span>
              </div>
              <p className="text-gray-400 mb-6">
                Full Stack Developer crafting exceptional digital experiences with modern technologies.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/muchhar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:muchharbharat10@gmail.com" 
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="http://upwork.com/freelancers/bharatm2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['home', 'skills', 'projects', 'reviews', 'contact'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="block text-gray-400 hover:text-purple-400 transition-colors capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <p>• Flutter App Development</p>
                <p>• React Web Development</p>
                <p>• Python Backend APIs</p>
                <p>• Node.js Solutions</p>
                <p>• Full Stack Development</p>
                <p>• Blockchain Integration</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Bharat Muchhar. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>Made with ❤️ in India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        [data-animate] {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;