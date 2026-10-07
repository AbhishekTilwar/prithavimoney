import { ArrowRight } from 'lucide-react'
import { Instagram } from './BrandIcons'
import { LINKS, ext, CONTACT } from '../lib/constants'
import { GraphMotif } from './GraphMotif'
import { Reveal } from './Reveal'

/** Reusable tile. Replace `image`/`href` with real post data once a feed is connected. */
export interface InstaPost { id: string; caption: string; image?: string; href?: string; tone: 'navy' | 'emerald' | 'gold' | 'ivory' }

const tones: Record<InstaPost['tone'], string> = {
  navy: 'bg-navy-900 text-ivory',
  emerald: 'bg-emerald-deep text-ivory',
  gold: 'bg-gold-soft text-navy-900',
  ivory: 'bg-white text-navy-900 border border-navy-900/10',
}

// Placeholder tiles — not real posts.
export const placeholderPosts: InstaPost[] = [
  { id: '1', caption: 'Start small. Stay consistent.', tone: 'navy' },
  { id: '2', caption: 'Your goals, your plan.', tone: 'gold' },
  { id: '3', caption: 'Clarity over complexity.', tone: 'emerald' },
  { id: '4', caption: 'Think long term.', tone: 'ivory' },
  { id: '5', caption: 'Plan. Act. Review.', tone: 'emerald' },
  { id: '6', caption: 'Money with purpose.', tone: 'navy' },
]

export function InstagramGrid({ posts = placeholderPosts }: { posts?: InstaPost[] }) {
  return (
    <section className="section bg-ivory-100">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="h2 mt-4">Follow {CONTACT.instagramHandle}</h2>
          </div>
          <a href={LINKS.instagram} {...ext} className="inline-flex items-center gap-2 font-medium text-emerald-deep hover:underline">
            View Instagram <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {posts.map((p) => (
            <li key={p.id}>
              <a href={p.href ?? LINKS.instagram} {...ext} aria-label={`Open Instagram: ${p.caption}`} className={`group relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl p-4 transition-transform hover:-translate-y-1 ${tones[p.tone]}`}>
                {p.image && <img src={p.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
                <Instagram className="relative h-4 w-4 opacity-70" aria-hidden />
                <p className="relative font-serif text-[15px] leading-snug">{p.caption}</p>
                {!p.image && <GraphMotif className="absolute inset-x-0 bottom-0 h-10 w-full opacity-30" stroke="currentColor" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
