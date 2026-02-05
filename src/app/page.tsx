import { Navigation } from "@/components/navigation"
import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { Footer } from "@/components/footer"
import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import { Hero1 } from '@/components/hero1';
import { Hero2 } from '@/components/hero-work';
import TeamSlider from "@/components/mvpblocks/Team-slider"; 
import { Feature43 } from "@/components/feature43";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16 lg:pt-20">
        <AltaAcademyHero />
           <Hero1 />
                 <Hero2 />
      </div>
      <Feature43 />
      <TeamSlider />
      <AnimatedLogoCloud />
      <Footer />
    </main>
  )
}
