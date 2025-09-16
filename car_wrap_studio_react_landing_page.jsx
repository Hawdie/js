import React, { useState } from "react";
import { motion } from "framer-motion";

// Single-file React component for a car wrap studio landing page.
// Drop this into a Next.js page (app/page.jsx or pages/index.jsx) or any React app.
// Requirements: Tailwind CSS configured in your project and `framer-motion` installed.

export default function CarWrapStudioLanding() {
  const [modalImage, setModalImage] = useState(null);

  const gallery = [
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1600&q=80",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
    "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=1600&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
  ];

  const services = [
    {
      title: "Full Vehicle Wraps",
      desc: "Premium cast vinyl wraps for complete transformations — colour change, chrome, or matt finishes.",
    },
    { title: "Partial Wraps & Accents", desc: "Racing stripes, roof wraps, mirrors and bespoke graphics." },
    { title: "Commercial Fleet", desc: "Vehicle branding, removable advertising wraps and fleet consistency." },
    { title: "Protective Films", desc: "PPF & ceramic coatings to protect paint from chips and UV." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold">CW</div>
            <div>
              <h1 className="text-lg font-semibold">CarWrap Studio</h1>
              <p className="text-xs text-gray-500">Design • Wrap • Protect</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#gallery" className="hover:text-indigo-600">Gallery</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:opacity-95">Get a Quote</a>
          </nav>

          <div className="md:hidden">{/* mobile hamburger placeholder */}
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Stand out on the road — professional car wraps & vehicle branding</h2>
            <p className="mt-6 text-lg text-gray-600">From show-stopping colour changes to subtle protective films — we design, print and install wraps that last.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium shadow">Get a free quote</a>
              <a href="#gallery" className="inline-block border border-gray-200 px-6 py-3 rounded-md text-sm">See our work</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-xs text-gray-500">Turnaround</div>
                <div className="font-semibold">5–7 days typical</div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-xs text-gray-500">Warranty</div>
                <div className="font-semibold">Up to 5 years (materials)</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={gallery[0]} alt="car wrap example" className="w-full h-80 object-cover block" />
            </div>
            <div className="-mt-12 grid grid-cols-3 gap-3">
              {gallery.slice(1, 4).map((src, i) => (
                <button key={i} onClick={() => setModalImage(src)} className="rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img src={src} alt={`wrap ${i}`} className="w-full h-24 object-cover block" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <p className="text-gray-600 mt-2">Design, printing, professional installation and aftercare.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-gray-500 mt-2 text-sm">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-indigo-600 text-sm">Request this service →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Gallery</h3>
            <a href="#contact" className="text-sm text-indigo-600">Book a consultation</a>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {gallery.concat(gallery).slice(0, 12).map((src, i) => (
              <button key={i} onClick={() => setModalImage(src)} className="rounded-lg overflow-hidden shadow-sm">
                <img src={src} alt={`gallery ${i}`} className="w-full h-40 object-cover block" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">About CarWrap Studio</h3>
            <p className="mt-4 text-gray-600">We are a small team of certified wrap technicians and designers. Quality materials, meticulous installation and reliable aftercare are central to everything we do.</p>

            <ul className="mt-6 grid grid-cols-2 gap-4">
              <li className="text-sm text-gray-700">✅ Certified installers</li>
              <li className="text-sm text-gray-700">✅ Colour matching & custom design</li>
              <li className="text-sm text-gray-700">✅ Fleet & commercial specialists</li>
              <li className="text-sm text-gray-700">✅ PPF & ceramic coatings</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80" alt="workshop" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Request a quote</h3>
            <p className="text-gray-600 mt-2">Tell us about your vehicle and what you'd like — we'll respond within 24–48 hours.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo: form submitted (implement API endpoint)'); }}>
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Vehicle / Project details</label>
                <textarea required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 h-28" />
              </div>

              <div className="flex gap-2">
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Send request</button>
                <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>
              </div>
            </form>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg p-4 bg-white">
            <h4 className="font-semibold">Visit us</h4>
            <p className="text-sm text-gray-600 mt-2">123 Wrap Lane<br/>Citysville, Country</p>

            <div className="mt-4">
              <iframe title="studio-location" src="https://www.openstreetmap.org/export/embed.html?bbox=10.0%2C53.0%2C10.1%2C53.1&amp;layer=mapnik" className="w-full h-40 border-0 rounded-md" />
            </div>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <div><strong>Mon–Fri:</strong> 9:00–18:00</div>
              <div><strong>Phone:</strong> +48 123 456 789</div>
              <div><strong>Email:</strong> hello@carwrapstudio.example</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} CarWrap Studio — All rights reserved</div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* IMAGE MODAL */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" onClick={() => setModalImage(null)}>
          <div className="max-w-4xl w-full rounded-lg overflow-hidden shadow-xl">
            <img src={modalImage} alt="modal" className="w-full h-auto object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
