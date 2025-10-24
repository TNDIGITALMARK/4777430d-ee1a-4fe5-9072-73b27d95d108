'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const whatsappNumber = '5511999999999'
  const message = 'Olá! Gostaria de agendar um horário na Barbearia Magnata.'

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse-glow"
      aria-label="Contato via WhatsApp"
      style={{
        boxShadow: '0 4px 24px rgba(37, 211, 102, 0.4)'
      }}
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
    </button>
  )
}
