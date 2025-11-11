'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { SiMedium, SiKaggle, SiHuggingface } from 'react-icons/si'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) setIsVisible(true)
  }, { threshold: 0.1 })

  const element = document.getElementById('contact')
  if (element) observer.observe(element)

  return () => {
    if (element) observer.unobserve(element)
  }
}, [])


  const contactInfo = [
    {
      icon: <Mail className="text-[#F59E0B]" size={24} />,
      title: "Email",
      value: "shubham.ghag@gmail.com",
      link: "mailto:shubham.ghag@gmail.com"
    },
    {
      icon: <Phone className="text-[#F59E0B]" size={24} />,
      title: "Phone",
      value: "+91 7208130207",
      link: "tel:+917208130207"
    },
    {
      icon: <MapPin className="text-[#F59E0B]" size={24} />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ]

  const socialLinks = [
    { icon: <Github size={24} />, url: "https://github.com/Shubhammer7" },
    { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/shubham-ghag/" },
    { icon: <SiMedium size={24} />, url: "https://medium.com/@shubham.ghag" },
    { icon: <SiKaggle size={24} />, url: "https://kaggle.com/shubhamghag" },
    { icon: <SiHuggingface size={24} />, url: "https://huggingface.co/shubhamghag" }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-[#F59E0B]">Touch</span></h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Want to collaborate or talk data? Just reach out directly-no forms, no nonsense.
        </p>

        <a
          href="mailto:shubham.ghag@gmail.com"
          className="neo-button inline-block px-8 py-4 bg-[var(--primary)] text-white font-semibold
                     hover:bg-[var(--secondary)] transition-colors duration-150"
        >
          Email Me
        </a>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, i) => (
            <a key={i} href={info.link} className="flex flex-col items-center gap-2">
              {info.icon}
              <h4 className="font-semibold">{info.title}</h4>
              <p className="text-gray-600">{info.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center space-x-6">
          {socialLinks.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
