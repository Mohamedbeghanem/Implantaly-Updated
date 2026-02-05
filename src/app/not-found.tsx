"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Users, Award, Phone } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/features", icon: Award },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-neutral-900/10 mix-blend-multiply blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-neutral-800/10 mix-blend-multiply blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primaryForeground text-lg font-semibold">
              ID
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-foreground">Implantaly</div>
              <div className="text-xs uppercase tracking-[0.35em] text-muted">Dental Clinic</div>
            </div>
          </div>
        </div>

        {/* 404 Content */}
        <Card className="p-12 bg-surface/90 backdrop-blur-xl border border-border rounded-3xl shadow-sm">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold text-primary mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have vanished into the digital void. 
              Don't worry, even the best dental professionals sometimes need to find their way back to familiar territory.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="px-8 py-3 rounded-xl">
              <Link href="/" className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-8 py-3 rounded-xl">
              <Link href="/features" className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                View Services
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-border pt-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex flex-col items-center p-4 rounded-xl hover:bg-surface2 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-primaryForeground" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-accent">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-muted mb-4">
            Still can't find what you're looking for?
          </p>
          <Button asChild variant="ghost" className="text-primary hover:text-primary/80 hover:bg-surface2">
            <Link href="/contact" className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact the Clinic
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
