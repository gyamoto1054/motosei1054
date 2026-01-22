import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PartnerBannerSection } from "@/components/partner-banner-section"
import { StrengthSection } from "@/components/strength-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StrengthSection />
        <PartnerBannerSection />
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
