import React from 'react'

function Rooms() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-8">
          <p className="text-slate-500 uppercase tracking-[0.2em] text-xs mb-3">Room by Room</p>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900">Spaces that adapt to family life</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl text-slate-900 font-medium">Living room</h3>
            <p className="mt-2 text-slate-700">A generous, light-filled space that invites slow mornings and relaxed evenings. Clean lines and calm tones keep the focus on family moments and the gentle view outside.</p>
          </div>
          <div>
            <h3 className="text-xl text-slate-900 font-medium">Kitchen</h3>
            <p className="mt-2 text-slate-700">The 2023 Siematic kitchen pairs sleek design with everyday practicality. Ample storage, premium appliances and a thoughtful layout make cooking and gathering a pleasure.</p>
          </div>
          <div>
            <h3 className="text-xl text-slate-900 font-medium">Conservatory</h3>
            <p className="mt-2 text-slate-700">New in 2024, the HR+++ glass conservatory extends the living area with warmth and light, creating a year-round place to read, dine and unwind overlooking the garden.</p>
          </div>
          <div>
            <h3 className="text-xl text-slate-900 font-medium">Bedrooms</h3>
            <p className="mt-2 text-slate-700">Five comfortable bedrooms offer flexibility for family, guests and working from home. Each room feels restful with soft daylight and quiet outlooks.</p>
          </div>
          <div>
            <h3 className="text-xl text-slate-900 font-medium">Bathroom</h3>
            <p className="mt-2 text-slate-700">Completely renewed in 2023 with spa-like finishes, the bathroom is a soothing retreat with refined materials, a generous walk-in shower and thoughtful storage.</p>
          </div>
          <div>
            <h3 className="text-xl text-slate-900 font-medium">Garden</h3>
            <p className="mt-2 text-slate-700">Facing west, the garden bathes in the evening sun—ideal for long dinners and children playing until dusk. Lush planting and privacy create a serene outdoor room.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms