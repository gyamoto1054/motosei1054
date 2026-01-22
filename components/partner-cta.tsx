"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function PartnerCTA() {
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
    <section id="partner-contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            代理店に応募する
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            以下のフォームよりお気軽にお問い合わせください。
            <br />
            担当者より2営業日以内にご連絡いたします。
          </p>
        </div>

        <div className="bg-card text-card-foreground rounded-lg p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                お申し込みありがとうございます
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                担当者より2営業日以内にご連絡いたします。
                <br />
                今しばらくお待ちください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partner-company">会社名・屋号</Label>
                  <Input 
                    id="partner-company" 
                    placeholder="株式会社〇〇" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner-name">お名前</Label>
                  <Input 
                    id="partner-name" 
                    placeholder="山田 太郎" 
                    required 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partner-email">メールアドレス</Label>
                  <Input 
                    id="partner-email" 
                    type="email" 
                    placeholder="example@company.co.jp" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner-phone">電話番号</Label>
                  <Input 
                    id="partner-phone" 
                    type="tel" 
                    placeholder="03-XXXX-XXXX" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-type">事業形態</Label>
                <Select required>
                  <SelectTrigger id="partner-type">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporation">法人</SelectItem>
                    <SelectItem value="sole-proprietor">個人事業主</SelectItem>
                    <SelectItem value="side-business">副業（会社員）</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-experience">現在の事業内容・営業経験</Label>
                <Textarea 
                  id="partner-experience" 
                  placeholder="現在の事業内容やWeb関連の営業経験についてお聞かせください" 
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-message">ご質問・ご要望</Label>
                <Textarea 
                  id="partner-message" 
                  placeholder="その他ご質問やご要望があればご記入ください" 
                  rows={3}
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "送信中..." : "代理店に応募する"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                ※ お送りいただいた情報は、代理店契約のご案内以外の目的には使用いたしません。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
