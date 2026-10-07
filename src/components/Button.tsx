import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { LINKS, ext } from '../lib/constants'

type Variant = 'primary' | 'ghost' | 'ghostDark' | 'gold'

const styles: Record<Variant, string> = {
  primary: 'bg-navy-900 text-ivory hover:bg-navy-800 shadow-soft',
  gold: 'bg-gold text-navy-950 hover:bg-gold-light shadow-soft',
  ghost: 'border border-navy-900/20 text-navy-900 hover:border-emerald-deep hover:text-emerald-deep',
  ghostDark: 'border border-ivory/30 text-ivory hover:border-gold-light hover:text-gold-light',
}

interface Props {
  href: string
  variant?: Variant
  children: ReactNode
  icon?: 'arrow' | 'whatsapp' | 'none'
  className?: string
  external?: boolean
}

export function Button({ href, variant = 'primary', children, icon = 'arrow', className = '', external = true }: Props) {
  return (
    <motion.a
      href={href}
      {...(external ? ext : {})}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {icon === 'whatsapp' && <MessageCircle className="h-4 w-4" aria-hidden />}
      {children}
      {icon === 'arrow' && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      )}
    </motion.a>
  )
}

export const ConsultButton = ({ children = 'Book a Free Consultation', ...p }: Partial<Props>) => (
  <Button href={LINKS.consult} {...p}>{children}</Button>
)

export const WhatsAppButton = ({ children = 'Chat on WhatsApp', ...p }: Partial<Props>) => (
  <Button href={LINKS.whatsapp} icon="whatsapp" variant="ghost" {...p}>{children}</Button>
)
