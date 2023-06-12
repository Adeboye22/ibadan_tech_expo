import Bg from '../assets/hero/bg.svg'
import Star from '../assets/hero/star.svg'


const heroData = [
  {
    mainImg: Bg,
    textOne: 'Ibadan',
    textTwo: 'TECH EXPO',
    edition: 'FIRST EDITION',
    midImg: Star,
    date: 'September 9, 2023'
  }
]

const Hero = () => {
    return (
        <section>
            {heroData.map((data, i) => {
              const { mainImg, textOne, textTwo, edition, midImg, date } = data
              return (
                <div key={i}>
                  <div className='flex items-center ml-[200px]'>
                    <img className='h-[150px] w-[645px]' src={mainImg} alt="" />
                  </div>

                  <div>
                    <h1 className='text-[186px] text-primary font-semibold'>{textOne}</h1>
                    <h1>{textTwo}</h1>
                  </div>

                  <div className='flex'>
                    <div>
                      <h1>{edition}</h1>
                    </div>
                    <div>
                      <img src={midImg} alt="" />
                    </div>
                    <div>
                      <h1>{date}</h1>
                    </div>
                  </div>
                </div>
              )
            })}
        </section>
    )
}

export default Hero
