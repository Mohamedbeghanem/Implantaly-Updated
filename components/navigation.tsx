"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, GraduationCap, BookOpen, Users, Award, Star, ArrowRight, Calendar, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault()
              lastElement.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault()
              firstElement.focus()
            }
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      firstElement?.focus()

      return () => document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/", icon: GraduationCap },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "About", href: "/about", icon: Users },
    { name: "Services", href: "/services", icon: Award },
    { name: "Team", href: "/team", icon: Star },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Phone }
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Instagram", href: "#", icon: "📷" }
  ]

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg" 
            : "bg-white/80 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-600 via-white to-red-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-green-500 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-green-700 font-bold text-lg lg:text-xl">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-red-500 to-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-red-600 bg-clip-text text-transparent">
                  Alta Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
              
              {/* Desktop CTA */}
              <Button asChild className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-xl border-0">
                <Link href="/contact" className="flex items-center">
                  Book Appointment
                  <Calendar className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={toggleRef}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Open navigation"
              aria-controls="mobile-menu"
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <div className="w-6 h-6 relative">
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden transition-opacity duration-200"
          style={{ backgroundColor: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }}
        >
          <div
            ref={menuRef}
            className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transform transition-transform duration-300 ease-out"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 via-white to-red-600 rounded-2xl flex items-center justify-center border-2 border-green-500">
                  <span className="text-green-700 font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Alta Academy</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-b border-gray-200">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">+213 661 606 706</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">altaacademybyimplantaly@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Alger, Algeria</span>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="p-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="opacity-0"
                    style={{ 
                      animationDelay: `${index * 60}ms`,
                      animation: 'fadeInUp 0.3s ease-out forwards'
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300 font-medium text-lg tracking-wide min-h-[48px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 opacity-0"
                    style={{ 
                      animationDelay: `${300 + index * 100}ms`,
                      animation: 'fadeIn 0.3s ease-out forwards'
                    }}
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 border-t border-gray-200">
              <Button asChild className="w-full bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 py-4 rounded-xl border-0 text-lg font-semibold">
                <Link href="/contact" className="flex items-center justify-center">
                  Book Appointment
                  <Calendar className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
