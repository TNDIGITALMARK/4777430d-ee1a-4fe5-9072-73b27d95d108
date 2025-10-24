'use client'

import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, Scissors } from 'lucide-react'

export default function AgendamentoPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Corte Clássico',
    date: '',
    time: ''
  })

  const services = [
    { name: 'Corte Clássico', price: 'R$ 45', duration: '30 min' },
    { name: 'Barba Completa', price: 'R$ 35', duration: '20 min' },
    { name: 'Barba & Corte', price: 'R$ 75', duration: '45 min' },
    { name: 'Tratamento Premium', price: 'R$ 120', duration: '60 min' }
  ]

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const selectedService = services.find(s => s.name === formData.service)
    const message = `Olá! Gostaria de fazer um agendamento:

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Serviço:* ${formData.service} (${selectedService?.price})
*Data:* ${new Date(formData.date).toLocaleDateString('pt-BR')}
*Horário:* ${formData.time}

Aguardo confirmação. Obrigado!`

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
              Agendamento Online
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--accent-cyan))] to-transparent" />
            <p className="text-[hsl(var(--text-secondary))] text-lg">
              Agende seu horário e seja direcionado para o WhatsApp para confirmar
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-[hsl(var(--accent-cyan))]" />
                  <h2 className="text-2xl font-bold">Suas Informações</h2>
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
                      placeholder="Digite seu nome"
                      className="w-full h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Telefone/WhatsApp *
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

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="email" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full h-12"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[hsl(var(--border))]" />

              {/* Service Selection */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Scissors className="w-6 h-6 text-[hsl(var(--accent-gold))]" />
                  <h2 className="text-2xl font-bold">Escolha o Serviço</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.name}
                      className={`glass-card p-4 cursor-pointer transition-all duration-300 ${
                        formData.service === service.name
                          ? 'border-[hsl(var(--accent-gold))] shadow-[0_0_20px_hsl(var(--accent-gold)_/_0.3)]'
                          : 'hover:border-[hsl(var(--accent-cyan)_/_0.5)]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.name}
                        checked={formData.service === service.name}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">{service.name}</h3>
                        <div className="flex items-center justify-between text-sm text-[hsl(var(--text-secondary))]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                          <span className="text-[hsl(var(--accent-gold))] font-semibold">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-[hsl(var(--border))]" />

              {/* Date and Time Selection */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[hsl(var(--accent-cyan))]" />
                  <h2 className="text-2xl font-bold">Data e Horário</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Data *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm text-[hsl(var(--text-secondary))] uppercase tracking-wide">
                      Horário *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full h-12"
                      required
                    >
                      <option value="">Selecione um horário</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-lg flex items-center justify-center gap-3"
                >
                  <span>Confirmar no WhatsApp</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </button>
                <p className="text-center text-sm text-[hsl(var(--text-muted))] mt-4">
                  * Você será redirecionado para o WhatsApp para confirmar seu agendamento
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
