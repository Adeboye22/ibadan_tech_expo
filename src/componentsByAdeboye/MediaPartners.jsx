import './MediaPartners.css'
import Marquee from 'react-fast-marquee'
import CrestLogo from '../assets/mediaPartners/CrestLogo.svg'
import Honour from '../assets/mediaPartners/hfm.svg'
import BeatLogo from '../assets/mediaPartners/beat.svg'
import PunLogo from '../assets/mediaPartners/punc.svg'
import AwaLogo from '../assets/mediaPartners/awa.svg'
import NaijLogo from '../assets/mediaPartners/naij.svg'
import TribeLogo from '../assets/mediaPartners/trib.svg'
import IncLogo from '../assets/mediaPartners/inclu.svg'
import ProLogo from '../assets/mediaPartners/prot.svg'
import PotLogo from '../assets/mediaPartners/pot.svg'
import BunkLogo from '../assets/mediaPartners/bunc.svg'
import MarinLogo from '../assets/mediaPartners/marin.svg'

const MediaPartners = () => { 
  return (
    <div className='partners'>
      <h1 className='mediaPartner-h1'>Media Partners</h1>
      <Marquee>
      <div className="mediaPartners">
        <img src={CrestLogo} alt="" />
        <img src={Honour} alt="" />
        <img src={BeatLogo} alt="" />
        <img src={PunLogo} alt="" /> 
        <img src={AwaLogo} alt="" />
        <img src={NaijLogo} alt="" />
        <img src={TribeLogo} alt="" />
        <img src={IncLogo} alt="" />
        <img src={ProLogo} alt="" />
        <img src={PotLogo} alt="" />
        <img src={BunkLogo} alt="" />
        <img src={MarinLogo} alt="" />
      </div>
      </Marquee> 
    </div>
  )
}

export default MediaPartners
