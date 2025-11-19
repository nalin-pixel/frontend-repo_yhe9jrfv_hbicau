import React from 'react'

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F2] via-[#FEF6F0] to-[#FBF3EA] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,169,118,0.18),transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-6 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1E15]">Elevate Your Wellness Journey</h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#6C5F57]">
          Experience premium self-care designed for modern life. Pure ingredients, clinical standards, and a serene ritual in every bottle.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="#collection" className="inline-flex items-center gap-2 rounded-full bg-[#2C1E15] text-white px-6 py-3 text-sm sm:text-base shadow-sm hover:shadow-md transition-shadow">
            Experience Premium Self-Care
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
