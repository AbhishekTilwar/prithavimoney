import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', dark = false }: {
  eyebrow: string; title: string; intro?: string; align?: 'left' | 'center'; dark?: boolean
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${dark ? '!text-gold-light' : ''}`}>{eyebrow}</p>
      <h2 className={`h2 mt-4 ${dark ? '!text-ivory' : ''}`}>{title}</h2>
      {intro && <p className={`lead mt-5 ${dark ? '!text-ivory/70' : ''}`}>{intro}</p>}
    </Reveal>
  )
}
