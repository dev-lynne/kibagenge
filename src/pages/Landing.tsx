import { Features } from '../components/landing/Features'
import { Footer } from '../components/landing/Footer'
import { Hero } from '../components/landing/Hero'
import { HowItWorks } from '../components/landing/HowItWorks'

export default function Landing() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_left,_rgba(194,24,91,0.18),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#fff4fb_100%)] text-slate-950">
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
