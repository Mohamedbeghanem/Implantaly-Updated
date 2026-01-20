"use client"

import {
  Award,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Live Surgery", href: "/live-surgery" },
    { name: "Workshops", href: "/workshops" },
    { name: "Contact", href: "/contact" },
  ]

  const programs = [
    "Live Surgery Sessions",
    "Hands-On Prosthetic Workshops",
    "Clinical Conferences & Masterclasses",
    "Implantology Training Programs",
    "Digital Dentistry & Treatment Planning",
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
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },

  ]

  return (
    <footer className="relative w-full overflow-hidden bg-background text-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-accent/10 via-primary/10 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)_/_0.08),_transparent_55%)]"></div>
      </div>

      <div className="relative z-10">
        {/* CTA Strip */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface/90 via-surface/70 to-surface/40 p-6 backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-accent">Alta Academy</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
                  Train with expert surgeons and turn technique into confidence.
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Hands-on courses, mentoring, and clinical insights designed to level up your practice.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primaryForeground shadow-sm transition hover:translate-y-[-1px] hover:bg-primary/90"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-accent"
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
              <p className="mt-5 text-sm leading-relaxed text-muted">
                A focused dental education hub for implantology and advanced clinical practice.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface2 text-muted transition hover:border-primary/60 hover:text-accent"
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-muted transition-colors duration-300 hover:text-accent"
                    >
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Programs</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {programs.map((program, index) => (
                  <li key={index}>
                    <div className="group flex items-center text-muted transition-colors duration-300 hover:text-accent">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"></div>
                      {program}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</h3>
              <div className="mt-5 space-y-4 text-sm">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-surface2">
                      <contact.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted">{contact.label}</div>
                      <a
                        href={contact.href}
                        className="font-medium text-foreground transition-colors duration-300 hover:text-accent"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 text-sm text-muted">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted">Office Hours</div>
                  Mon - Sat: 9:00 - 18:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
              <div className="text-muted">
                (c) {year} Alta Academy by Implantaly. All rights reserved.
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1">
                  <Users className="h-4 w-4 text-primary" />
                  200+ alumni
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1">
                  <Award className="h-4 w-4 text-primary" />
                  Certified programs
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link href="/privacy" className="text-muted transition-colors hover:text-accent">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted transition-colors hover:text-accent">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-muted transition-colors hover:text-accent">
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
