import { animate, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { inr, sipFutureValue, sipSeries } from '../lib/sip'
import { Reveal, SectionHeading } from './Reveal'

function AnimatedINR({ value, className = '' }: { value: number; className?: string }) {
  const mv = useMotionValue(value)
  const [text, setText] = useState(inr(value))
  useMotionValueEvent(mv, 'change', (v) => setText(inr(v)))
  useEffect(() => {
    const c = animate(mv, value, { duration: 0.6, ease: 'easeOut' })
    return () => c.stop()
  }, [value, mv])
  return <span className={className}>{text}</span>
}

function Field({ id, label, value, min, max, step, suffix, prefix, onChange }: {
  id: string; label: string; value: number; min: number; max: number; step: number
  suffix?: string; prefix?: string; onChange: (n: number) => void
}) {
  const clamp = (n: number) => Math.min(max, Math.max(min, Number.isFinite(n) ? n : min))
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-navy-900">{label}</label>
        <div className="flex items-center rounded-xl border border-navy-900/15 bg-white px-3 py-2 focus-within:border-emerald-deep">
          {prefix && <span className="mr-1 text-sm text-ink/60">{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="decimal"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(e.target.value === '' ? min : Number(e.target.value))}
            onBlur={(e) => onChange(clamp(Number(e.target.value)))}
            className="w-24 bg-transparent text-right text-base font-semibold text-navy-900 outline-none"
          />
          {suffix && <span className="ml-1 text-sm text-ink/60">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        aria-label={`${label} slider`}
        min={min}
        max={max}
        step={step}
        value={Math.min(max, Math.max(min, value))}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 h-2 w-full cursor-pointer accent-emerald-deep"
      />
    </div>
  )
}

function Chart({ data }: { data: ReturnType<typeof sipSeries> }) {
  const W = 480, H = 220, P = 8
  const max = Math.max(...data.map((d) => d.value), 1)
  const x = (i: number) => P + (i / (data.length - 1)) * (W - 2 * P)
  const y = (v: number) => H - P - (v / max) * (H - 2 * P)
  const line = (k: 'value' | 'invested') => data.map((d, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(d[k]).toFixed(1)}`).join(' ')
  const area = `${line('value')} L${x(data.length - 1)} ${H - P} L${x(0)} ${H - P} Z`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Chart comparing total invested amount with illustrative estimated value over time">
      <defs>
        <linearGradient id="calc-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#13805f" stopOpacity=".35" /><stop offset="100%" stopColor="#13805f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#calc-area)" />
      <path d={line('value')} fill="none" stroke="#13805f" strokeWidth="2.5" strokeLinejoin="round" />
      <path d={line('invested')} fill="none" stroke="#b8975a" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  )
}

export function Calculator() {
  const [monthly, setMonthly] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const m = Math.max(0, monthly), r = Math.max(0, rate), y = Math.max(1, Math.round(years))
  const { invested, future, series } = useMemo(() => {
    const future = sipFutureValue(m, r, y)
    return { invested: m * 12 * y, future, series: sipSeries(m, r, y) }
  }, [m, r, y])

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Illustration" title="See How Small Steps Can Grow Over Time" intro="A simple monthly-SIP illustration. Adjust the numbers to see how consistency and time can work together." />
        <Reveal className="mt-12">
          <div className="grid overflow-hidden rounded-[2rem] border border-navy-900/[0.07] bg-white shadow-lift lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-8 p-7 sm:p-10">
              <Field id="sip-monthly" label="Monthly Investment" prefix="₹" value={monthly} min={500} max={200000} step={500} onChange={setMonthly} />
              <Field id="sip-rate" label="Expected Annual Return" suffix="%" value={rate} min={1} max={30} step={0.5} onChange={setRate} />
              <Field id="sip-years" label="Investment Period" suffix="yrs" value={years} min={1} max={40} step={1} onChange={setYears} />
            </div>
            <div className="on-dark bg-navy-900 p-7 text-ivory sm:p-10">
              <dl className="grid grid-cols-2 gap-5">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-ivory/55">Total Invested</dt>
                  <dd className="mt-1 text-xl font-semibold sm:text-2xl"><AnimatedINR value={invested} /></dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-ivory/55">Estimated Growth</dt>
                  <dd className="mt-1 text-xl font-semibold text-emerald-soft sm:text-2xl"><AnimatedINR value={future - invested} /></dd>
                </div>
                <div className="col-span-2 border-t border-white/10 pt-5">
                  <dt className="text-xs uppercase tracking-widest text-gold-light">Estimated Future Value</dt>
                  <dd className="mt-1 font-serif text-4xl text-ivory sm:text-5xl"><AnimatedINR value={future} /></dd>
                </div>
              </dl>
              <div className="mt-6"><Chart data={series} /></div>
              <div className="mt-2 flex gap-5 text-xs text-ivory/60">
                <span className="flex items-center gap-2"><span className="h-0.5 w-5 bg-emerald-rich" />Estimated value</span>
                <span className="flex items-center gap-2"><span className="h-0.5 w-5 border-t-2 border-dashed border-gold" />Invested</span>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ivory/60">Illustration only. Actual returns may vary. This calculator does not constitute investment advice.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
