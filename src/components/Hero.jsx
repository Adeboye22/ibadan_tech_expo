import Bg from '../assets/hero/bg.svg'
import Star from '../assets/hero/star.svg'
import Line from '../assets/hero/line.svg'
import Bgs from '../assets/hero/ibd.svg'
import CountDown from '../components/CountDown'
import Header from './Header'


const heroData = [
  {
    mainImg: Bg,
    ibdImg: Bgs,
    edition: 'MAIDEN EDITION',
    midImg: Star,
    date: 'September 9, 2023'
  }
]

const Hero = () => {
    return (
        <section> 
          <Header />
            {heroData.map((data, i) => {
              const { ibdImg, edition, midImg, date } = data
              return ( 
                <div key={i} className='h-[850px] bg-right bg-cover w-full pt-[100px] md:pt-[120px] pb-[150px] font-primary'>
                  <div className='container mx-auto'>
                    {/* <div className='flex items-center lg:ml-[200px] my-3'>
                      <img className='h-[70px] md:h-[130px] lg:h-[150px] lg:w-[645px] mb-3' src={mainImg} alt="" />
                    </div> */}
                    {/* <div>
                      <Features />
                    </div> */}
                    <div>
                      <img className='w-full' src={ibdImg} alt="" />
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row my-3'>
                      <div className='flex gap-x-3'>
                        <h1 className='lg:text-[24px] text-primary font-medium'>{edition}</h1>
                        <img className='w-[50%] flex items-center' src={Line} alt="" />
                      </div>
                      <div className='mr-7 lg:mr-20'>
                        <img className='w-10 md:w-20 flex justify-center items-center border border-accent rounded-full p-2 animate-spin-slow transition delay-1000' src={midImg} alt="" />
                      </div>
                      <div className='flex gap-x-3'>
                        <img className='w-[50%] flex items-center' src={Line} alt="" />
                        <h1 className='lg:text-[24px] text-primary font-medium'>{date}</h1>
                      </div>
                    </div>

                    <div className='flex flex-col gap-y-7 md:flex-row items-center gap-x-7 mt-10 mb-20'>
                      <button className='text-[24px] text-primary font-medium w-full bg-secondary border-[1px] border-secondary py-1'>REGISTER</button>
                      <a href="https://wa.link/4xhit1" className='text-[24px] text-primary font-medium w-full bg-transparent border-[1px] border-primary py-1 flex justify-center items-center'>
                        <button>BECOME A SPONSOR</button>
                      </a>
                    </div>
                    <CountDown />
                  </div>
                </div>
              )
            })}
        </section>
    )
}

export default Hero
