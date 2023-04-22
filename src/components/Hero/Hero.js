import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <section className='hero'>
        <img src="/assets/photo-grid.png" className='hero--photo' alt="hero:gridImg" />
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero