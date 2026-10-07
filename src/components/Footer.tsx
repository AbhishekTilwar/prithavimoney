import { MessageCircle } from 'lucide-react'
import { Facebook, Instagram } from './BrandIcons'
import { CONTACT, LINKS, NAV, ext } from '../lib/constants'
import { Logo } from './Logo'

const footerNav = NAV.filter((n) => ['Home', 'About', 'Services', 'FAQ', 'Contact'].includes(n.label))
const socials = [
  { icon: Instagram, label: 'Instagram', href: LINKS.instagram },
  { icon: Facebook, label: 'Facebook', href: LINKS.facebook },
  { icon: MessageCircle, label: 'WhatsApp', href: LINKS.whatsapp },
]

export function Footer() {
  return (
    <footer className="on-dark mt-24 bg-navy-950 pb-28 pt-16 text-ivory/70 lg:pb-12">
      <div className="container-x grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs">Helping you make more confident financial decisions.</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">Navigate</p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-ivory">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">Social</p>
          <ul className="mt-4 space-y-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}><a href={href} {...ext} className="inline-flex items-center gap-2 hover:text-ivory"><Icon className="h-4 w-4" aria-hidden />{label}</a></li>
            ))}
          </ul>
        </div>
        <address className="not-italic">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">Contact</p>
          <div className="mt-4">{CONTACT.addressLines.map((l) => <p key={l}>{l}</p>)}</div>
        </address>
      </div>
      <div className="container-x mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-ivory/55">
        <p>Investment-related decisions involve risk. Information provided on this website is for general informational purposes and should not be considered a guarantee of returns or personalized investment advice unless specifically provided through a formal advisory relationship.</p>
        <p className="mt-4">&copy; 2026 Prithavi Money. All rights reserved.</p>
      </div>
    </footer>
  )
}
