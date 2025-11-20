import React from 'react'

const rows = [
  { k: 'Address', v: 'Bunderkensven 54, 5646 HD Eindhoven' },
  { k: 'City / Neighborhood', v: 'Eindhoven / Gijzenrooi' },
  { k: 'Asking price', v: '€950,000' },
  { k: 'Living area', v: '207 m²' },
  { k: 'Plot size', v: '310 m²' },
  { k: 'Rooms', v: '7 total (5 bedrooms)' },
  { k: 'Year built', v: '1994' },
  { k: 'Energy label', v: 'B' },
  { k: 'Kitchen', v: 'Siematic (2023), premium appliances' },
  { k: 'Bathroom', v: 'Luxury finishes (2023)' },
  { k: 'Conservatory', v: 'HR+++ glass (2024)' },
  { k: 'Solar', v: '10 panels (2022)' },
  { k: 'Glazing', v: 'HR+++ conservatory, high-performance throughout' },
  { k: 'Insulation', v: 'Well insulated; energy-efficient upgrades' },
  { k: 'Heating', v: 'High-efficiency system' },
  { k: 'Outdoor', v: 'West-facing garden, unobstructed front views' },
  { k: 'Parking', v: 'Private garage + driveway' },
]

function Specifications() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-8">
          <p className="text-slate-500 uppercase tracking-[0.2em] text-xs mb-3">Specifications</p>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900">Technical details</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full">
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="border-b border-slate-100">
                  <td className="w-1/3 p-4 sm:p-5 text-sm text-slate-500">{r.k}</td>
                  <td className="p-4 sm:p-5 text-slate-800">{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Specifications