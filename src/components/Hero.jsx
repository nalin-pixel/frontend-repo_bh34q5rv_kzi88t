import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-amber-50 to-white" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-xl bg-white/60 border border-emerald-900/10 rounded-3xl p-8 sm:p-10 shadow-lg"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3 py-1 text-xs text-emerald-800">
                New • Eau de Parfum
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif text-emerald-950 leading-tight">
                Saramea — where scent meets story
              </h1>
              <p className="mt-4 text-emerald-900/80 text-base sm:text-lg">
                Handcrafted fragrances inspired by sunlit gardens and slow summer afternoons. A playful blend of vintage elegance and modern minimalism.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="pointer-events-auto rounded-full bg-emerald-900 text-white px-5 py-3 text-sm hover:bg-emerald-800 transition-colors">
                  Explore Collection
                </button>
                <button className="pointer-events-auto rounded-full border border-emerald-900/20 bg-white/70 px-5 py-3 text-sm text-emerald-900 hover:bg-white transition-colors">
                  Our Story
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-emerald-900/70 text-sm">
                <div>Vegan</div>
                <div>Paraben-free</div>
                <div>Made in small batches</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
