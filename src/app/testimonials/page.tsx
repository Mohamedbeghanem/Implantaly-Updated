import { AltaAcademyTestimonials } from "@/components/alta-academy-testimonials"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Student Testimonials
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from our graduates about their experience and success with Alta Academy
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <AltaAcademyTestimonials />
    </main>
  )
}
