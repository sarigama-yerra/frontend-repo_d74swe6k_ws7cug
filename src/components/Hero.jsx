import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-white"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-white/70 mb-5">Eindhoven • Gijzenrooi</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
            Room to breathe. Crafted for quiet luxury.
          </h1>
          <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
            Bunderkensven 54, 5646 HD Eindhoven — a calm, light-filled family home where generous spaces, premium finishes and considered details come together in effortless harmony.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gallery" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium">
              Explore the Home
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/40 text-white hover:bg-white/10 transition-colors text-sm font-medium">
              Schedule a Viewing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero