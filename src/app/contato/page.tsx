'use client'

import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Olá! Novo contato via website:

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}`

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bg-primary))] via-[hsl(var(--bg-secondary))] to-[hsl(var(--bg-primary))]" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-slide-in">
            <h1 className="text-4xl md:text-6xl font-bold">
              Entre em Contato
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--accent-cyan))] to-transparent" />
            <p className="text-[hsl(var(--text-secondary))] text-lg">
              Estamos aqui para responder suas dúvidas e agendar seu próximo corte
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-8 space-y-6">
                <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>

                <div className="space-y-5">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[hsl(var(--bg-tertiary)_/_0.5)] hover:bg-[hsl(var(--bg-tertiary))] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent-cyan)_/_0.2)] to-[hsl(var(--accent-cyan)_/_0.05)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-[hsl(var(--accent-cyan))]" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(var(--text-muted))] uppercase tracking-wide">
                        Telefone
                      </p>
                      <p className="text-[hsl(var(--text-primary))] font-semibold">
                        (11) 99999-9999
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@barbeariamagnata.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[hsl(var(--bg-tertiary)_/_0.5)] hover:bg-[hsl(var(--bg-tertiary))] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent-gold)_/_0.2)] to-[hsl(var(--accent-gold)_/_0.05)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-[hsl(var(--accent-gold))]" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(var(--text-muted))] uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-[hsl(var(--text-primary))] font-semibold">
                        contato@barbeariamagnata.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/barbeariamagnata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[hsl(var(--bg-tertiary)_/_0.5)] hover:bg-[hsl(var(--bg-tertiary))] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent-cyan)_/_0.2)] to-[hsl(var(--accent-gold)_/_0.2)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-[hsl(var(--accent-cyan))]" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(var(--text-muted))] uppercase tracking-wide">
                        Instagram
                      </p>
                      <p className="text-[hsl(var(--text-primary))] font-semibold">
                        @barbeariamagnata
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-[hsl(var(--bg-tertiary)_/_0.5)]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent-gold)_/_0.2)] to-[hsl(var(--accent-cyan)_/_0.2)] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[hsl(var(--accent-gold))]" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(var(--text-muted))] uppercase tracking-wide">
                        Endereço
                      </p>
                      <p className="text-[hsl(var(--text-primary))] font-semibold">
                        Rua Exemplo, 123 - Centro
                      </p>
                      <p className="text-[hsl(var(--text-secondary))] text-sm">
                        São Paulo, SP - Brasil
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="/localizacao"
                    className="btn-cyan w-full py-3 inline-block text-center"
                  >
                    Ver no Mapa
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Envie uma Mensagem</h2>
                  <p className="text-[hsl(var(--text-secondary))]">
                    Preencha o formulário e entraremos em contato via WhatsApp
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-12"
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Agendamento">Agendamento</option>
                      <option value="Informações">Informações sobre serviços</option>
                      <option value="Dúvidas">Dúvidas</option>
                      <option value="Sugestões">Sugestões</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={6}
                    className="w-full resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-lg flex items-center justify-center gap-3"
                >
                  <span>Enviar via WhatsApp</span>
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-[hsl(var(--text-muted))]">
                  * Sua mensagem será enviada via WhatsApp para nossa equipe
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Prefere Agendar Direto?
            </h2>
            <p className="text-[hsl(var(--text-secondary))] text-lg max-w-2xl mx-auto">
              Use nosso sistema de agendamento online e garanta seu horário
            </p>
            <a
              href="/agendamento"
              className="btn-gold text-lg px-8 py-4 inline-block"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
