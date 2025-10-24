'use client'

import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { MapPin, Phone, Mail, Instagram, Clock, Navigation2 } from 'lucide-react'

export default function LocalizacaoPage() {
  const contactInfo = {
    address: 'Rua Exemplo, 123 - Centro',
    city: 'São Paulo, SP',
    zipCode: '01000-000',
    phone: '(11) 99999-9999',
    email: 'contato@barbeariamagnata.com',
    instagram: '@barbeariamagnata',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Barbearia+Centro+São+Paulo'
  }

  const businessHours = [
    { day: 'Segunda - Sexta', hours: '08:00 - 20:00', isOpen: true },
    { day: 'Sábado', hours: '08:00 - 18:00', isOpen: true },
    { day: 'Domingo', hours: 'Fechado', isOpen: false }
  ]

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
              Localização & Contato
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--accent-cyan))] to-transparent" />
            <p className="text-[hsl(var(--text-secondary))] text-lg">
              Venha nos visitar e experimente o futuro da barbearia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Card */}
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-[hsl(var(--accent-gold))]" />
                <h2 className="text-3xl font-bold">Como Chegar</h2>
              </div>

              {/* Map Placeholder */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-[hsl(var(--bg-tertiary))] flex items-center justify-center group cursor-pointer">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-cyan)_/_0.1)] to-[hsl(var(--accent-gold)_/_0.1)]"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, hsl(var(--border)) 25%, transparent 25%, transparent 75%, hsl(var(--border)) 75%, hsl(var(--border))), linear-gradient(45deg, hsl(var(--border)) 25%, transparent 25%, transparent 75%, hsl(var(--border)) 75%, hsl(var(--border)))',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                  }}
                />
                <div className="relative z-10 text-center space-y-3">
                  <MapPin className="w-16 h-16 text-[hsl(var(--accent-gold))] mx-auto" />
                  <p className="text-[hsl(var(--text-secondary))]">Mapa Interativo</p>
                  <a
                    href={contactInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-block px-6 py-3"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[hsl(var(--accent-cyan))] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[hsl(var(--text-primary))] font-semibold">
                      {contactInfo.address}
                    </p>
                    <p className="text-[hsl(var(--text-secondary))]">
                      {contactInfo.city}
                    </p>
                    <p className="text-[hsl(var(--text-muted))] text-sm">
                      CEP: {contactInfo.zipCode}
                    </p>
                  </div>
                </div>

                <a
                  href={contactInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[hsl(var(--accent-cyan))] hover:text-[hsl(var(--accent-gold))] transition-colors group"
                >
                  <Navigation2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Ver rotas e direções</span>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Phone className="w-8 h-8 text-[hsl(var(--accent-cyan))]" />
                  <h2 className="text-3xl font-bold">Contato</h2>
                </div>

                <div className="space-y-5">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
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
                        {contactInfo.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
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
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
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
                        {contactInfo.instagram}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-8 h-8 text-[hsl(var(--accent-gold))]" />
                  <h2 className="text-3xl font-bold">Horário</h2>
                </div>

                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-[hsl(var(--border))] last:border-b-0"
                    >
                      <span className="text-[hsl(var(--text-secondary))]">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-semibold ${
                          schedule.isOpen
                            ? 'text-[hsl(var(--accent-cyan))]'
                            : 'text-[hsl(var(--destructive))]'
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="/agendamento"
                    className="btn-gold w-full py-3 inline-block text-center"
                  >
                    Agendar Horário
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para Transformar seu Visual?
            </h2>
            <p className="text-[hsl(var(--text-secondary))] text-lg max-w-2xl mx-auto">
              Visite-nos e experimente o melhor em serviços de barbearia premium com tecnologia de ponta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="/agendamento"
                className="btn-gold text-lg px-8 py-4 inline-block"
              >
                Agendar Agora
              </a>
              <a
                href={`https://wa.me/5511999999999`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan text-lg px-8 py-4 inline-block"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
