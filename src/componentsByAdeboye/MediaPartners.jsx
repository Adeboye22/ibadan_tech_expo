import React from 'react'
import './MediaPartners.css'
import CrestLogo from '../assets/mediaPartners/CrestLogo.svg'

const MediaPartners = () => {
  return (
    <div>
      <h1 className='mediaPartner-h1'>Media Partners</h1>
      <div className="mediaPartners">
        <img src={CrestLogo} alt="" />
        <img src={CrestLogo} alt="" />
        <img src={CrestLogo} alt="" />
        <img src={CrestLogo} alt="" />
      </div>
    </div>
  )
}

export default MediaPartners
