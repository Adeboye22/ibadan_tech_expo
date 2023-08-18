import Marquee from 'react-fast-marquee'
import GDCLogo from '../assets/community/gdc.jpg'
import WomenDefiLogo from '../assets/community/wdef.jpg'
import AmazingLogo from '../assets/community/amaz.jpg'
import PolyLogo from '../assets/community/poly.jpg'
import FigLogo from '../assets/community/fig.jpg'
import TechnicalLogo from '../assets/community/techgdc.jpg'
import TabLogo from '../assets/community/tab.jpg'

import './Sponsors.css'


const CommunityPartners = () => {
    return (
        <div className='sponsors'>
            <h1 className='mediaPartner-h1'>Community Partners</h1>

            <Marquee>
                <div className="mediaPartners">
                    <img src={GDCLogo} alt="" />
                    <img src={WomenDefiLogo} alt="" />
                    <img src={AmazingLogo} alt="" />
                    <img src={PolyLogo} alt="" />
                    <img src={FigLogo} alt="" />
                    <img src={TechnicalLogo} alt="" />
                    <img src={TabLogo} alt="" />
                </div>
            </Marquee>
        </div>
    )
}

export default CommunityPartners
