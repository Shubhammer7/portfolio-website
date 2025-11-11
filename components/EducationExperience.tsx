'use client'

import { useEffect, useState, useRef } from 'react'
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react'

const EducationExperience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('education-experience')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const education = [
    {
      degree: "Master's in Applied Economics (Econometrics and Quantitative Economics)",
      institution: "University of San Francisco",
      year: "2024",
      location: "San Francisco, CA",
      description: "Specialized in econometrics, machine learning, data science, statistical modeling, and economic policy analysis"
    },
    {
      degree: "Bachelor's in Economics",
      institution: "University of Mumbai", 
      year: "2021",
      location: "Mumbai, MH",
      description: "Foundation in microeconomics, macroeconomics, and quantitative methods"
    }
  ]

  const experience = [
    {
      title: "Data Scientist",
      company: "Millennium School",
      period: "Oct/2024 - Present",
      location: "San Francisco, CA",
      description: "Leading data science initiatives, building ML models, and providing strategic insights"
    },
    {
      title: "Data Scientist",
      company: "Ipser Labs LLC",
      period: "May/2024 - Mar/2025", 
      location: "San Francisco, CA",
      description: "Analyzed large datasets, created visualizations, and supported business decisions"
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of San Francisco",
      period: "Apr/2023 - May/2024",
      location: "San Francisco, CA",
      description: "Assisted in teaching advanced economics courses and mentored students"
    },
    {
      title: "Data Scientist",
      company: "Freelance",
      period: "Jan/2022 - Jul/2022",
      location: "Mumbai, MH",
      description: "Developed data-driven solutions for various clients across different industries"
    }
  ]

  return (
    <section id="education-experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Education & <span className="text-[var(--primary)]">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic foundation in economics and professional journey in data science
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="neo-card bg-white rounded-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-[var(--primary)] rounded-lg mr-4">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 border-l-4 border-[var(--primary)]">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--primary)] rounded-full border-2 border-white"></div>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                        <span className="text-[var(--accent)] font-semibold text-sm bg-[var(--light)] px-3 py-1 rounded-full neo-border-thin">
                          {edu.year}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <span className="font-medium text-[var(--secondary)]">{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <MapPin size={14} className="mr-1 text-[var(--secondary)]" />
                        <span>{edu.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="neo-card bg-white rounded-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-[var(--primary)] rounded-lg mr-4">
                    <Briefcase className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
                </div>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-4 border-[var(--primary)]">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--primary)] rounded-full border-2 border-white"></div>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{exp.title}</h4>
                        <span className="text-[var(--accent)] font-semibold text-sm bg-[var(--light)] px-3 py-1 rounded-full neo-border-thin">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <span className="font-medium text-[var(--secondary)]">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin size={14} className="mr-1 text-[var(--secondary)]" />
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationExperience