import React from 'react'
import Hero from './components/Hero'
import MedicalServices from './components/Destinations'
import ContactUs from './components/ContactUs'
import Map from './components/Map'
const App = () => {
  return (
    <>
      <Hero />
      <MedicalServices/>
      <ContactUs/>
      <Map/>
    </>
  )
}

export default App