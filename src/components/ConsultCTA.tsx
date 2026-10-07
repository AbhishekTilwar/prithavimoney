import { Button } from './Button'
import { GraphMotif } from './GraphMotif'
import { LINKS } from '../lib/constants'
import { Reveal } from './Reveal'

export function ConsultCTA() {
  return (
    <section className="px-5 sm:px-8">
      <Reveal>
        <div className="on-dark relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-16 text-center sm:px-16 sm:py-24">
          <div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-deep/30 blur-[90px]" />
          <GraphMotif className="absolute inset-x-0 bottom-0 h-28 w-full opacity-40" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-ivory sm:text-5xl">Let&rsquo;s Make Your Money Work With <span className="italic text-gold-light">Purpose.</span></h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/70">Whether you have a specific financial goal or simply want to understand where you stand, start with a conversation.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={LINKS.consult} variant="gold">Book Your Free Consultation</Button>
              <Button href={LINKS.whatsapp} variant="ghostDark">WhatsApp Us</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
