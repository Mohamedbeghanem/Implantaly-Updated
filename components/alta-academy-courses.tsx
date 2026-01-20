"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Clock, Users, Star, BookOpen, Award, ArrowRight, Play, Calendar, Target } from "lucide-react"
import Link from "next/link"

export function AltaAcademyCourses() {
  const courses = [
    {
      title: "Dental Implant Fundamentals",
      description: "Comprehensive introduction to dental implantology with hands-on practice",
      duration: "6 months",
      students: "120",
      rating: "4.9",
      level: "Beginner",
      price: "$2,500",
      features: ["Live demonstrations", "Case studies", "Hands-on practice", "Certification"],
      gradient: "from-primary to-primary",
      icon: GraduationCap
    },
    {
      title: "Advanced Implant Surgery",
      description: "Master complex implant procedures and surgical techniques",
      duration: "8 months",
      students: "85",
      rating: "4.8",
      level: "Advanced",
      price: "$3,200",
      features: ["Surgical planning", "3D imaging", "Advanced techniques", "Mentorship"],
      gradient: "from-surface to-surface2",
      icon: BookOpen
    },
    {
      title: "Implant Restoration & Prosthetics",
      description: "Learn complete restoration workflows and prosthetic design",
      duration: "7 months",
      students: "95",
      rating: "4.7",
      level: "Intermediate",
      price: "$2,800",
      features: ["Digital workflows", "Prosthetic design", "Material selection", "Quality control"],
      gradient: "from-accent to-accent",
      icon: Award
    },
    {
      title: "All-on-4 Implant Systems",
      description: "Specialized training in full-arch implant rehabilitation",
      duration: "5 months",
      students: "65",
      rating: "4.9",
      level: "Advanced",
      price: "$3,500",
      features: ["Full-arch planning", "Immediate loading", "Patient management", "Follow-up care"],
      gradient: "from-primary to-primary",
      icon: Target
    }
  ]

  const stats = [
    { number: "500+", label: "Students Trained", icon: Users, gradient: "from-primary to-primary" },
    { number: "25+", label: "Expert Instructors", icon: GraduationCap, gradient: "from-surface to-surface2" },
    { number: "95%", label: "Success Rate", icon: Star, gradient: "from-accent to-accent" },
    { number: "50+", label: "Courses Available", icon: BookOpen, gradient: "from-primary to-primary" }
  ]

  return (
    <section className="relative w-full bg-background py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Italian flag inspired gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-surface/10 to-accent/5 animate-pulse"></div>
        
        {/* Floating geometric shapes with Italian colors */}
        <div className="absolute top-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-surface2/40 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-8 sm:left-40 w-56 h-56 sm:w-80 sm:h-80 bg-accent/10 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)_/_0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)_/_0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-surface2 backdrop-blur-xl rounded-full border border-border text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Professional Dental Education
            </div>
            
            {/* Main Title */}
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight animate-fade-in-up">
              <span className="text-primary">
                Our Courses
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-muted leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive dental education programs designed to advance your career and skills in implantology
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-surface/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-border hover:bg-surface hover:border-border/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-sm"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.gradient} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-sm`}>
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group p-6 sm:p-8 bg-surface/90 backdrop-blur-xl border border-border rounded-2xl sm:rounded-3xl hover:bg-surface hover:border-border/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-sm"
              style={{ animationDelay: `${1.0 + index * 0.1}s` }}
            >
              {/* Course Header */}
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${course.gradient} rounded-xl sm:rounded-2xl shadow-sm`}>
                  <course.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                </div>
                <div className="text-right">
                  <div className="text-sm sm:text-base font-semibold text-primary mb-1">{course.level}</div>
                  <div className="text-lg sm:text-xl font-bold text-primary">{course.price}</div>
                </div>
              </div>

              {/* Course Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {course.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {course.description}
              </p>

              {/* Course Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Course Stats */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 text-sm sm:text-base text-muted">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild className="w-full py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold">
                <Link href="/contact" className="flex items-center justify-center">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="max-w-3xl mx-auto p-8 sm:p-12 bg-surface/80 backdrop-blur-xl rounded-3xl border border-border">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Advance Your Career?
            </h3>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Join hundreds of dental professionals who have transformed their careers with our comprehensive education programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button size="lg" asChild className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl bg-surface">
                <Link href="/contact" className="flex items-center text-foreground">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

