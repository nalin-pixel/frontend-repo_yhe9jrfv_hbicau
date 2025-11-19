import React from 'react'
import { Leaf, ShieldCheck, Recycle, Watch } from 'lucide-react'

const points = [
  { icon: Leaf, title: 'Premium Ingredients', desc: 'Clinically validated actives with exceptional purity.' },
  { icon: ShieldCheck, title: 'Expert-Approved', desc: 'Dermatologist & gynecologist-reviewed where relevant.' },
  { icon: Recycle, title: 'Sustainable & Cruelty-Free', desc: 'Consciously developed with respect for people and planet.' },
  { icon: Watch, title: 'Modern Lifestyle Ready', desc: 'Seamless, elegant routines designed for real life.' },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F9F6F1] py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1E15]">Why Women Choose Us</h2>
          <p className="mt-4 text-[#6C5F57] max-w-2xl">Refined formulations, rigorous standards, and a design language that respects your routine.</p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-[0_6px_28px_rgba(44,30,21,0.06)] border border-amber-900/5">
              <Icon className="h-6 w-6 text-amber-700" />
              <h3 className="mt-4 font-serif text-xl text-[#2C1E15]">{title}</h3>
              <p className="mt-2 text-sm text-[#6C5F57]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
