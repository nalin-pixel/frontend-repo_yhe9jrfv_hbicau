import React from 'react'

const testimonials = [
  {
    name: 'Amara S.',
    quote: 'There is a quiet confidence to these products. My skin is calmer, my energy is steadier — and the ritual feels like a gift to myself.',
  },
  {
    name: 'Lina M.',
    quote: 'Elegant, gentle, and truly effective. I love knowing the formulas are as scientific as they are beautiful.',
  },
  {
    name: 'Zoë R.',
    quote: 'It’s the first wellness brand that feels luxurious without compromising on integrity. I’m genuinely obsessed.',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#F9F6F1] py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1E15]">Real Stories, Softly Told</h2>
          <p className="mt-4 text-[#6C5F57] max-w-2xl">A community of modern women embracing balance, care, and quiet power.</p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_6px_28px_rgba(44,30,21,0.06)] border border-amber-900/5">
              <blockquote className="text-[#2C1E15]/90 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-[#6C5F57]">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
