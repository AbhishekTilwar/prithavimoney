import { Reveal, SectionHeading } from './Reveal'

const steps = [
  { n: '01', title: 'Understand', text: 'Understand your current financial position.' },
  { n: '02', title: 'Define', text: 'Identify your goals and priorities.' },
  { n: '03', title: 'Plan', text: 'Build a strategy around your needs.' },
  { n: '04', title: 'Act', text: 'Put the plan into action with clarity.' },
  { n: '05', title: 'Review', text: 'Review and adapt as your circumstances change.' },
]

export function Journey() {
  return (
    <section className="on-dark section bg-navy-900">
      <div className="container-x">
        <SectionHeading dark eyebrow="Our Process" title="Your Journey. Our Guidance." />
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden className="absolute bottom-3 left-[19px] top-3 w-px bg-gradient-to-b from-gold/60 to-gold/10 lg:hidden" />
          <span aria-hidden className="absolute left-0 right-0 top-[19px] hidden h-px bg-gradient-to-r from-gold/60 via-gold/30 to-gold/10 lg:block" />
          {steps.map((s, i) => (
            <li key={s.n} className="relative pl-14 lg:pl-0 lg:pt-14">
              <Reveal delay={i * 0.08}>
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-navy-900 text-xs font-semibold tracking-wider text-gold-light">
                  {s.n}
                </span>
                <h3 className="text-2xl text-ivory">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/65">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
