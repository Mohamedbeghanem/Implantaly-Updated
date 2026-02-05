"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function AltaAcademyTestimonials() {
  const testimonials = [
    {
      quote: "The team explained every step of my implant treatment and made me feel comfortable throughout. The result looks natural and feels great.",
      author: "Amina B.",
      title: "Implant Patient",
      rating: 5
    },
    {
      quote: "I came in for cosmetic work and left with a smile I finally love. Professional, gentle, and very attentive.",
      author: "Karim O.",
      title: "Cosmetic Dentistry",
      rating: 5
    },
    {
      quote: "Clear communication, modern equipment, and a calm environment. I appreciated the follow-up care after my procedure.",
      author: "Nadia H.",
      title: "Restorative Care",
      rating: 5
    }
  ]

  return (
    <section className="relative w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-neutral-500/20 to-neutral-700/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-neutral-600/20 to-neutral-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Patient Stories
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from patients who trusted Implantaly Dental Clinic with their smiles
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group p-8 bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neutral-700 to-neutral-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-neutral-200 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-neutral-500 to-neutral-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-neutral-300 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neutral-600/20 to-neutral-800/20 backdrop-blur-xl rounded-2xl border border-neutral-500/30">
            <span className="text-white/90 text-lg">
              Ready to start your smile journey?
            </span>
            <a 
              href="/contact" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-neutral-700 to-neutral-900 hover:from-neutral-800 hover:to-black text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black/20"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
