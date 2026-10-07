export function Monogram({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#0a1730" />
      <path d="M18 46V18h12a8 8 0 0 1 0 16H18" fill="none" stroke="#faf8f4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 46V28l10 12 10-22" fill="none" stroke="#b8975a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Monogram />
      <span className={`font-serif text-xl font-medium tracking-tight ${dark ? 'text-ivory' : 'text-navy-900'}`}>
        Prithavi<span className="text-gold"> Money</span>
      </span>
    </span>
  )
}
