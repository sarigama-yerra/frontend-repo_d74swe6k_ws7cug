import React from 'react'

function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-light text-slate-900">Ready to experience this home?</h2>
        <p className="mt-4 text-slate-600">Let us show you around. We’d love to walk you through the spaces, the light and the details that make this home special.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium">Schedule a Viewing</a>
          <a href="#" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-slate-300 text-slate-900 hover:bg-slate-50 transition-colors text-sm font-medium">Request More Information</a>
        </div>
      </div>
    </section>
  )
}

export default CTA