'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, Github, BarChart3, Brain, Database, TrendingUp } from 'lucide-react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "Movie Recommendation System",
      description: "A web app that recommends 10 similar movies based on user input using the Nearest Neighbors algorithm. Deployed on both GitHub Pages and a personal Raspberry Pi server. Utilizes TMDB API for movie posters, all with $0 cost.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "NearestNeighbors", "Flask"],
      category: "ml",
      github: "https://github.com/Shubhammer7/myfoodisgettingcold",
      demo: "https://myfoodisgettingcold.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Neural Network Math Calculator",
      description: "A webapp deployed on Raspberry Pi that uses a neural network trained on 300K images of digits and math operators. Users can draw expressions on a canvas, and the app recognizes the digits and operators to perform calculations.",
      image: "/api/placeholder/600/400",
      technologies: ["Neural Networks", "Image Recognition", "JavaScript", "Python", "Flask"],
      category: "ml",
      github: "https://github.com/Shubhammer7/CalcScriber",
      demo: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Bitcoin News Sentiment Analysis",
      description: "An extensive analysis of Bitcoin-related articles using web scraping and NLP. Collected custom text data, performed sentiment analysis, and compared sentiment trends with actual Bitcoin price movements, revealing notable correlations.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "NLP", "Web Scraping", "Sentiment Analysis", "Data Visualization"],
      category: "analytics",
      github: "https://github.com/Shubhammer7/Bitcoin-NewsArticles-Sentiment-Analysis",
      demo: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Race Car Neural Network",
      description: "A neural network written from scratch in JavaScript that visualizes how a car learns to navigate traffic. Features live visualization of the neural network's learning process as the car adapts to road conditions.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "Neural Networks", "Visualization", "Reinforcement Learning"],
      category: "ml",
      github: "https://github.com/Shubhammer7/RaceCarNN",
      demo: "https://shubhammer7.github.io/RaceCarNN",
      featured: false
    },
    {
      id: 5,
      title: "Stroke Prediction Dashboard",
      description: "An interactive dashboard built using a real-world Kaggle dataset to predict stroke risk. Includes data overview, EDA, and real-time model training using Logistic Regression, Random Forest, and XGBoost. Users can input custom features (age, gender, marital status, etc.) to receive stroke probability predictions.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Matplotlib"],
      category: "analytics",
      github: "https://github.com/Shubhammer7/Stroke-Prediction-App",
      demo: "https://stroke-prediction-app-mrl7gf8voerupg9rdfp5mf.streamlit.app",
      featured: true
    },
    {
      id: 6,
      title: "Ethereum Smart Contract Fraud Detection",
      description: "A machine learning project analyzing Ethereum blockchain data to flag suspicious wallet activity. Uses Etherscan API + PostgreSQL ETL pipelines to trace token flows, identify high-risk wallets, and detect multi-hop fund obfuscation. Employs Isolation Forest for anomaly detection and OSINT for de-anonymization.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "SQL", "PostgreSQL", "Etherscan API", "Isolation Forest"],
      category: "fraud-detection",
      github: "https://github.com/Shubhammer7/Ethereum-Fraud-Detection",
      demo: "https://example.com",
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Database size={18} /> },
    { id: 'ml', name: 'Machine Learning', icon: <Brain size={18} /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp size={18} /> },
    { id: 'nlp', name: 'NLP', icon: <BarChart3 size={18} /> },
    { id: 'fraud-detection', name: 'Fraud Detection', icon: <Database size={18} /> }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-[var(--primary)]">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my data science projects, from machine learning models
              to analytical dashboards and everything in between.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 neo-button ${
                  activeFilter === category.id
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`neo-card bg-white rounded-lg overflow-hidden group ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-gray-200 h-48">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                    <Database size={48} className="text-gray-400" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--primary)] text-white px-3 py-1 text-sm font-bold rounded neo-border-thin">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 neo-border-thin"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 neo-border-thin"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded neo-border-thin"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 font-medium"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 font-medium"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="text-gray-600 mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/Shubhammer7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--secondary)] transition-colors duration-200 neo-button"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects