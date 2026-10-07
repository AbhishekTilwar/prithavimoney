type P = { className?: string; 'aria-hidden'?: boolean | 'true' }
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export const Instagram = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
)
export const Facebook = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V9Z" />
  </svg>
)
