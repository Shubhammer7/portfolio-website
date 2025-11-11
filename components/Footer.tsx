'use client'

import { Github, Linkedin, Mail, Heart, BookOpen } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/Shubhammer7",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-ghag/",
      color: "hover:text-blue-600"
    },
    {
      icon: <BookOpen size={20} />,
      name: "Medium",
      url: "https://medium.com/@shubham.ghag",
      color: "hover:text-green-600"
    },
    {
      icon: <Mail size={20} />,
      name: "Email",
      url: "mailto:shubham.ghag@gmail.com",
      color: "hover:text-[var(--primary)]"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-[var(--primary)]">SG</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Data Scientist passionate about transforming data into actionable insights.
                Combining economic theory with modern data science techniques to solve complex problems.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200 neo-border-thin p-2 bg-gray-800`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-[var(--primary)] transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>shubham.ghag@gmail.com</p>
                <p>+91 7208130207</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Shubham Ghag. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="text-[var(--primary)] mx-1" size={16} /> using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
