"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Phone, Mail, MapPin, Clock, Users, Award, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ]

  const services = [
    "Dental Implant Training",
    "Advanced Surgery Courses",
    "Prosthetic Rehabilitation",
    "Digital Treatment Planning",
    "Emergency Dentistry",
    "Patient Management"
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Primary Phone",
      value: "+213 6661606706",
      href: "tel:+2136661606706"
    },
    {
      icon: Phone,
      label: "Secondary Phone", 
      value: "+213 770222385",
      href: "tel:+213770222385"
    },
    {
      icon: Mail,
      label: "Primary Email",
      value: "altaacademy@implantaly.com",
      href: "mailto:altaacademy@implantaly.com"
    },
    {
      icon: Mail,
      label: "Secondary Email",
      value: "altaacademybyimplantaly@gmail.com",
      href: "mailto:altaacademybyimplantaly@gmail.com"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Alger, Algeria",
      href: "#"
    },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "YouTube", href: "#", icon: "📺" }
  ]

  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-500/5 to-red-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/Altaacademy.svg"
                  alt="Alta Academy logo"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading dental education platform committed to advancing professional skills and knowledge through expert instruction and hands-on learning.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-100 rounded-xl flex items-center justify-center shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-110 border border-gray-200">
                  <BookOpen className="w-5 h-5 text-gray-700" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-green-300 transition-colors duration-300 flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <div className="text-gray-300 hover:text-green-300 transition-colors duration-300 flex items-center group cursor-pointer">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {service}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">{contact.label}</div>
                      <a 
                        href={contact.href}
                        className="text-gray-300 hover:text-green-300 transition-colors duration-300 text-sm font-medium"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Alta Academy by Implantaly. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-green-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-green-300 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-green-300 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
