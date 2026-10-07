import { MapPin } from 'lucide-react'
import { ConsultButton } from './Button'
import { GraphMotif } from './GraphMotif'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">About Prithavi Money</p>
          <h2 className="h2 mt-4">More Than Money. It&rsquo;s About Your Future.</h2>
          <div className="lead mt-6 space-y-5">
            <p>At Prithavi Money, we believe financial planning isn&rsquo;t simply about numbers. It&rsquo;s about understanding where you are today, where you want to go, and creating a clear path between the two.</p>
            <p>Whether you&rsquo;re starting your investment journey, planning for major life goals, or looking for greater clarity around your finances, our approach is centered around your goals.</p>
          </div>
          <div className="mt-8"><ConsultButton /></div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-ivory shadow-lift sm:p-10" aria-hidden="true">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold/30" />
            <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full border border-gold/20" />
            <p className="text-xs uppercase tracking-[0.22em] text-gold-light">Today &rarr; Tomorrow</p>
            <p className="mt-10 max-w-[14ch] font-serif text-3xl leading-tight sm:text-4xl">A clear path between <span className="italic text-gold-light">here</span> and <span className="italic text-gold-light">there</span>.</p>
            <GraphMotif className="mt-10 h-24 w-full" />
            <div className="mt-2 flex justify-between text-[11px] uppercase tracking-widest text-ivory/50"><span>Where you are</span><span>Where you want to be</span></div>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-deep/20 bg-emerald-soft px-4 py-2 text-sm font-medium text-emerald-deep">
            <MapPin className="h-4 w-4" aria-hidden /> Based in Ulhasnagar, Maharashtra
          </p>
        </Reveal>
      </div>
    </section>
  )
}
