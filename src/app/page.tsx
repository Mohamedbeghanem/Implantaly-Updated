import { Navigation } from "@/components/navigation"
import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { Footer } from "@/components/footer"
import TeamSlider from "@/components/mvpblocks/Team-slider"
import DentalCourseSlider from "@/components/mvpblocks/DentalCourseSlider"
import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import { FaqSection1 } from '@/components/components/pro-blocks/landing-page/faq-sections/faq-section-1'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 lg:pt-20">
        <AltaAcademyHero />
        <DentalCourseSlider />
      </div>
      <TeamSlider />
      <AnimatedLogoCloud />
      <FaqSection1 />
      <Footer />
    </main>
  )
}
