import './MediaPartners.css'
import Marquee from 'react-fast-marquee'
import CrestLogo from '../assets/mediaPartners/CrestLogo.svg'
import Honour from '../assets/mediaPartners/hfm.svg'
import AwaLogo from '../assets/mediaPartners/awa2.jpg'
import DukLogo from '../assets/mediaPartners/duk2.jpg'
import PunLogo from '../assets/mediaPartners/pun2.jpg'

const MediaPartners = () => { 
  return (
    <div className='partners'>
      <h1 className='mediaPartner-h1'>Partners</h1>
      <Marquee>
      <div className="mediaPartners">
        <img src={CrestLogo} alt="" />
        <img src={Honour} alt="" />
        <img className='h-[2.5rem] md:h-[4.5rem] mt-1 md:mt-3 flex items-center' src={AwaLogo} alt="" />
        <img className='h-[2.5rem] md:h-[4.5rem] mt-1 md:mt-3 flex items-center' src={DukLogo} alt="" />
        <img className='h-[2.5rem] md:h-[4.5rem] mt-1 md:mt-3 flex items-center' src={PunLogo} alt="" />
      </div>
      </Marquee> 
    </div>
  )
}

export default MediaPartners
