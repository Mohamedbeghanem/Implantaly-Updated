import { Navigation } from "@/components/navigation"
import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { Footer } from "@/components/footer"
import DentalCourseSlider from "@/components/mvpblocks/DentalCourseSlider"
import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import { Gallery6 } from '@/components/gallery6'
import { Feature51 } from '@/components/feature51'
import { Gallery7 } from '@/components/gallery7'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 lg:pt-20">
        <AltaAcademyHero />
        <Feature51 />
        <Gallery6 />
        <Gallery7 />
      </div>
      <AnimatedLogoCloud />
      <Footer />
    </main>
  )
}
