import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <PricingCard />
      <Work />
      <Footer/>
    </div>
  )
}

export default Home