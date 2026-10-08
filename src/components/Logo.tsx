import logoMark from '../logo-mark.png'

/** Brand mark. `tile` adds a light backing so the dark arrow stays visible on navy backgrounds. */
export function Monogram({ className = 'h-10 w-10', tile = false }: { className?: string; tile?: boolean }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${tile ? 'rounded-2xl bg-ivory p-[10%]' : ''} ${className}`}>
      <img src={logoMark} alt="" width={160} height={160} className="h-full w-full object-contain" />
    </span>
  )
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Monogram className={dark ? 'h-11 w-11' : 'h-10 w-10'} tile={dark} />
      <span className={`font-serif text-xl font-medium tracking-tight ${dark ? 'text-ivory' : 'text-navy-900'}`}>
        Prithavi<span className="text-gold"> Money</span>
      </span>
    </span>
  )
}
