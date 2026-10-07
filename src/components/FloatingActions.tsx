import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LINKS, ext } from '../lib/constants'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="fixed bottom-[88px] right-4 z-40 flex flex-col items-center gap-3 lg:bottom-6 lg:right-6">
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              aria-label="Back to top"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 bg-ivory text-navy-900 shadow-soft"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <a href={LINKS.whatsapp} {...ext} aria-label="Chat on WhatsApp" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-lift transition-transform hover:scale-105">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-ivory/90 p-3 backdrop-blur-lg lg:hidden" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        <a href={LINKS.consult} {...ext} className="flex w-full items-center justify-center rounded-full bg-navy-900 py-3.5 text-[15px] font-medium text-ivory">
          Book Free Consultation
        </a>
      </div>
    </>
  )
}
