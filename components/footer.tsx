"use client"

import {
  Award,
  BookOpen,
  Clock,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Users,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const programs = [
    "Dental Implant Training",
    "Advanced Surgery Courses",
    "Prosthetic Rehabilitation",
    "Digital Treatment Planning",
    "Emergency Dentistry",
    "Patient Management",
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Primary Phone",
      value: "+213 6661606706",
      href: "tel:+2136661606706",
    },
    {
      icon: Phone,
      label: "Secondary Phone",
      value: "+213 770222385",
      href: "tel:+213770222385",
    },
    {
      icon: Mail,
      label: "Primary Email",
      value: "altaacademy@implantaly.com",
      href: "mailto:altaacademy@implantaly.com",
    },
    {
      icon: Mail,
      label: "Secondary Email",
      value: "altaacademybyimplantaly@gmail.com",
      href: "mailto:altaacademybyimplantaly@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Alger, Algeria",
      href: "#",
    },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
  ]

  return (
    <footer className="relative w-full overflow-hidden bg-[#0b0f0c] text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-gradient-to-br from-green-400/10 via-emerald-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-400/10 via-green-500/10 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_55%)]"></div>
      </div>

      <div className="relative z-10">
        {/* CTA Strip */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-green-300">Alta Academy</p>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Train with expert surgeons and turn technique into confidence.
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Hands-on courses, mentoring, and clinical insights designed to level up your practice.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-green-500/30 transition hover:translate-y-[-1px] hover:bg-green-400"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-green-400/60 hover:text-green-200"
                >
                  Talk to Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Altaacademy.svg"
                  alt="Alta Academy logo"
                  width={240}
                  height={72}
                  className="h-14 w-auto"
                />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-300">
                A focused dental education hub for implantology and advanced clinical practice.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/25 transition-transform hover:scale-110">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg transition-transform hover:scale-110">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-orange-500/25 transition-transform hover:scale-110">
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-green-400/60 hover:text-green-200"
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-green-200">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-green-300"
                    >
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-green-400 transition-transform duration-300 group-hover:scale-150"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-green-200">Programs</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {programs.map((program, index) => (
                  <li key={index}>
                    <div className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-green-300">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-green-400 transition-transform duration-300 group-hover:scale-150"></div>
                      {program}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-green-200">Contact</h3>
              <div className="mt-5 space-y-4 text-sm">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <contact.icon className="h-4 w-4 text-green-200" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{contact.label}</div>
                      <a
                        href={contact.href}
                        className="font-medium text-gray-300 transition-colors duration-300 hover:text-green-300"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 text-sm text-gray-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Clock className="h-4 w-4 text-green-200" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Office Hours</div>
                  Mon - Sat: 9:00 - 18:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
              <div className="text-gray-400">
                (c) {year} Alta Academy by Implantaly. All rights reserved.
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                  <Users className="h-4 w-4 text-green-200" />
                  1,200+ alumni
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                  <Award className="h-4 w-4 text-green-200" />
                  Certified programs
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link href="/privacy" className="text-gray-400 transition-colors hover:text-green-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 transition-colors hover:text-green-300">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-400 transition-colors hover:text-green-300">
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
