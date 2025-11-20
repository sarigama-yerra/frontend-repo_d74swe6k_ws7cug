import React from 'react'
import { Euro, Ruler, BedDouble, Home, Calendar, Battery, MapPin } from 'lucide-react'

const Fact = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-slate-900 text-lg font-medium">{value}</p>
    </div>
  </div>
)

function KeyFacts() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-10">
          <p className="text-slate-500 uppercase tracking-[0.2em] text-xs mb-3">Key Facts</p>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900">Everything you want to know at a glance</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fact icon={MapPin} label="Address" value="Bunderkensven 54, Eindhoven (Gijzenrooi)" />
          <Fact icon={Euro} label="Asking price" value="€950,000" />
          <Fact icon={Ruler} label="Living area" value="207 m²" />
          <Fact icon={Home} label="Plot size" value="310 m²" />
          <Fact icon={BedDouble} label="Rooms" value="7 total • 5 bedrooms" />
          <Fact icon={Calendar} label="Year built" value="1994 (upgrades 2022–2024)" />
          <Fact icon={Battery} label="Energy label" value="B" />
        </div>
      </div>
    </section>
  )
}

export default KeyFacts