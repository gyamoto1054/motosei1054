"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            サービスに関するご質問やお見積りのご依頼など、
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-lg shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">メール</h3>
                <p className="text-muted-foreground">info@motoyama-ss.co.jp</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-lg shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">電話</h3>
                <p className="text-muted-foreground">03-XXXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-lg shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">所在地</h3>
                <p className="text-muted-foreground">
                  〒XXX-XXXX<br />
                  東京都〇〇区〇〇 X-X-X
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  送信完了
                </h3>
                <p className="text-muted-foreground">
                  お問い合わせありがとうございます。<br />
                  担当者より折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">会社名</Label>
                    <Input id="company" placeholder="株式会社〇〇" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input id="name" placeholder="山田 太郎" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="example@company.co.jp" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">電話番号</Label>
                  <Input id="phone" type="tel" placeholder="03-XXXX-XXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea 
                    id="message" 
                    placeholder="ご質問やご要望をご記入ください" 
                    rows={5}
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
