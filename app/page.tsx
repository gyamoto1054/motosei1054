import { Phone, MapPin, Building2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            会社概要
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Company Details */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">会社名</span>
                <span className="text-sm text-muted-foreground">有限会社本山製作所</span>
              </div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">設立</span>
                <span className="text-sm text-muted-foreground">1962年5月</span>
              </div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">資本金</span>
                <span className="text-sm text-muted-foreground">300万円</span>
              </div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">事業内容</span>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>鉄・アルミの加工製造</p>
                  <p>HP・LP制作</p>
                  <p>漫画制作</p>
                  <p>SEO・MEO・LLMO対策</p>
                  <p>広告運用（Google、SNS、バナー）</p>
                  <p>集客支援</p>
                  <p>顧問制度</p>
                </div>
              </div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">本社</span>
                <span className="text-sm text-muted-foreground">東京都品川区西大井6-17-13</span>
              </div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">営業所</span>
                <span className="text-sm text-muted-foreground">東京都足立区梅島3-16-10</span>
              </div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">連絡先</span>
                <span className="text-sm text-muted-foreground">090-3916-1054</span>
              </div>
              <div className="flex gap-4 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">URL</span>
                <span className="text-sm text-muted-foreground">&nbsp;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">メールアドレス</span>
                <span className="text-sm text-muted-foreground">&nbsp;</span>
              </div>
            </div>
          </div>
          
          {/* Company Message */}
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground leading-relaxed mb-8">
              {"製造事業：鉄・アルミの精密加工\n長年培ってきた技術力と徹底した品質管理を基盤に、鉄やアルミを中心とした金属加工製造を行っております。現場で磨かれた「ものづくり」の精神を大切に、精度の高い製品をお届けします。"}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Web制作・運用支援：ビジネスの成長を加速させるデジタル活用
個人事業主様から中小零細企業様を対象に、Webを活用した集客・販促を総合的に支援いたします。
            </p>
            <div className="relative">
              <div className="aspect-[4/3] bg-primary rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <p className="text-sm tracking-widest uppercase mb-2 opacity-60">Since</p>
                    <p className="text-6xl md:text-7xl font-bold">1962</p>
                    <p className="text-sm mt-2 opacity-60">信頼と実績の歴史</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
