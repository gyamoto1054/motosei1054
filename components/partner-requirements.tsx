const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "下記フォームより代理店希望の旨をご連絡ください。担当者より詳細をご案内いたします。",
  },
  {
    step: "02",
    title: "オンライン面談",
    description: "Zoomなどのオンラインツールで、商材の説明や報酬体系について詳しくご説明します。",
  },
  {
    step: "03",
    title: "契約締結",
    description: "代理店契約書を締結し、営業に必要なツールや資料をご提供します。",
  },
  {
    step: "04",
    title: "営業開始",
    description: "専任担当者のサポートを受けながら、営業活動を開始。商談同席も可能です。",
  },
]

const requirements = [
  "法人・個人事業主の方",
  "Web・IT業界での営業経験がある方（歓迎）",
  "既存のお客様にWebサービスを提案したい方",
  "副業としてWeb関連商材を扱いたい方",
]

export function PartnerRequirements() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Flow */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Flow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              代理店登録の流れ
            </h2>
            <div className="space-y-8">
              {steps.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Requirements
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              こんな方におすすめ
            </h2>
            <div className="bg-secondary rounded-lg p-8">
              <ul className="space-y-4">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  初期費用・加盟金は一切不要です。
                  <br />
                  お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
