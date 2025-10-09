import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Moon, Sun } from 'lucide-react';
import { certificates, projects, expertise, experience, education } from './data';


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      return stored !== null ? JSON.parse(stored) : true; // Default to dark
    }
    return true; // Default to dark mode when rendering on server
  });
  

  const [isScrolled, setIsScrolled] = useState(false); // <-- ADD THIS
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {  // <-- ADD THIS useEffect
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleSkill = (skillName: string) => {
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(selectedSkills.filter((name) => name !== skillName));
    } else {
      setSelectedSkills([...selectedSkills, skillName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    window.location.href = `mailto:varunkkoct@gmail.com?subject=Portfolio Contact: ${data.name}&body=${data.message}%0D%0A%0D%0AFrom: ${data.email}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      
      {/* Top Navigation */}
      <div className="fixed top-6 right-6 flex items-center gap-8 z-50 backdrop-blur-md bg-white/30 dark:bg-transparent rounded-full px-6 py-2 shadow-lg">
  <nav className="flex gap-6 text-sm sm:text-base">
    {[
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Education', href: '#education' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Projects', href: '#projects' },
      { label: 'Certifications', href: '#certifications' },
    ].map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className={`relative font-semibold tracking-wide transition duration-300 ${
          darkMode ? 'text-white' : (isScrolled ? 'text-black' : 'text-white')
        } hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`}
      >
        {label}
      </a>
    ))}
  </nav>

  {/* Dark Mode Toggle */}
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
    aria-label="Toggle dark mode"
  >
    {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-white" />}
  </button>
</div>



      {/* Hero Section */}
      <header id="home" className="relative h-[1100px] flex items-center justify-center bg-gradient-to-r from-gray-8000 to-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-7xl md:text-5xl sm:text-3xl font-bold mb-6">Varun Kumar Kota</h1>
          <p className="text-3xl md:text-xl sm:text-lg mb-8">Software Engineer & Gen AI</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-xl transition">Hire Me</a>
            <a href="https://drive.google.com/file/d/16N9GTtNZZROk7N_cy9geZUZduwytEhCF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold text-xl transition flex items-center gap-2">
              <Download size={32} /> Download Resume
            </a>
          </div>
          <nav className="flex flex-wrap gap-6 justify-center">
            {['Education', 'Expertise', 'Projects', 'Certifications'].map((item) => (
  <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="...">{item}</a>
))}
          </nav>

        </div>
      </header>

      
      {/* About Section */}
      
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto text-center md:text-left">
          
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src="/logos/graduation-photo.jpg" 
                alt="Varun Kumar Kota - Graduate" 
                className="w-80 h-80 rounded-full object-cover object-center shadow-lg border-4 border-blue-500 dark:border-blue-400"
              />
            </div>
          
            {/* About Info */}
            <div className="max-w-3xl">
              <p className="text-lg mb-6 text-left">
                I am a Master's student in Data Science at the University at Buffalo, SUNY, graduating in May 2025. 
                As an aspiring software engineer, I specialize in building scalable applications, distributed systems, 
                and cloud-native pipelines using Python, Java, and Spark.
              </p>
              <p className="text-lg mb-6 text-left">
                I am AWS Certified Cloud Practitioner and Data Engineer Associate, with extensive experience in 
                full-stack development, AI/ML (PyTorch, TensorFlow), and cloud infrastructure (AWS, Azure, GCP). 
                My expertise spans data engineering, ETL pipelines, microservices architecture, and production-ready AI solutions.
              </p>
              <p className="text-lg mb-6 text-left">
                Previously worked as a Software Engineer at KreditBee, where I developed UPI payment modules, 
                optimized performance, and built scalable microservices. Passionate about solving complex technical 
                challenges and building innovative solutions.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/varunkkota" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/varunkkota/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:varunkkoct@gmail.com"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800 text-black dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
          <div className="relative border-l-4 border-blue-500 dark:border-blue-400 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className={`ml-6 relative ${index === experience.length - 1 ? '' : 'mb-10'}`}>
                <div className="absolute -left-8 top-2 w-8 h-8 flex items-center justify-center rounded-full overflow-hidden shadow-lg bg-white">
                  {exp.company === 'Community Dreams Foundation' && (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">CD</span>
                    </div>
                  )}
                  {exp.company === 'University at Buffalo' && (
                    <div className="w-full h-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">UB</span>
                    </div>
                  )}
                  {exp.company === 'Kreditbee' && (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">KB</span>
                    </div>
                  )}
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{exp.company}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{exp.title}</p>
                  <p className="text-md text-gray-600 dark:text-gray-400">{exp.period}</p>
                  {exp.project && (
                    <p className="text-md font-medium text-gray-800 dark:text-gray-200 mt-2">{exp.project}</p>
                  )}
                  {exp.technologies && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Technologies: {exp.technologies.join(', ')}
                    </p>
                  )}
                  <ul className="text-md mt-4 space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-gray-800 text-black dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="relative border-l-4 border-blue-500 dark:border-blue-400 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className={`ml-6 relative ${index === education.length - 1 ? '' : 'mb-10'}`}>
                <div className="absolute -left-8 top-2 w-8 h-8 flex items-center justify-center rounded-full overflow-hidden shadow-lg bg-white">
                  {edu.school === 'University at Buffalo, The State University of New York' && (
                    <img src="/logos/UB.jpg" alt="UB Logo" className="object-contain w-full h-full" />
                  )}
                  {edu.school === 'Vellore Institute of Technology' && (
                    <div className="w-full h-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">VIT</span>
                    </div>
                  )}
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{edu.school}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{edu.degree}</p>
                  <p className="text-md text-gray-600 dark:text-gray-400">{edu.period}</p>
                  {edu.gpa && (
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300">{edu.gpa}</p>
                  )}
                  {edu.location && (
                    <p className="text-md text-gray-600 dark:text-gray-400">{edu.location}</p>
                  )}
                  {edu.courses && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Relevant Courses: {edu.courses.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => toggleSkill(skill.name)}
              >
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  {!selectedSkills.includes(skill.name) && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm text-gray-500 dark:text-gray-400">
                      Tap to view skills
                    </div>
                  )}
                  {selectedSkills.includes(skill.name) && (
                    <div className="mt-4 text-sm animate-fadeIn">
                      <ul className="space-y-1">
                        {skill.skills.map((s, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300 py-1 px-2 rounded-md bg-gray-50 dark:bg-gray-700">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Projects Section */}
       <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-700 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
                {project.title === 'Apply AI' ? (
                  <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-800 dark:via-blue-800 dark:to-indigo-800 flex items-center justify-center relative overflow-hidden">
                    {/* Job Processing Pipeline */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Celery & Redis Cloud */}
                        <div className="w-28 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-80 relative mb-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white font-bold text-xs">Celery + Redis</div>
                          </div>
                          {/* Processing Lines */}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className={`w-0.5 h-8 bg-green-400 absolute animate-pulse`} 
                                   style={{left: `${(i-2.5) * 4}px`, animationDelay: `${i * 0.2}s`}}></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Performance Metrics */}
                        <div className="flex space-x-4 mt-6">
                          <div className="bg-blue-600 rounded-lg px-2 py-1 text-xs text-white text-center">
                            <div className="font-bold">60%</div>
                            <div>Throughput ↑</div>
                          </div>
                          <div className="bg-purple-600 rounded-lg px-2 py-1 text-xs text-white text-center">
                            <div className="font-bold">40%</div>
                            <div>ATS Match ↑</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Brain Icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AI</span>
                    </div>
                    
                    {/* API Latency Indicator */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Sub-500ms API</span>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="absolute bottom-2 right-2 flex space-x-1">
                      <div className="px-1 py-0.5 bg-blue-600 rounded text-xs text-white">FastAPI</div>
                      <div className="px-1 py-0.5 bg-green-600 rounded text-xs text-white">NextJS</div>
                      <div className="px-1 py-0.5 bg-orange-600 rounded text-xs text-white">Groq</div>
                    </div>
                    
                    <div className="absolute top-2 left-2 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
                      Job Processing
                    </div>
                  </div>
                ) : project.title === 'Medical AI Assistant' ? (
                  <div className="w-full h-48 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 flex items-center justify-center relative overflow-hidden">
                    {/* RAG Pipeline Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full max-w-xs">
                        {/* Gemini Brain */}
                        <div className="absolute top-2 left-8 w-12 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">Gemini</span>
                        </div>
                        
                        {/* Pinecone Vector DB */}
                        <div className="absolute top-2 right-8 w-12 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">Vector</span>
                        </div>
                        
                        {/* Connection Lines */}
                        <div className="absolute top-6 left-20 w-16 h-0.5 bg-cyan-400 animate-pulse"></div>
                        
                        {/* Streamlit Chat Interface */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded border border-cyan-400">
                          <div className="w-full h-2 bg-cyan-400 rounded-t"></div>
                          <div className="p-1">
                            <div className="w-3 h-1 bg-green-400 rounded mb-1"></div>
                            <div className="w-4 h-1 bg-blue-400 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Medical Records Indicator */}
                        <div className="absolute bottom-2 left-4 text-xs text-cyan-300">
                          4K Records
                        </div>
                      </div>
                    </div>
                    
                    {/* Safety Badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="absolute bottom-2 right-2 flex space-x-1">
                      <div className="px-1 py-0.5 bg-blue-600 rounded text-xs text-white">RAG</div>
                      <div className="px-1 py-0.5 bg-green-600 rounded text-xs text-white">Streamlit</div>
                      <div className="px-1 py-0.5 bg-purple-600 rounded text-xs text-white">Pinecone</div>
                    </div>
                    
                    <div className="absolute top-2 left-2 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
                      Medical AI
                    </div>
                  </div>
                ) : project.title === 'Enterprise-Grade Full-Stack Application with Kubernetes' ? (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 flex items-center justify-center relative overflow-hidden">
                    {/* Cloud Platform */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Main Cloud */}
                        <div className="w-32 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 relative">
                          <div className="w-24 h-16 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full absolute -top-2 left-4"></div>
                          <div className="w-20 h-14 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full absolute -top-1 right-2"></div>
                        </div>
                        
                        {/* Hexagonal Services Grid */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-1">
                            <div className="w-4 h-4 bg-blue-500 rounded transform rotate-45"></div>
                            <div className="w-4 h-4 bg-indigo-500 rounded transform rotate-45"></div>
                            <div className="w-4 h-4 bg-purple-500 rounded transform rotate-45"></div>
                            <div className="w-4 h-4 bg-cyan-500 rounded transform rotate-45"></div>
                            <div className="w-4 h-4 bg-blue-600 rounded transform rotate-45"></div>
                            <div className="w-4 h-4 bg-indigo-600 rounded transform rotate-45"></div>
                          </div>
                        </div>
                        
                        {/* Kubernetes Logo */}
                        <div className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">K8s</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Database Icons */}
                    <div className="absolute bottom-4 left-4 flex space-x-3">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">M</span>
                        </div>
                        <span className="text-xs text-cyan-200 mt-1">MongoDB</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">⚡</span>
                        </div>
                        <span className="text-xs text-cyan-200 mt-1">MySQL</span>
                      </div>
                    </div>
                    
                    {/* Tech Stack Labels */}
                    <div className="absolute bottom-2 right-2 flex space-x-2">
                      <div className="px-2 py-1 bg-green-600 rounded-full text-xs text-white">Spring Boot</div>
                      <div className="px-2 py-1 bg-blue-600 rounded-full text-xs text-white">Docker</div>
                      <div className="px-2 py-1 bg-orange-600 rounded-full text-xs text-white">Prometheus</div>
                    </div>
                    
                    <div className="absolute top-2 right-2 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
                      Enterprise
                    </div>
                  </div>
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                      <Github size={20} /> Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                        <ExternalLink size={20} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Certifications Section */}
       <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center p-4">
                  <img src={cert.image} alt={cert.name} className="w-40 h-40 object-contain" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Issued by {cert.issuer}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-700 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Uncover Insights Together</h2>
                <p className="text-lg mb-8">Let's chat about how I can bring value to your team or project.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <span>4813 N O Connor Rd, Irving, Texas 75062</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <a href="mailto:varunkkoct@gmail.com">varunkkoct@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <a href="tel:+17169070112">+1 (716) 907-0112</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="w-6 h-6 text-blue-600" />
                    <a href="https://github.com/varunkkota" target="_blank" rel="noopener noreferrer">
                      github.com/varunkkota
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;