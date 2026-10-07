import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { LINKS } from '../lib/constants'
import { Button } from './Button'
import { Reveal, SectionHeading } from './Reveal'

const goals = [
  { id: 'Wealth Creation', text: 'We can help you structure a financial approach around building wealth steadily and with discipline over the long term.' },
  { id: 'Retirement', text: 'We can help you think through what a comfortable retirement may need and how to plan toward it step by step.' },
  { id: "Child's Education", text: "We can help you plan ahead for your child's education goals with a structured, time-bound approach." },
  { id: 'Buying a Home', text: 'We can help you map out a plan for a home purchase, from saving toward a down payment to staying financially balanced.' },
  { id: 'Emergency Fund', text: 'We can help you understand how to build a financial safety net so unexpected events are easier to handle.' },
  { id: 'Tax Planning', text: 'We can help you bring more clarity to tax-related decisions while keeping your broader goals in view.' },
  { id: 'Other', text: 'Every goal is personal. Tell us what you are planning for and we can help you structure a financial approach around it.' },
]

export function GoalSelector() {
  const [active, setActive] = useState(goals[0])
  const wa = `${LINKS.whatsapp}?text=${encodeURIComponent(`Hi Prithavi Money, I'd like to discuss my goal: ${active.id}`)}`

  return (
    <section className="section bg-ivory-100">
      <div className="container-x">
        <SectionHeading eyebrow="Your Goal" title="What Are You Planning For?" intro="Select a goal to begin. No numbers, no pressure — just a starting point for the conversation." />
        <Reveal className="mt-12">
          <div role="radiogroup" aria-label="Financial goal" className="flex flex-wrap gap-3">
            {goals.map((g) => {
              const on = g.id === active.id
              return (
                <button
                  key={g.id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setActive(g)}
                  className={`relative rounded-full border px-5 py-3 text-[15px] font-medium transition-colors ${on ? 'border-navy-900 text-ivory' : 'border-navy-900/20 bg-white text-navy-900 hover:border-emerald-deep'}`}
                >
                  {on && <motion.span layoutId="goal-pill" className="absolute inset-0 rounded-full bg-navy-900" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  <span className="relative">{g.id}</span>
                </button>
              )
            })}
          </div>
          <div className="mt-8 rounded-3xl border border-navy-900/[0.07] bg-white p-7 shadow-soft sm:p-10" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <h3 className="text-2xl text-navy-900 sm:text-3xl">{active.id}</h3>
                <p className="lead mt-3 max-w-2xl">{active.text}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-7"><Button href={wa}>Discuss My Goal</Button></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
