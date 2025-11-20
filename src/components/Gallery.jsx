import React from 'react'
import { motion } from 'framer-motion'

const images = [
  { id: 1, caption: 'Bright living room' },
  { id: 2, caption: '2023 luxury kitchen' },
  { id: 3, caption: 'HR+++ glass conservatory (2024)' },
  { id: 4, caption: 'Serene master bedroom' },
  { id: 5, caption: 'Spa-like bathroom (2023)' },
  { id: 6, caption: 'West-facing garden' },
  { id: 7, caption: 'Unobstructed front-side views' },
  { id: 8, caption: 'Private garage + driveway' },
  { id: 9, caption: 'Family dining area' },
  { id: 10, caption: 'Calm home office' },
  { id: 11, caption: 'Kids’ bedroom' },
  { id: 12, caption: 'Evening ambience' },
]

function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-10">
          <p className="text-slate-500 uppercase tracking-[0.2em] text-xs mb-3">Image Gallery</p>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900">A calm, light-filled canvas</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group"
            >
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden" />
              <p className="mt-3 text-sm text-slate-600">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery