import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import SignatureProducts from './components/SignatureProducts'
import WhyChooseUs from './components/WhyChooseUs'
import WellnessPhilosophy from './components/WellnessPhilosophy'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-amber-900/5">
        <div className="container mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide text-[#2C1E15]">Pinto at Pinto</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-[#6C5F57]">
            <a href="#about" className="hover:text-[#2C1E15]">About</a>
            <a href="#collection" className="hover:text-[#2C1E15]">Collection</a>
            <a href="#why" className="hover:text-[#2C1E15]">Why Us</a>
            <a href="#stories" className="hover:text-[#2C1E15]">Stories</a>
          </nav>
          <a href="#collection" className="inline-flex items-center rounded-full bg-[#2C1E15] text-white px-5 py-2 text-sm">Shop</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <SignatureProducts />
        <div id="why"><WhyChooseUs /></div>
        <WellnessPhilosophy />
        <div id="stories"><Testimonials /></div>
        <CTA />
      </main>

      <footer className="bg-white border-t border-amber-900/5">
        <div className="container mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#6C5F57]">© {new Date().getFullYear()} Pinto at Pinto. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-[#6C5F57]">
            <a href="#" className="hover:text-[#2C1E15]">Privacy</a>
            <a href="#" className="hover:text-[#2C1E15]">Terms</a>
            <a href="#" className="hover:text-[#2C1E15]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
