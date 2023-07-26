import Marquee from 'react-fast-marquee'
import './Sponsors.css'
import KetLogo from '../assets/sponsors/ket2.jpg'
import DniLogo from '../assets/sponsors/dni3.jpg'
import OhLogo from '../assets/sponsors/oh2.jpg'



const Sponsors = () => {
    return (
      <div className='sponsors'>
        <h1 className='mediaPartner-h1'>Sponsors</h1>
        <Marquee>
          <div className="mediaPartners">
            {/* <img src={MTNLogo} alt="" /> */}
            <img className='h-[2rem] md:h-[4rem] mt-6 md:mt-0' src={KetLogo} alt="" />
            <img className='h-[2rem] md:h-[4rem] mt-6 md:mt-0' src={DniLogo} alt="" />
            <img className='h-[2rem] md:h-[4rem] mt-6 md:mt-0' src={OhLogo} alt="" />
          </div>
        </Marquee> 
      </div>
    )
}

export default Sponsors
