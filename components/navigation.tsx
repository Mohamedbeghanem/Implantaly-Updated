"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Home, Users, Briefcase, BookOpen, Mail } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { href: "/", label: "Home", icon: Home, description: "Welcome to Alta Academy" },
    { href: "/about", label: "About", icon: Users, description: "Learn about our team" },
    { href: "/live-surgery", label: "Live surgery", icon: Briefcase, description: "Witness live procedures" },
    { href: "/workshops", label: "Workshops", icon: BookOpen, description: "Educational workshops" },
    { href: "/contact", label: "Contact", icon: Mail, description: "Get in touch with us" },
  ]

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/Altaacademy.svg"
                  alt="Alta Academy Logo"
                  width={280}
                  height={75}
                  priority
                  className="h-[75px] w-[280px]"
                  style={{width: '280px !important', height: '75px !important'}}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-[17px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-red-500 hover:from-emerald-600 hover:to-red-600 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg"
              >
                Contact Us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <div className={`transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/Altaacademy.svg"
                    alt="Alta Academy Logo"
                    width={280}
                    height={75}
                    priority
                    className="h-[75px] w-[280px]"
                    style={{width: '280px !important', height: '75px !important'}}
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 py-6 px-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 group mb-1 text-lg"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <item.icon className="w-5 h-5 text-gray-500 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-200" aria-hidden="true" />
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-red-500 hover:from-emerald-600 hover:to-red-600 transition-all duration-200 rounded-lg shadow-md"
                >
                  Contact Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}