"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
  Building2,
  Heart,
  Rocket,
  Mail,
  ExternalLink,
  Sparkles,
  Zap,
  Target
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
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="本山製作所 ロゴ"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating Icons */}
        <div className="absolute top-1/3 left-1/4 opacity-20 animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Target className="w-7 h-7" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm tracking-wide text-background/80">Web制作 × デジタルマーケティング</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-balance">
          <span className="bg-gradient-to-r from-background via-background to-background/80 bg-clip-text">
            ビジネスを加速する
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            Web戦略
          </span>
        </h1>
        <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          LLMO対策とHP制作を融合し、AI時代に合った集客戦略を支援します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 shadow-lg shadow-accent/25"
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
            className="rounded-full border-background/30 text-background hover:bg-background/10 px-8 bg-transparent backdrop-blur-sm"
          >
            <Link href="/contact">
              お問い合わせ
            </Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-background/10">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-background">60+</p>
            <p className="text-sm text-background/50 mt-1">年の実績</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-background">100%</p>
            <p className="text-sm text-background/50 mt-1">品質へのこだわり</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-background">AI</p>
            <p className="text-sm text-background/50 mt-1">時代対応</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
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
// Vision Section Component
// ========================================
function VisionSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Our Vision
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            私たちのビジョン
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            事業を通じて、日本社会に貢献していきます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision 1 */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-2xl p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-background/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                日本を活気付かせる
              </h3>
              <p className="text-background/70 leading-relaxed">
                個人事業主から中小零細企業の廃業、倒産を防げるように支援をして、日本を活気付かせたい。
                私たちは、事業者様の集客課題を解決し、持続可能な成長をサポートすることで、日本経済の活性化に貢献します。
              </p>
            </div>
          </div>

          {/* Vision 2 */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-accent to-accent/90 text-accent-foreground rounded-2xl p-8 md:p-10">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-background/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent-foreground/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                働き方の多様性を支援
              </h3>
              <p className="text-accent-foreground/80 leading-relaxed">
                子育て世代やシングルで子育てをしている方に、時間に捕らわれず、稼げる環境を作ります。
                代理店制度を通じて、場所や時間を選ばない新しい働き方を実現し、家庭と仕事の両立を応援します。
              </p>
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
                <a href="https://motosei.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
                  https://motosei.com/
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium text-foreground w-28 shrink-0">メールアドレス</span>
                <a href="mailto:info@motosei.com" className="text-sm text-accent hover:underline flex items-center gap-1">
                  info@motosei.com
                  <Mail className="w-3 h-3" />
                </a>
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
              <div className="aspect-[4/3] bg-gradient-to-br from-foreground via-foreground/95 to-foreground/85 rounded-2xl overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-background relative z-10">
                    <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <span className="text-xs tracking-widest uppercase opacity-80">Since</span>
                    </div>
                    <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-background to-background/70 bg-clip-text text-transparent">1962</p>
                    <p className="text-sm mt-4 opacity-60">60年以上の信頼と実績</p>
                    <div className="flex justify-center gap-4 mt-6">
                      <div className="w-12 h-1 bg-accent/50 rounded-full" />
                      <div className="w-4 h-1 bg-accent/30 rounded-full" />
                    </div>
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
        <VisionSection />
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
