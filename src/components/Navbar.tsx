import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LINKS, NAV, ext } from '../lib/constants'
import { ConsultButton } from './Button'
import { Logo } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-ivory/85 shadow-[0_1px_0_rgba(10,23,48,.08)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        <a href="#home" aria-label="Prithavi Money home"><Logo /></a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm font-medium text-ink/70 transition-colors hover:text-emerald-deep">{n.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ConsultButton className="!px-5 !py-2.5 !text-sm">Book Free Consultation</ConsultButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={LINKS.whatsapp} {...ext} aria-label="Chat on WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-soft text-emerald-deep">
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy-900"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col pb-6">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-navy-900/10 py-4 font-serif text-xl text-navy-900">
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-5">
                <ConsultButton className="w-full">Book Free Consultation</ConsultButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
