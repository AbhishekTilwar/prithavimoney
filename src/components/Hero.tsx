import { motion } from 'framer-motion'
import { ConsultButton, WhatsAppButton } from './Button'

const words = ['Your', 'Money', 'Deserves', 'a', 'Better', 'Plan.']

function HeroVisual() {
  const bars = [38, 52, 46, 68, 60, 84, 96]
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-gold/30" />
      <div className="absolute inset-8 rounded-full border border-dashed border-gold/20" />
      <div className="float-slow absolute inset-0 flex items-center justify-center">
        <div className="w-[78%] rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-lift backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-ivory/60">
            <span>Goal plan</span><span className="text-gold-light">Illustrative</span>
          </div>
          <div className="mt-6 flex h-32 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-deep/70 to-emerald-rich/30"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
          <svg viewBox="0 0 300 60" className="mt-[-120px] h-24 w-full overflow-visible">
            <path d="M0 52 C40 50 60 36 100 40 S160 18 200 24 S260 6 300 4" pathLength={1} fill="none" stroke="#d9c08f" strokeWidth="2.5" strokeLinecap="round" className="draw-line" />
            <circle cx="300" cy="4" r="4" fill="#d9c08f" />
          </svg>
          <div className="mt-6 flex gap-2 text-[11px] text-ivory/70">
            {['Home', 'Education', 'Retirement'].map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -right-2 top-10 flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 font-serif text-2xl text-navy-950 shadow-lift">₹</div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="on-dark relative isolate overflow-hidden bg-navy-900 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-emerald-deep/25 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      </div>
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="eyebrow !text-gold-light">
            Personalized Financial Guidance
          </motion.p>
          <h1 className="mt-5 font-serif text-[2.75rem] font-normal leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${w === 'Better' || w === 'Plan.' ? 'italic text-gold-light' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.25 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.7 }} className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/75">
            Personalized financial guidance designed to help you make confident decisions, build financial discipline, and plan for the future.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.7 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ConsultButton variant="gold">Book a Free Consultation</ConsultButton>
            <WhatsAppButton variant="ghostDark" />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, duration: 1 }}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
