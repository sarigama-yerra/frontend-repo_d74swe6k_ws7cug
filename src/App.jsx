import React from 'react'
import Hero from './components/Hero'
import KeyFacts from './components/KeyFacts'
import StoryIntro from './components/StoryIntro'
import Gallery from './components/Gallery'
import Highlights from './components/Highlights'
import Rooms from './components/Rooms'
import Neighborhood from './components/Neighborhood'
import Specifications from './components/Specifications'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <KeyFacts />
      <StoryIntro />
      <Gallery />
      <Highlights />
      <Rooms />
      <Neighborhood />
      <Specifications />
      <CTA />
      <Footer />
    </div>
  )
}

export default App