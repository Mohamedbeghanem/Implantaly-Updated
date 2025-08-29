import { AltaAcademyFeatures } from "@/components/alta-academy-features"
import { AltaAcademyStats } from "@/components/alta-academy-stats"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              About Alta Academy
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Leading dental education platform committed to advancing professional skills and knowledge
          </p>
        </div>
      </section>

      {/* Features Section */}
      <AltaAcademyFeatures />
      
      {/* Stats Section */}
      <AltaAcademyStats />
    </main>
  )
}
