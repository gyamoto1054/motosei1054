import { TrendingUp, BookOpen, Headphones, Zap, Target, Users } from "lucide-react"

const benefits = [
  {
    icon: BookOpen,
    title: "徹底された営業マニュアル",
    description: "専任担当者から提供される営業戦略マニュアルで、効果的なアプローチ方法やクロージング手法を習得。未経験でも安心してスタートできます。",
  },
  {
    icon: Headphones,
    title: "専任担当者による手厚いサポート",
    description: "商談同席、提案資料の作成支援、技術的な質問対応など、専任の担当者がきめ細かくサポートいたします。",
  },
  {
    icon: TrendingUp,
    title: "業界トップクラスの報酬率",
    description: "初期制作費は50%、月額費用は40%の高い報酬率を実現。成果に見合った収入を得ることができます。",
  },
  {
    icon: Target,
    title: "営業ツール・資料の提供",
    description: "提案書、パンフレット、事例集など、営業活動に必要なツールを全て提供。すぐに営業活動を開始できます。",
  },
  {
    icon: Zap,
    title: "AI時代に必須の商材",
    description: "ChatGPT・AI検索に対応したLLMO対策は今最も求められているサービス。お客様への提案がしやすい商材です。",
  },
  {
    icon: Users,
    title: "定期的な勉強会・情報共有",
    description: "最新のWeb集客トレンドや成功事例を共有する勉強会を定期開催。常にスキルアップできる環境を整えています。",
  },
]

export function PartnerBenefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            代理店のメリット
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            本山製作所の代理店として、充実したサポート体制と高い報酬率をご活用いただけます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col p-8 bg-card border border-border rounded-lg hover:shadow-lg hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground rounded-lg shrink-0 mb-6">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
