import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, CalendarClock, ClipboardCheck, Flag, Landmark, Receipt } from 'lucide-react'
import { LINKS, ext } from '../lib/constants'
import { Reveal, SectionHeading } from './Reveal'

const services = [
  { icon: Landmark, title: 'Investment Planning', text: 'Make informed investment decisions aligned with your financial goals and risk profile.' },
  { icon: BarChart3, title: 'Mutual Fund Guidance', text: 'Understand suitable mutual fund options and build a disciplined investment approach.' },
  { icon: CalendarClock, title: 'SIP Planning', text: 'Build long-term investing habits through structured and goal-oriented SIP planning.' },
  { icon: Receipt, title: 'Tax & Financial Planning', text: 'Bring greater clarity to financial decisions while considering your broader financial goals.' },
  { icon: Flag, title: 'Goal-Based Planning', text: 'Plan for important milestones such as education, home ownership, retirement, and wealth creation.' },
  { icon: ClipboardCheck, title: 'Portfolio Review', text: 'Review your existing investments and identify opportunities for better alignment with your financial objectives.' },
]

export function Services() {
  return (
    <section id="services" className="section bg-ivory-100">
      <div className="container-x">
        <SectionHeading eyebrow="Services" title="Financial Solutions Built Around Your Goals" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <motion.a
                  href={LINKS.consult}
                  {...ext}
                  aria-label={`Explore ${title}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col rounded-3xl border border-navy-900/[0.07] bg-white p-7 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-soft text-emerald-deep transition-colors group-hover:bg-navy-900 group-hover:text-gold-light">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl text-navy-900">{title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-deep">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </motion.a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
