'use client'

import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Scissors, Sparkles, Award, Crown, Zap, Star, Check } from 'lucide-react'
import Link from 'next/link'

export default function ServicosPage() {
  const services = [
    {
      icon: Scissors,
      name: 'Corte Clássico',
      price: 'R$ 45',
      duration: '30 min',
      description: 'Cortes tradicionais executados com técnica moderna e precisão absoluta',
      features: [
        'Análise de tipo de cabelo e rosto',
        'Corte personalizado',
        'Finalização com produtos premium',
        'Lavagem e hidratação'
      ]
    },
    {
      icon: Sparkles,
      name: 'Barba Completa',
      price: 'R$ 35',
      duration: '20 min',
      description: 'Aparação e finalização profissional para uma barba impecável',
      features: [
        'Aparação e alinhamento',
        'Toalha quente relaxante',
        'Produtos de alta qualidade',
        'Finalização com óleo de barba'
      ]
    },
    {
      icon: Scissors,
      name: 'Barba & Corte',
      price: 'R$ 75',
      duration: '45 min',
      description: 'Combo premium combinando corte de cabelo e barba completa',
      features: [
        'Corte personalizado completo',
        'Barba alinhada e aparada',
        'Tratamento facial relaxante',
        'Produtos premium incluídos'
      ]
    },
    {
      icon: Award,
      name: 'Tratamento Premium',
      price: 'R$ 120',
      duration: '60 min',
      description: 'Experiência completa de grooming com todos os nossos serviços',
      features: [
        'Corte e barba premium',
        'Massagem facial relaxante',
        'Tratamento capilar profundo',
        'Bebida cortesia',
        'Produtos exclusivos'
      ]
    }
  ]

  const premiumFeatures = [
    {
      icon: Crown,
      title: 'Atendimento Premium',
      description: 'Experiência personalizada e exclusiva'
    },
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Equipamentos de última geração'
    },
    {
      icon: Star,
      title: 'Produtos Premium',
      description: 'Apenas marcas de alta qualidade'
    }
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
              Nossos Serviços
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--accent-cyan))] to-transparent" />
            <p className="text-[hsl(var(--text-secondary))] text-lg">
              Experiência premium com técnicas modernas e produtos de alta qualidade
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 space-y-6 group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--accent-gold)_/_0.2)] to-[hsl(var(--accent-gold)_/_0.05)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-[hsl(var(--accent-gold))]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                      <p className="text-sm text-[hsl(var(--text-muted))]">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[hsl(var(--accent-gold))] gold-glow">
                      {service.price}
                    </p>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-[hsl(var(--text-secondary))]">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-[hsl(var(--text-secondary))]"
                    >
                      <Check className="w-5 h-5 text-[hsl(var(--accent-cyan))] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/agendamento"
                  className="btn-gold w-full py-3 inline-block text-center mt-4"
                >
                  Agendar Agora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              O que nos torna diferentes
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--accent-gold))] to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center space-y-4"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[hsl(var(--accent-cyan)_/_0.2)] to-[hsl(var(--accent-gold)_/_0.2)] flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-[hsl(var(--accent-gold))]" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-[hsl(var(--text-secondary))]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para sua Transformação?
            </h2>
            <p className="text-[hsl(var(--text-secondary))] text-lg max-w-2xl mx-auto">
              Agende seu horário agora e experimente o futuro da barbearia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/agendamento"
                className="btn-gold text-lg px-8 py-4 inline-block"
              >
                Agendar Agora
              </Link>
              <Link
                href="/localizacao"
                className="btn-cyan text-lg px-8 py-4 inline-block"
              >
                Ver Localização
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
