import Marquee from 'react-fast-marquee'
import './Sponsors.css'
import MTNLogo from '../assets/sponsors/mtn.svg'
import DniLogo from '../assets/sponsors/dni.jpg'
import OhLogo from '../assets/sponsors/oh.jpg'
import KarLogo from '../assets/sponsors/kar.png'
import SekLogo from '../assets/sponsors/sek.png'



const Sponsors = () => {
    return (
      <div className='sponsors'>
        <h1 className='mediaPartner-h1'>Gold Sponsors</h1>
        <Marquee>
          <div className="mediaPartners">
            <img src={MTNLogo} alt="" />
            <img src={DniLogo} alt="" /> 
            <img src={OhLogo} alt="" />
            <img src={KarLogo} alt="" />
            <img src={SekLogo} alt="" />
          </div>
        </Marquee> 
      </div>
    )
}

export default Sponsors
