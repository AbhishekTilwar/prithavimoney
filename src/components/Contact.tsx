import { MapPin, MessageCircle } from 'lucide-react'
import { Facebook, Instagram } from './BrandIcons'
import { CONTACT, LINKS, ext } from '../lib/constants'
import { Button } from './Button'
import { Reveal } from './Reveal'

const rows = [
  { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.phoneDisplay, href: LINKS.whatsapp },
  { icon: Instagram, label: 'Instagram', value: CONTACT.instagramHandle, href: LINKS.instagram },
  { icon: Facebook, label: 'Facebook', value: CONTACT.facebookName, href: LINKS.facebook },
]

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="h2 mt-4">Let&rsquo;s Start a Conversation</h2>
          <address className="mt-8 flex gap-4 not-italic">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
            <div className="text-lg leading-relaxed text-ink/80">
              <p className="font-serif text-xl text-navy-900">{CONTACT.name}</p>
              {CONTACT.addressLines.map((l) => <p key={l}>{l}</p>)}
            </div>
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={LINKS.consult}>Book Free Consultation</Button>
            <Button href={LINKS.maps} variant="ghost" icon="none"><MapPin className="h-4 w-4" aria-hidden />Open in Google Maps</Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="divide-y divide-navy-900/10 rounded-3xl border border-navy-900/[0.07] bg-white shadow-soft">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a href={href} {...ext} className="group flex items-center gap-5 p-6 transition-colors hover:bg-emerald-soft/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-soft text-emerald-deep"><Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-ink/50">{label}</span>
                    <span className="block text-lg font-medium text-navy-900">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
