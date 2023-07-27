import './MediaPartners.css'
import Marquee from 'react-fast-marquee'
import CrestLogo from '../assets/mediaPartners/CrestLogo.svg'
import Honour from '../assets/mediaPartners/hfm.svg'
import AwaLogo from '../assets/mediaPartners/awa.jpg'
import DukLogo from '../assets/mediaPartners/duk.jpg'
import PunLogo from '../assets/mediaPartners/pun.jpg'

const MediaPartners = () => { 
  return (
    <div className='partners'>
      <h1 className='mediaPartner-h1'>Partners</h1>
      <Marquee>
      <div className="mediaPartners">
        <img src={CrestLogo} alt="" />
        <img src={Honour} alt="" />
        <img src={AwaLogo} alt="" />
        <img src={DukLogo} alt="" />
        <img src={PunLogo} alt="" />
      </div>
      </Marquee> 
    </div>
  )
}

export default MediaPartners
