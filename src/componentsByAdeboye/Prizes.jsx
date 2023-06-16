import React from 'react'
import './Prizes.css'
import Laptop from '../assets/prizes/laptop.png'
import Girlie from '../assets/prizes/girlie.png'
import Watch from '../assets/prizes/watch.png'

const Prizes = () => {
  return (
    <div className='prizes'>
        <div className="prizes-col-1">
            <h1 className='tech-prizes'>Tech Prizes Galore</h1>
            <p className="tech-prizes-text">By obtaining a ticket for the Ibadan Tech Expo event, you enter the chance to win incredible tech prizes, including laptops, phones, AirPods, smartwatches, 5G internet mifis, headsets, VR sets, wireless mice, and televisions.</p>
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
