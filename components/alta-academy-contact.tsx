"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AltaAcademyContact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Primary Phone",
      value: "+213 661 606 706",
      description: "Main contact line",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Phone,
      title: "Secondary Phone",
      value: "+213 770 222 385",
      description: "Alternative contact",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Primary Email",
      value: "altaacademybyimplantaly@gmail.com",
      description: "Main email address",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Secondary Email",
      value: "altaacademy@implantaly.com",
      description: "Alternative email",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your questions"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging with our support team"
    },
    {
      icon: MapPin,
      title: "Global Reach",
      description: "Serving dental professionals worldwide"
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
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to advance your dental career? Contact our team to learn more about our programs
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="group text-center p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">
                {info.title}
              </h3>
              <div className="text-white font-bold mb-1">
                {info.value}
              </div>
              <p className="text-white/70 text-xs">
                {info.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group text-center p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center px-8 py-6 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-3xl border border-emerald-500/30">
            <span className="text-white/90 text-lg mb-4 sm:mb-0 sm:mr-6">
              Ready to transform your dental career? 
            </span>
            <Button asChild className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-xl border-0">
              <Link href="/contact" className="flex items-center">
                Contact Us Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
