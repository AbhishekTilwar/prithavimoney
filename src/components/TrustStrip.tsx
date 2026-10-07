import { Compass, Eye, Hourglass, Target } from 'lucide-react'
import { Reveal } from './Reveal'

const items = [
  { icon: Compass, label: 'Personalized Guidance' },
  { icon: Target, label: 'Goal-Based Planning' },
  { icon: Eye, label: 'Transparent Approach' },
  { icon: Hourglass, label: 'Long-Term Focus' },
]

export function TrustStrip() {
  return (
    <section aria-label="Our principles" className="border-b border-navy-900/10 bg-ivory-100">
      <Reveal className="container-x grid grid-cols-2 gap-y-6 py-8 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-sm font-medium text-navy-900 sm:text-[15px]">
            <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
            {label}
          </div>
        ))}
      </Reveal>
    </section>
  )
}
