'use client'

import { useEffect, useState, useRef } from 'react'
import { GraduationCap, Briefcase, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // If already animated, don't observe again
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

    const element = document.getElementById('about')
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
      description: "Specialized in econometrics, statistical modeling, quantitative economics, and economic policy analysis"
    },
    {
      degree: "Bachelor's in Economics",
      institution: "University of Mumbai",
      year: "2021",
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
      title: "Graduate Teahing Assistant",
      company: "University of San Francisco",
      period: "Apr/2023 - May/2024",
      location: "San Francisco, CA",
      description: "Analyzed large datasets, created visualizations, and supported business decisions"
    },
    {
      title: "Data Scientist",
      company: "Freelance",
      period: "Jan/2022 - Jul/2022",
      location: "Mumbai, MH",
      description: "Analyzed large datasets, created visualizations, and supported business decisions"
    }
  ]


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[var(--primary)]">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate data scientist with a unique blend of economic theory and practical data science expertise
            </p>
          </div>

          {/* Main Content */}
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="neo-card bg-[var(--primary)] p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">My Journey</h3>
              <div className="space-y-4 text-white leading-relaxed text-center">
                <p>
                  My journey into data science began with a deep fascination for economics and
                  the power of data to explain human behavior and market dynamics. With a
                  Bachelor's in Economics and a Master's in Applied Economics, I developed
                  a strong foundation in quantitative analysis and statistical modeling.
                </p>
                <p>
                  Transitioning into data science, I've combined my economic background with
                  modern machine learning techniques to solve complex business problems.
                  I believe that understanding the economic context behind data is crucial
                  for building meaningful and actionable models.
                </p>
                <p>
                  Today, I specialize in predictive modeling, econometric analysis, and
                  building data-driven solutions that help organizations make informed
                  decisions and drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
