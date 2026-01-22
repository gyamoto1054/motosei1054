import { Shield, Wrench, TrendingUp } from "lucide-react"

export function StrengthSection() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Our Strength
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            当社の強み
          </h2>
          <p className="text-xl md:text-2xl font-medium text-foreground/80 mb-8">
            「確かな品質を、デジタルの世界にも。」
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            私たちは、鉄・アルミ加工の現場で培った「細部まで妥協しない品質管理ノウハウ」を、Web制作のプロセスに応用しています。
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            流行り廃りの激しいWeb業界だからこそ、製造業のように堅実で、嘘のない、成果に直結する支援を。個人事業主様から中小零細企業様のHP・LP制作、最新のLLMO（AI）対策、広告運用まで、お客様のビジネス成長をワンストップでサポートいたします。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">品質へのこだわり</h3>
              <p className="text-sm text-muted-foreground">製造業で培った妥協なき品質管理</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">堅実なサポート</h3>
              <p className="text-sm text-muted-foreground">嘘のない、成果に直結する支援</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ワンストップ対応</h3>
              <p className="text-sm text-muted-foreground">制作から運用までトータルサポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
