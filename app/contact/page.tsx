import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "お問い合わせ | 有限会社本山製作所",
  description: "有限会社本山製作所へのお問い合わせ。HP・LP制作、LLMO対策（SEO・MEO含む）、その他サービスに関するご質問はこちらから。",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  )
}
