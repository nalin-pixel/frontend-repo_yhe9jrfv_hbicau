import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-[#F9F6F1] py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1E15]">Our Dedication to Women’s Health</h2>
            <p className="mt-5 text-[#6C5F57] leading-relaxed">
              Pinto at Pinto is built on a promise: meticulous science in service of elegant self-care. From bioavailable supplements to dermatologically sophisticated skincare and gentle intimate care, every formula is developed with premium ingredients and clinical standards.
            </p>
            <p className="mt-4 text-[#6C5F57] leading-relaxed">
              Our holistic approach honors the entire you — body, mind, and self-confidence — creating rituals that feel luxurious while supporting balance and long-term wellbeing.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-rose-100 to-amber-100 shadow-[0_10px_40px_rgba(44,30,21,0.08)] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop" alt="Elegant wellness still life" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
