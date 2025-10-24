'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Crown } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'INÍCIO' },
    { href: '/servicos', label: 'SERVIÇOS' },
    { href: '/localizacao', label: 'LOCALIZAÇÃO' },
    { href: '/contato', label: 'CONTATO' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[hsl(var(--bg-primary)_/_0.9)] backdrop-blur-md border-b border-[hsl(var(--border))]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Crown className="w-10 h-10 text-[hsl(var(--accent-gold))] drop-shadow-lg" />
            </div>
            <span className="text-xl font-bold tracking-wider text-[hsl(var(--text-primary))] font-[family-name:var(--font-rajdhani)]">
              BARBEARIA MAGNATA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wider transition-all duration-300 relative group ${
                  index === navLinks.length - 1
                    ? 'btn-cyan px-6 py-2'
                    : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-cyan))]'
                }`}
              >
                {link.label}
                {index !== navLinks.length - 1 && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--accent-cyan))] transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[hsl(var(--text-primary))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-[hsl(var(--bg-primary)_/_0.98)] backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold tracking-wider text-[hsl(var(--text-primary))] hover:text-[hsl(var(--accent-cyan))] transition-colors py-3 border-b border-[hsl(var(--border))]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
