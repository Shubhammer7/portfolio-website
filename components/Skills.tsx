'use client'

import { useEffect, useState } from 'react'
import {
  Database,
  Brain,
  BarChart3,
  Code,
  Cloud,
  GitBranch,
  Server,
  LineChart,
  Cpu
} from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: "Data Science & ML",
      icon: <Brain className="text-[var(--primary)]" size={32} />,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Statistical Modeling",
        "Predictive Analytics",
        "Time Series Analysis",
        "A/B Testing"
      ]
    },
    {
      title: "Programming",
      icon: <Code className="text-[var(--primary)]" size={32} />,
      skills: [
        "Python",
        "R",
        "SQL",
        "JavaScript",
        "Git",
        "Bash"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="text-[var(--primary)]" size={32} />,
      skills: [
        "Pandas & NumPy",
        "Scikit-learn",
        "TensorFlow/PyTorch",
        "Tableau/Power BI",
        "AWS/GCP",
        "Docker"
      ]
    }
  ]

  const expertiseAreas = [
    {
      icon: <Cpu size={32} />,
      title: "Machine Learning",
      description: "Building predictive models and ML pipelines"
    },
    {
      icon: <LineChart size={32} />,
      title: "Statistical Analysis",
      description: "Econometric modeling and hypothesis testing"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Platforms",
      description: "AWS, GCP, and cloud infrastructure"
    },
    {
      icon: <Server size={32} />,
      title: "Data Engineering",
      description: "ETL pipelines and data architecture"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-[var(--primary)]">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set combining economic theory with modern data science techniques
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`neo-card bg-white rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-200 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-[var(--primary)]/10 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="neo-card bg-[var(--primary)] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Areas of Expertise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/20 p-4 rounded-lg inline-block mb-4 group-hover:bg-white/30 transition-colors duration-200">
                      {area.icon}
                    </div>
                    <h4 className="font-bold mb-2 text-lg">{area.title}</h4>
                    <p className="text-white/90 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className={`mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Stack</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn",
                  "TensorFlow", "PyTorch", "Tableau", "Power BI", "AWS",
                  "GCP", "Docker", "Git", "PostgreSQL", "MongoDB"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full font-medium neo-border-thin hover:bg-[var(--primary)]/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
