import React from 'react'
import './Prizes.css'
import Laptop from '../assets/prizes/Laptop.png'
import Girlie from '../assets/prizes/Girlie.png'
import Watch from '../assets/prizes/Watch.png'

const Prizes = () => {
  return (
    <div className='prizes'>
        <div className="prizes-col-1">
            <h1 className='tech-prizes'>Tech Prizes Galore</h1>
            <p className="tech-prizes-text">By obtaining a ticket for the Ibadan Tech Expo event,<br /> you enter the chance to win incredible tech prizes,<br /> including laptops, phones, AirPods,<br /> smartwatches, 5G internet mifis, headsets, VR sets, wireless mice, and televisions.</p>
        </div>
        <div className="prizes-col-2">
            <img src={Laptop} alt="" className="img-laptop" />
            <img src={Girlie} alt="" className="img-girlie" />
            <img src={Watch} alt="" className="img-watch" />
        </div>

    </div>
  )
}

export default Prizes
