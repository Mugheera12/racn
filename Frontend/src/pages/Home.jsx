import React from 'react'
import Nav from '../components/home/Nav'
import Slider from '../components/home/Slider'
import Deals from '../components/home/Deals'
import Cards from '../components/home/Cards'
import Foot from '../components/home/Foot'

const Home = () => {
  return (
    <>
        <Nav/>
        <Slider />
        <Deals/>
        <Cards/>
        <Foot/>
    </>
  )
}

export default Home