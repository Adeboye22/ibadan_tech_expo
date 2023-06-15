import Logo from '../assets/venue/venue.svg'
import One from '../assets/venue/one.svg'
import Two from '../assets/venue/two.svg'
import Three from '../assets/venue/three.svg'
import Four from '../assets/venue/four.svg'
import Line from '../assets/venue/line.svg'
import Star from '../assets/venue/star.svg'


const Venue = () => {
    return (
        <section>
            <div className='w-full'>
                <img className='border-b-2 border-secondary relative' src={Logo} alt="" />
            </div>

            <div className="">
                <img className='' src={One} alt="" />
                <img className='' src={Two} alt="" />
                <img className='' src={Three} alt="" />
                <img className='' src={Four} alt="" />
            </div>
            <div className=''>
                <h1 className=''>International Conference Center <br /> University of Ibadan (ICC)</h1>
            </div>

            <div className=''>
                <img src={Line} alt="" />
                <div>
                    <img src={Star} alt="" />
                    <h1>VENUE</h1>
                </div>
            </div>
        </section>
    )
}

export default Venue
