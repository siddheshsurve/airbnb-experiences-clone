import React from 'react'
import KatiePic from "../../assets/katie-zaferes.png"
import Star from "../../assets/star.png"
import "./Card.css"

function Card() {
  return (
    <div className='card'>
        <img src={KatiePic} className='card--image' alt="katie's pic"/>
        <div className='card--stats'>
            <img src={Star} className='card--star' alt="star pic" />
            <span>5.0</span>
            <span className='gray' >(6) • </span>
            <span className='gray' >USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}

export default Card