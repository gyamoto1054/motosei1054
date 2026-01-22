"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Handshake } from "lucide-react"

export function PartnerBannerSection() {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-accent-foreground/10 rounded-full flex items-center justify-center">
            <Handshake className="w-7 h-7 text-accent-foreground" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
          販売代理店を募集しています
        </h2>
        <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          HP・LP制作とLLMO対策（SEO・MEO含む）の販売代理店を募集しています。
          <br className="hidden md:block" />
          高い需要と魅力的な報酬体系で、新たなビジネスチャンスを掴みませんか？
        </p>
        <Button 
          asChild 
          size="lg" 
          className="rounded-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-8"
        >
          <Link href="/partner">
            代理店募集の詳細を見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
