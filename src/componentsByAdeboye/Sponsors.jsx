import Marquee from 'react-fast-marquee'
import './Sponsors.css'
import KetLogo from '../assets/sponsors/ket.jpg'
import DniLogo from '../assets/sponsors/dni.jpg'
import OhLogo from '../assets/sponsors/oh.jpg'



const Sponsors = () => {
    return (
      <div className='sponsors'>
        <h1 className='mediaPartner-h1'>Sponsors</h1>
        <Marquee>
          <div className="mediaPartners">
            {/* <img src={MTNLogo} alt="" /> */}
            <img src={KetLogo} alt="" />
            <img src={DniLogo} alt="" />
            <img src={OhLogo} alt="" />
          </div>
        </Marquee> 
      </div>
    )
}

export default Sponsors
