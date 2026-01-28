"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { 
  Menu, 
  X, 
  ArrowRight, 
  Shield, 
  Wrench, 
  TrendingUp,
  Handshake,
  Globe, 
  Search, 
  Megaphone, 
  Users, 
  PenTool, 
  Briefcase,
  Phone, 
  MapPin, 
  Building2 
} from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

// ========================================
// Utility Functions (from lib/utils)
// ========================================
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ========================================
// Button Component (from components/ui/button)
// ========================================
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// ========================================
// Navigation Data
// ========================================
const navigation = [
  { name: "サービス", href: "#services" },
  { name: "会社概要", href: "#about" },
  { name: "代理店募集", href: "/partner" },
  { name: "お問い合わせ", href: "/contact" },
]

// ========================================
// Services Data
// ========================================
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

// ========================================
// Features Data
// ========================================
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

// ========================================
// Header Component
// ========================================
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            有限会社本山製作所
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">メニューを開く</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

// ========================================
// Hero Section Component
// ========================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <p className="text-sm tracking-widest uppercase mb-6 opacity-80">
          Web制作 × デジタルマーケティング
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-balance">
          ビジネスを加速する
          <br />
          <span className="text-primary-foreground/90">Web戦略</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          LLMO対策とHP制作を融合し、AI時代に合った集客戦略を支援します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full bg-background text-foreground hover:bg-background/90 px-8"
          >
            <Link href="#services">
              サービスを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
          >
            <Link href="/contact">
              お問い合わせ
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

// ========================================
// Strength Section Component
// ========================================
function StrengthSection() {
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

// ========================================
// Partner Banner Section Component
// ========================================
function PartnerBannerSection() {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-accent-foreground/10 rounded-full flex items-center justify-center">
            <Handshake className="w-7 h-7 text-accent-foreground" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
          販売代理店を募集しています
        </h2>
        <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          HP・LP制作とLLMO対策（SEO・MEO含む）の販売代理店を募集しています。
          <br className="hidden md:block" />
          高い需要と魅力的な報酬体系で、新たなビジネスチャンスを掴みませんか？
        </p>
        <Button 
          asChild 
          size="lg" 
          className="rounded-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-8"
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

// ========================================
// Services Section Component
// ========================================
function ServicesSection() {
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

// ========================================
// Features Section Component
// ========================================
function FeaturesSection() {
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

// ========================================
// About Section Component
// ========================================
function AboutSection() {
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
              製造事業：鉄・アルミの精密加工
              <br />
              長年培ってきた技術力と徹底した品質管理を基盤に、鉄やアルミを中心とした金属加工製造を行っております。現場で磨かれた「ものづくり」の精神を大切に、精度の高い製品をお届けします。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Web制作・運用支援：ビジネスの成長を加速させるデジタル活用
              <br />
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

// ========================================
// CTA Section Component
// ========================================
function CTASection() {
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

// ========================================
// Footer Component
// ========================================
function Footer() {
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

// ========================================
// Main Page Component
// ========================================
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StrengthSection />
        <PartnerBannerSection />
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
