"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Award, ArrowRight, Play, Star, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export function AltaAcademyHero() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from industry professionals",
      gradient: "from-white to-gray-100"
    },
    {
      icon: BookOpen,
      title: "Hands-on Training",
      description: "Practical experience with real cases",
      gradient: "from-white to-gray-100"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recognized qualifications",
      gradient: "from-white to-gray-100"
    }
  ]
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-100/30 to-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-red-100/30 to-red-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Main Hero Content */}
        <div className="text-center mb-20">
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-red-500/10 backdrop-blur-xl rounded-full border border-green-200 text-green-700 text-sm font-medium mb-6 animate-fade-in">
              <GraduationCap className="w-4 h-4 mr-2" />
              Implantaly Dental Clinic by Hs
            </div>
            
            {/* Main Title */}
            <h1 className="font-bold text-3xl md:text-6xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-red-600 bg-clip-text text-transparent">
                Specialized in Live Surgery
              </span>
              <br />
              <span className="text-gray-800">Dedicated to shaping Tomorrow`s Experts</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Live Surgery is an immersive educational method that allows participants to observe real-time surgical procedures performed by expert clinicians. It provides immediate insight into operative decision-making, technical protocols, and real clinical variations.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" asChild className="group bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 px-10 py-4 text-lg font-semibold rounded-xl border-0">
                <Link href="/live-surgery" className="flex items-center">
                  Explore our Lives
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="group border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-xl bg-white/80">
                <Link href="/contact" className="flex items-center text-gray-700">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Learn More via Whatsapp
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Hands-on Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Certification</span>
              </div>
            </div>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group text-center p-8 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${1.4 + index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                <feature.icon className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
