import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PartnerHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-primary text-primary-foreground pt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium mb-8">
          販売代理店募集
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8 text-balance">
          AIの最新集客ツールの
          <br />
          パートナーとして
          <br />
          一緒に成長しませんか？
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          LLMO対策（SEO・MEO含む）＋HP制作の販売代理店を募集しています。
          <br className="hidden md:block" />
          AI時代に必須の集客サービスで、新たな収益源を確立できます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full bg-background text-foreground hover:bg-background/90 px-8"
          >
            <Link href="#partner-contact">
              代理店に応募する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
          >
            <Link href="#benefits">
              詳細を見る
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
