
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ContactSendMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent successfully!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Бидэнд холбогдох үү</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">
          нэр <span className="text-red-500">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Таны нэр" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
          имэйл <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Утас (заавал биш)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(976) 1234-5678"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">
          Сэдэв <span className="text-red-500">*</span>
          </Label>
          <Select required onValueChange={handleSelectChange} value={formData.subject}>
            <SelectTrigger id="subject" className="w-full">
              <SelectValue placeholder="Сэдвийг сонгоно уу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">Ерөнхий лавлагаа</SelectItem>
              <SelectItem value="support">Техникийн дэмжлэг</SelectItem>
              <SelectItem value="billing">Тооцооны асуулт</SelectItem>
              <SelectItem value="feedback">Санал хүсэлт</SelectItem>
              <SelectItem value="other">Бусад</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
          Мессеж <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Бид танд хэрхэн тусалж чадах вэ?"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
        Nлгээх
        </Button>
      </form>
    </div>
  )
}
