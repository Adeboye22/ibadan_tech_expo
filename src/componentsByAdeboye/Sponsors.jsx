import Marquee from 'react-fast-marquee'
import './Sponsors.css'
import MTNLogo from '../assets/sponsors/mtn.svg'



const Sponsors = () => {
    return (
      <div className='sponsors'>
        <h1 className='mediaPartner-h1'>Sponsors</h1>
        <Marquee>
          <div className="mediaPartners">
            <img src={MTNLogo} alt="" />
            <img src={MTNLogo} alt="" />
          </div>
        </Marquee> 
      </div>
    )
}

export default Sponsors
