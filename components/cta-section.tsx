import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          販売代理店を募集しています
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          HP・LP制作とLLMO対策（SEO・MEO含む）の販売代理店を募集しています。 高い需要と魅力的な報酬体系で、新たなビジネスチャンスを掴みませんか？
        </p>
        <Button 
          asChild 
          size="lg" 
          className="rounded-full bg-background text-foreground hover:bg-background/90 px-8"
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
