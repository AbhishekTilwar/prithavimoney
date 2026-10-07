import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Reveal, SectionHeading } from './Reveal'

const faqs = [
  { q: 'What does Prithavi Money help with?', a: 'Prithavi Money offers personalized financial guidance, including investment planning, mutual fund guidance, SIP planning, tax and financial planning, goal-based planning, and portfolio reviews.' },
  { q: 'How does a financial consultation work?', a: 'It starts with a conversation. We learn about your current situation and your goals, discuss what matters to you, and talk through possible next steps at a pace that feels comfortable.' },
  { q: 'Is the first consultation free?', a: 'Yes. You can book a free consultation using the form on this website or by reaching out on WhatsApp.' },
  { q: 'Can I get guidance based on my financial goals?', a: 'Yes. Our approach is built around your goals, whether that is education, a home, retirement, building wealth, or something else entirely.' },
  { q: 'Do I need a large amount to start investing?', a: 'Not necessarily. Many people begin with a modest, regular amount. The right starting point depends on your goals and circumstances, which we can discuss together.' },
  { q: 'Can you review my existing investments?', a: 'Yes. A portfolio review looks at what you currently hold and how well it aligns with your financial objectives.' },
  { q: 'How do I get started?', a: 'Book a free consultation through the form, or message us on WhatsApp. Tell us a little about what you are planning for and we will take it from there.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section bg-ivory-100">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading eyebrow="FAQ" title="Questions, answered simply." />
        <Reveal>
          <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
            {faqs.map((f, i) => {
              const on = open === i
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={on}
                      aria-controls={`faq-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpen(on ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-[17px] font-medium tracking-normal text-navy-900"
                    >
                      {f.q}
                      <motion.span animate={{ rotate: on ? 45 : 0 }} className="shrink-0 text-gold"><Plus className="h-5 w-5" aria-hidden /></motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="pb-6 pr-10 leading-relaxed text-ink/70">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
