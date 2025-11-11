'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail, BookOpen } from 'lucide-react'
import { SiKaggle } from 'react-icons/si'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'a Data Scientist',
    'an Economist',
    'a Business Analyst',
    'a Data Analyst',
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--light)] via-white to-[var(--primary)]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Hi, I'm <span className="text-[var(--primary)]">Shubham Ghag</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-700 mb-8 h-12 flex items-center justify-center">
            <span className="text-[var(--primary)] font-bold ml-2 min-h-[2.5rem]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp">
            Passionate about transforming data into actionable insights.
            With a strong foundation in economics and expertise in data science,
            I help organizations make data-driven decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp">
            <button
              onClick={scrollToAbout}
              className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--secondary)] transition-colors duration-200 neo-button"
            >
              Learn More
            </button>
            <a
              href="#contact"
              className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors duration-200 neo-button"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-fadeInUp">
            <a
              href="https://github.com/Shubhammer7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 neo-border-thin p-3 bg-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-ghag/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 neo-border-thin p-3 bg-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shubham.ghag@gmail.com"
              className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 neo-border-thin p-3 bg-white"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://medium.com/@shubham.ghag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 neo-border-thin p-3 bg-white"
            >
              <SiKaggle  size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero