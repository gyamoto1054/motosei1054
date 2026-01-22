import { Globe, Search, Megaphone, Users, PenTool, Briefcase } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "HP・LP制作",
    description: "集客に特化したホームページ・ランディングページを制作。デザインからコーディング、SEO対策まで一貫対応。",
  },
  {
    icon: Search,
    title: "SEO・MEO対策",
    description: "検索エンジン最適化とGoogleビジネスプロフィールの最適化で、地域密着型ビジネスの集客を強化。",
  },
  {
    icon: Megaphone,
    title: "LLMO対策",
    description: "AI検索時代に対応したLLM最適化。ChatGPTやBing AIなどのAI検索での表示順位を向上。",
  },
  {
    icon: Users,
    title: "広告運用",
    description: "Google広告、SNS広告、バナー広告の運用代行。データ分析に基づいた効果的な広告戦略を立案。",
  },
  {
    icon: PenTool,
    title: "漫画制作",
    description: "商品やサービスの魅力を漫画で分かりやすく伝える。LPやSNS用の販促漫画を制作。",
  },
  {
    icon: Briefcase,
    title: "顧問制度",
    description: "Web戦略のプロが御社の顧問として参画。継続的なサポートで長期的な成長を支援。",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            サービス一覧
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Web制作からデジタルマーケティングまで、
            御社のビジネス成長に必要なサービスをワンストップで提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:shadow-lg hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
