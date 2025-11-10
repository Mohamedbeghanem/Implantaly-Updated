"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, Home, ArrowLeft, Search, BookOpen, Users, Award, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "About", href: "/about", icon: Users },
    { name: "Services", href: "/services", icon: Award },
    { name: "Contact", href: "/contact", icon: Phone }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-500/10 to-red-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Altaacademy.svg"
            alt="Alta Academy logo"
            width={200}
            height={60}
            className="h-16 w-auto"
          />
        </div>

        {/* 404 Content */}
        <Card className="p-12 bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-green-600 via-red-600 to-blue-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have vanished into the digital void. 
              Don't worry, even the best dental professionals sometimes need to find their way back to familiar territory.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-xl border-0">
              <Link href="/" className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-xl">
              <Link href="/courses" className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Browse Courses
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex flex-col items-center p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-red-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">
            Still can't find what you're looking for?
          </p>
          <Button asChild variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
            <Link href="/contact" className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
