import './MediaPartners.css'
import Marquee from 'react-fast-marquee'
import CrestLogo from '../assets/mediaPartners/CrestLogo.svg'
import Honour from '../assets/mediaPartners/hfm.svg'

const MediaPartners = () => { 
  return (
    <div className='partners'>
      <h1 className='mediaPartner-h1'>Partners</h1>
      <Marquee>
      <div className="mediaPartners">
        <img src={CrestLogo} alt="" />
        <img src={Honour} alt="" />
        <img src={CrestLogo} alt="" />
        <img src={Honour} alt="" />
      </div>
      </Marquee> 
    </div>
  )
}

export default MediaPartners
