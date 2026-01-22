import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnerHero } from "@/components/partner-hero"
import { PartnerBenefits } from "@/components/partner-benefits"
import { PartnerServices } from "@/components/partner-services"
import { PartnerRequirements } from "@/components/partner-requirements"
import { PartnerCTA } from "@/components/partner-cta"

export const metadata: Metadata = {
  title: "販売代理店募集 | 有限会社本山製作所",
  description: "HP・LP制作とLLMO対策（SEO・MEO含む）の販売代理店を募集。高報酬率と充実のサポート体制で、新たなビジネスチャンスを掴んでください。",
}

export default function PartnerPage() {
  return (
    <>
      <Header />
      <main>
        <PartnerHero />
        <PartnerBenefits />
        <PartnerServices />
        <PartnerRequirements />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  )
}
