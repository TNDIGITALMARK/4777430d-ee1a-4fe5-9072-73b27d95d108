'use client'

import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Scissors, Sparkles, Razor, Award, Calendar, Clock, MapPin, Instagram, Phone } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const services = [
    {
      icon: Scissors,
      title: 'Corte Clássico',
      description: 'Cortes tradicionais com técnica moderna',
      price: 'R$ 45'
    },
    {
      icon: Sparkles,
      title: 'Barba Completa',
      description: 'Aparação e finalização profissional',
      price: 'R$ 35'
    },
    {
      icon: Razor,
      title: 'Barba & Corte',
      description: 'Combo premium com tratamento',
      price: 'R$ 75'
    },
    {
      icon: Award,
      title: 'Tratamento Premium',
      description: 'Experiência completa de grooming',
      price: 'R$ 120'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/generated/hero-barbershop.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bg-primary)_/_0.7)] via-[hsl(var(--bg-primary)_/_0.8)] to-[hsl(var(--bg-primary))]" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gradient-gold">
                BARBEARIA MAGNATA
              </h1>
              <p className="text-xl md:text-2xl text-[hsl(var(--accent-cyan))] neon-glow uppercase tracking-widest">
                The Future of Grooming
              </p>
            </div>

            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--accent-cyan))] to-transparent" />

            <p className="text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
              Experimente o futuro da barbearia com tecnologia de ponta e serviços premium em um ambiente sofisticado e moderno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/agendamento" className="btn-gold text-lg px-8 py-4 inline-block">
                Agendar Agora
              </Link>
              <Link href="/servicos" className="btn-cyan text-lg px-8 py-4 inline-block">
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[hsl(var(--accent-cyan))] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[hsl(var(--accent-cyan))] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                {/* Calendar Icon */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-cyan)_/_0.2)] to-[hsl(var(--accent-cyan)_/_0.05)] flex items-center justify-center neon-border">
                    <Calendar className="w-12 h-12 text-[hsl(var(--accent-cyan))]" />
                  </div>
                </div>

                {/* Booking Form */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      Agende seu Horário
                    </h3>
                    <p className="text-[hsl(var(--text-secondary))]">
                      Escolha o melhor horário para sua transformação
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                        Nome
                      </label>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        className="w-full h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                        Serviço
                      </label>
                      <select className="w-full h-12">
                        <option>Corte Clássico</option>
                        <option>Barba Completa</option>
                        <option>Combo Premium</option>
                        <option>Tratamento Premium</option>
                      </select>
                    </div>
                  </div>

                  <Link href="/agendamento" className="btn-gold w-full sm:w-auto px-8 py-3 inline-block text-center">
                    Continuar Agendamento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--accent-gold))] to-transparent" />
            <p className="text-[hsl(var(--text-secondary))] text-lg max-w-2xl mx-auto">
              Serviços premium com técnicas modernas e produtos de alta qualidade
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center space-y-4 group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[hsl(var(--accent-gold)_/_0.2)] to-[hsl(var(--accent-gold)_/_0.05)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[hsl(var(--accent-gold))]" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-[hsl(var(--text-secondary))] text-sm">
                  {service.description}
                </p>
                <p className="text-2xl font-bold text-[hsl(var(--accent-gold))] gold-glow">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="w-10 h-10 text-[hsl(var(--accent-cyan))]" />
                <h3 className="text-2xl font-bold">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3 text-[hsl(var(--text-secondary))]">
                <div className="flex justify-between items-center py-2 border-b border-[hsl(var(--border))]">
                  <span>Segunda - Sexta</span>
                  <span className="text-[hsl(var(--text-primary))] font-semibold">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[hsl(var(--border))]">
                  <span>Sábado</span>
                  <span className="text-[hsl(var(--text-primary))] font-semibold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Domingo</span>
                  <span className="text-[hsl(var(--destructive))] font-semibold">Fechado</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-10 h-10 text-[hsl(var(--accent-gold))]" />
                <h3 className="text-2xl font-bold">Encontre-nos</h3>
              </div>
              <div className="space-y-4 text-[hsl(var(--text-secondary))]">
                <p className="text-[hsl(var(--text-primary))]">
                  Rua Exemplo, 123 - Centro<br />
                  São Paulo, SP - Brasil
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-center gap-3 text-[hsl(var(--accent-cyan))] hover:text-[hsl(var(--accent-gold))] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(11) 99999-9999</span>
                  </a>
                  <a
                    href="https://instagram.com/barbeariamagnata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[hsl(var(--accent-cyan))] hover:text-[hsl(var(--accent-gold))] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@barbeariamagnata</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-8">
        <div className="container-custom">
          <div className="text-center text-[hsl(var(--text-muted))] text-sm">
            <p>© 2024 Barbearia Magnata. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com excelência e dedicação.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
