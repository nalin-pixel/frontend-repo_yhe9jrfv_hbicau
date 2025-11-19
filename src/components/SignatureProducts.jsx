import React from 'react'
import { FlaskConical, Sparkles, Droplets } from 'lucide-react'

const products = [
  {
    title: 'Cellular Glow Serum',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop',
    benefits: ['Clinically active peptides', 'Silky, fast-absorbing texture', 'Radiance, firmness, calm'],
    icon: Sparkles,
  },
  {
    title: 'Balance+ Daily Complex',
    category: 'Supplements',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
    benefits: ['Bioavailable minerals', 'Hormone & mood support', 'Third-party tested purity'],
    icon: FlaskConical,
  },
  {
    title: 'SilkCare Intimate Elixir',
    category: 'Intimate Care',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1600&auto=format&fit=crop',
    benefits: ['pH-balanced & gynecologist-approved', 'Ultra-pure botanicals', 'Comfort, softness, confidence'],
    icon: Droplets,
  },
]

const SignatureProducts = () => {
  return (
    <section id="collection" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1E15]">Signature Collection</h2>
          <p className="mt-4 text-[#6C5F57] max-w-2xl">Thoughtfully selected hero formulas featuring elevated packaging, exquisite textures, and science-led results.</p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const Icon = p.icon
            return (
              <article key={p.title} className="group rounded-3xl overflow-hidden border border-amber-900/5 bg-gradient-to-b from-rose-50 to-white shadow-[0_6px_28px_rgba(44,30,21,0.06)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-amber-700/80">
                    <Icon className="h-4 w-4" />
                    <span className="text-xs tracking-widest uppercase">{p.category}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl text-[#2C1E15]">{p.title}</h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-[#6C5F57]">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex gap-2"><span className="text-amber-700">•</span>{b}</li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex items-center rounded-full bg-[#2C1E15] text-white px-5 py-2 text-sm hover:shadow-md transition-shadow">View Details</button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SignatureProducts
