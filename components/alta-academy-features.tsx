"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Users, Award, Clock, BookOpen, Shield, Star } from "lucide-react"

export function AltaAcademyFeatures() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from industry-leading professionals with decades of experience",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Hands-on Training",
      description: "Practical experience with real cases and live patient scenarios",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recognized qualifications and continuing education credits",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Online and in-person options to fit your schedule",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Structured learning paths from beginner to advanced levels",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous standards and continuous improvement processes",
      gradient: "from-cyan-500 to-blue-500"
    }
  ]

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Alta Academy
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover what makes us the premier choice for dental education and professional development
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group text-center p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-2xl border border-emerald-500/30">
            <Star className="w-6 h-6 text-emerald-400 mr-3" />
            <span className="text-white/90 text-lg">
              Join thousands of dental professionals who have transformed their careers with Alta Academy
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
