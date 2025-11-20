import React from 'react'
import { Check } from 'lucide-react'

const items = [
  'Luxury Siematic kitchen (2023) with premium appliances',
  'New high-end bathroom (2023) — serene, spa-like finishes',
  'HR+++ glass conservatory (2024) — warmth, light and year-round comfort',
  '10 solar panels (2022) — smart, sustainable living',
  'West-facing garden — golden evening light',
  'Unobstructed front-side views — a feeling of openness',
  'Five bedrooms — flexible spaces for family and work',
  'Private garage and driveway — everyday ease',
  'Energy label B — efficient and future-ready',
  'Quiet, green neighborhood — Gijzenrooi charm',
  'Generous 207 m² living area on a 310 m² plot',
  'Refined materials and a calm, minimalist aesthetic',
]

function Highlights() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-8">
          <p className="text-slate-500 uppercase tracking-[0.2em] text-xs mb-3">Highlights</p>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900">Thoughtful details, everyday comfort</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((t) => (
            <div key={t} className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p className="text-slate-700">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights