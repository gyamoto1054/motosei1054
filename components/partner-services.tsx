import { Check } from "lucide-react"

export function PartnerServices() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            取り扱い商材
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI時代に必須の集客サービスをワンパッケージでご提供。
            高単価・高報酬率の商材で、安定した収益を実現できます。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-8 md:p-10 bg-primary text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                LLMO対策（SEO・MEO含む）＋ HP制作
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                AI検索時代に対応した次世代の集客パッケージ
              </p>
            </div>
            <div className="p-8 md:p-10">
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">集客に特化したHP・LP制作</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">SEO対策（検索エンジン最適化）</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">MEO対策（Googleビジネスプロフィール最適化）</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">LLMO対策（ChatGPT・AI検索対策）</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">月次レポート・改善提案</span>
                </li>
              </ul>

              {/* Pricing */}
              <div className="space-y-6 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-secondary rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">初期制作費</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">70万円〜</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-muted-foreground mb-1">代理店報酬</p>
                    <p className="text-2xl md:text-3xl font-bold text-accent">50%</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-secondary rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">月額費用</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">5万円〜</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-muted-foreground mb-1">代理店報酬</p>
                    <p className="text-2xl md:text-3xl font-bold text-accent">40%</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6 text-center">
                ※ 報酬は毎月末締め、翌月末払い
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
