import { Navigation } from "@/components/navigation"
import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { Footer } from "@/components/footer"
import DentalCourseSlider from "@/components/mvpblocks/DentalCourseSlider"
import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import { Gallery6 } from '@/components/gallery6'
import { Feature51 } from '@/components/feature51'
import { Gallery7 } from '@/components/gallery7'
import { Hero1 } from '@/components/hero1';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 lg:pt-20">
        <AltaAcademyHero />
        <Feature51 />
           <Hero1
        heading="Live Surgery Sessions"
        description="Witness live surgical procedures performed by world-renowned experts. Enhance your skills and knowledge by observing real-time cases."
        image={{
          src: '/livesurgery01.jpeg',
          alt: 'Live surgery session in progress',
        }}
      />
        <Gallery6 />
        <Gallery7 />
      </div>
      <AnimatedLogoCloud />
      <Footer />
    </main>
  )
}
