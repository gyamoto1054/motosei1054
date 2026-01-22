const features = [
  {
    number: "01",
    title: "製造業のルーツが生む信頼性",
    description: "鉄・アルミ加工で培った品質管理と納期厳守の文化が、Web事業にも息づいています。確かな技術力と誠実な対応をお約束。",
  },
  {
    number: "02",
    title: "AI時代を見据えたLLMO対策",
    description: "従来のSEO・MEOに加え、ChatGPTやBing AIなどの大規模言語モデルでの検索表示を最適化。次世代の集客に対応。",
  },
  {
    number: "03",
    title: "ワンストップのサポート体制",
    description: "Web制作から広告運用、集客支援まで一貫対応。複数の業者に依頼する手間とコストを削減し、効率的な運用を実現。",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            選ばれる理由
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <span className="text-6xl md:text-7xl font-bold text-foreground/5 absolute -top-4 -left-2">
                {feature.number}
              </span>
              <div className="relative pt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
