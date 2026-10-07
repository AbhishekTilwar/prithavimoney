export interface SipPoint { year: number; invested: number; value: number }

/** Future value of a monthly SIP (payments at start of month), compounded monthly. */
export function sipFutureValue(monthly: number, annualRatePct: number, years: number): number {
  const n = Math.round(years * 12)
  const i = annualRatePct / 100 / 12
  if (n <= 0 || monthly <= 0) return 0
  if (i === 0) return monthly * n
  return monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
}

export function sipSeries(monthly: number, rate: number, years: number): SipPoint[] {
  return Array.from({ length: years + 1 }, (_, y) => ({
    year: y,
    invested: monthly * 12 * y,
    value: sipFutureValue(monthly, rate, y),
  }))
}

export const inr = (n: number) =>
  '₹' + Math.round(n).toLocaleString('en-IN')
