import { Phone, MapPin, Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <p className="text-xl font-bold mb-6">
              有限会社本山製作所
            </p>
            <p className="text-background/60 text-sm leading-relaxed max-w-md">
              製造業のルーツを持つWeb事業パートナー。
              HP・LP制作からLLMO対策（SEO・MEO含む）まで、
              御社のビジネス成長を総合的にサポートします。
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="h-5 w-5 text-background/60 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-background/80">本社</p>
                <p className="text-sm text-background/60">東京都品川区西大井6-17-13</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-background/60 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-background/80">営業所</p>
                <p className="text-sm text-background/60">東京都足立区梅島3-16-10</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-background/60 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-background/80">連絡先</p>
                <p className="text-sm text-background/60">090-3916-1054</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/40">
            © 2024 有限会社本山製作所. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
