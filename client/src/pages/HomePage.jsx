import React from 'react'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import CTA from '../components/Home/CTA'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <CTA/>
      <Features/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default HomePage