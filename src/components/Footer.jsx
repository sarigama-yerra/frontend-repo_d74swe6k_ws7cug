import React from 'react'

function Footer() {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-slate-900 font-medium">Bunderkensven 54, Eindhoven — Gijzenrooi</p>
          <p className="text-slate-500 text-sm mt-1">All information is provided with care. No rights can be derived from this presentation.</p>
        </div>
        <div className="text-sm text-slate-500">
          Real estate agent: Your Name • +31 00 000 0000 • email@example.com
        </div>
      </div>
    </footer>
  )
}

export default Footer