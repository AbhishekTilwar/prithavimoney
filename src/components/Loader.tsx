import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Monogram } from './Logo'

export function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1300)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-label="Loading Prithavi Money"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Monogram className="h-16 w-16" />
          </motion.div>
          <motion.p
            className="mt-5 font-serif text-2xl text-ivory"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Prithavi<span className="text-gold"> Money</span>
          </motion.p>
          <svg viewBox="0 0 160 4" className="mt-6 h-1 w-40" aria-hidden>
            <rect width="160" height="2" y="1" fill="#ffffff22" />
            <motion.rect y="1" height="2" fill="#b8975a" initial={{ width: 0 }} animate={{ width: 160 }} transition={{ duration: 1.1, ease: 'easeInOut' }} />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
