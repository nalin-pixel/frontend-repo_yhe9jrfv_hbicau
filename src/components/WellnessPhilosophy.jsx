import React from 'react'

const WellnessPhilosophy = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-last lg:order-first">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-50 to-rose-50 shadow-[0_10px_40px_rgba(44,30,21,0.08)] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop" alt="Serene self-care ritual" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1E15]">A Philosophy of Gentle Power</h2>
            <p className="mt-5 text-[#6C5F57] leading-relaxed">
              We believe in balance — not perfection. Our rituals are crafted to restore calm, nourish the body, and empower confidence. Each texture, scent, and dosage is refined to transform everyday care into elevated moments.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-[#6C5F57]">
              <li className="flex gap-2"><span className="text-amber-700">•</span>Body, mind, and self-confidence in harmony</li>
              <li className="flex gap-2"><span className="text-amber-700">•</span>Science that respects the wisdom of the body</li>
              <li className="flex gap-2"><span className="text-amber-700">•</span>Rituals designed to feel as beautiful as they are effective</li>
              <li className="flex gap-2"><span className="text-amber-700">•</span>Consistency over intensity, elegance over excess</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WellnessPhilosophy
