import Marquee from 'react-fast-marquee'
import SanwoLogo from '../assets/partners/san.jpg'
import DukLogo from '../assets/partners/duk.jpg'
import ManiLogo from '../assets/partners/mani.jpg'
import LogiLogo from '../assets/partners/logi.jpg'
import KetLogo from '../assets/partners/ket.jpg'
import PatchLogo from '../assets/partners/pay.jpg'
import CardifyLogo from '../assets/partners/card.jpg'
import LarvaLogo from '../assets/partners/lar.jpg'
import SageLogo from '../assets/partners/sage.jpg'
import './Sponsors.css'

const Partners = () => {
  return (
    <div className='sponsors'>
      <h1 className='mediaPartner-h1'>Partners</h1>

      <Marquee>
          <div className="mediaPartners">
            <img src={SanwoLogo} alt="" />
            <img src={DukLogo} alt="" />
            <img src={ManiLogo} alt="" />
            <img src={LogiLogo} alt="" />
            <img src={KetLogo} alt="" />
            <img src={PatchLogo} alt="" />
            <img src={CardifyLogo} alt="" />
            <img src={LarvaLogo} alt="" />
            <img src={SageLogo} alt="" />
          </div>
        </Marquee>
    </div>
  )
}

export default Partners
