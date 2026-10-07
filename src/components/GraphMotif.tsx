/** Decorative animated growth line used as a recurring brand motif. Purely illustrative. */
export function GraphMotif({ className = '', stroke = '#b8975a' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 400 80" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M0 68 C40 66 60 50 100 54 S160 30 200 36 S270 14 320 22 S380 6 400 4"
        pathLength={1}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="draw-line"
      />
    </svg>
  )
}
