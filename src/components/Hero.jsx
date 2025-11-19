import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-gradient-to-b from-[#FCF8F3] via-[#FBF6F2] to-[#F8F3EF]">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 py-24 flex items-center min-h-[88vh]">
        <div className="max-w-2xl">
          <p className="tracking-[0.22em] text-xs sm:text-sm text-amber-700/80 uppercase mb-4">Pinto at Pinto</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#2C1E15]">
            Elevating Women’s Wellbeing with Poise and Science
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#6C5F57] leading-relaxed">
            A premium sanctuary of self-care. Thoughtfully formulated supplements, skincare, and intimate care — crafted with clinical rigor and a holistic philosophy for modern women who value elegance, balance, and wellbeing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="inline-flex items-center gap-2 rounded-full bg-[#2C1E15] text-white px-6 py-3 text-sm sm:text-base shadow-sm hover:shadow-md transition-shadow">
              Shop Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-6 py-3 text-sm sm:text-base text-[#2C1E15] ring-1 ring-[#2C1E15]/10 hover:bg-white/90">
              Discover the Collection
            </a>
          </div>
        </div>
      </div>

      {/* Subtle corner flourish */}
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-200/40 via-rose-100/30 to-transparent blur-3xl" />
    </section>
  )
}

export default Hero
