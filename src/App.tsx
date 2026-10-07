import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { Calculator } from './components/Calculator'
import { Contact } from './components/Contact'
import { ConsultCTA } from './components/ConsultCTA'
import { FAQ } from './components/FAQ'
import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { GoalSelector } from './components/GoalSelector'
import { Hero } from './components/Hero'
import { InstagramGrid } from './components/InstagramGrid'
import { Journey } from './components/Journey'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { TrustStrip } from './components/TrustStrip'
import { Why } from './components/Why'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Journey />
        <Why />
        <GoalSelector />
        <Calculator />
        <ConsultCTA />
        <FAQ />
        <Contact />
        <InstagramGrid />
      </main>
      <Footer />
      <FloatingActions />
    </MotionConfig>
  )
}
