import React from 'react'
import { motion } from 'framer-motion'

function StoryIntro() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-700 leading-relaxed text-lg sm:text-xl"
        >
          In the gentle calm of Gijzenrooi, this generous family home opens with a sense of quiet luxury. Light pours through wide windows and the newly added HR+++ glass conservatory, drawing the day deep into the living spaces and out to the west-facing garden where evenings glow with soft sunshine. Inside, rooms flow with effortless ease—large, airy, and thoughtfully designed for modern family life.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-700 leading-relaxed text-lg sm:text-xl mt-6"
        >
          At the heart of the home is the new Siematic kitchen (2023), a beautifully resolved space where premium appliances, sleek lines and timeless materials make cooking feel intuitive and joyful. The new luxury bathroom (2023) continues the theme—calm, spa-like, and crafted for moments of pause. With five bedrooms, there’s room for everyone to find their own place: a quiet corner for work, a playful nook for the kids, a serene retreat at the end of the day.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-700 leading-relaxed text-lg sm:text-xl mt-6"
        >
          Thoughtful upgrades bring comfort and sustainability together: 10 solar panels (2022), high-performance glazing, and an energy label B give confidence for the years ahead. Unobstructed views to the front offer a welcome feeling of openness, while a private garage and driveway make everyday life simple. Here, your family grows into a home that feels both refined and wonderfully relaxed.
        </motion.p>
      </div>
    </section>
  )
}

export default StoryIntro