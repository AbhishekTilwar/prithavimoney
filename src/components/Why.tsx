import { motion } from 'framer-motion'
import { Compass, Flag, Hourglass, MessagesSquare, Sparkles, UserRound } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const items = [
  { icon: UserRound, title: 'Personalized Approach', text: 'Your financial journey is unique. Guidance should be built around your goals.' },
  { icon: Sparkles, title: 'Clarity Over Complexity', text: 'Financial decisions can feel complicated. We focus on making them easier to understand.' },
  { icon: Flag, title: 'Goal-Oriented Thinking', text: 'We focus on the purpose behind your money, not just the numbers.' },
  { icon: Hourglass, title: 'Long-Term Perspective', text: 'Good financial planning is about consistency and discipline over time.' },
  { icon: Compass, title: 'Human Guidance', text: 'Technology can provide information. Personal guidance helps turn information into decisions.' },
  { icon: MessagesSquare, title: 'Transparent Communication', text: 'Clear communication and realistic expectations are at the center of the relationship.' },
]

export function Why() {
  return (
    <section id="why" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Why Prithavi" title="Why Choose Prithavi Money?" align="center" />
        <ul className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 0.08}>
                <motion.div whileHover={{ x: 4 }} className="border-t border-navy-900/15 pt-6">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} aria-hidden />
                  <h3 className="mt-5 text-xl text-navy-900">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{text}</p>
                </motion.div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
