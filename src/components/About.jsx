import Tit from '../assets/about/tit.svg'
import Poster from '../assets/about/Poster 3 1.svg'

const aboutData = [
    {
        titleImg: Tit,
        desc: "Welcome to Ibadan Tech Expo - a dynamic and vibrant gathering that celebrates the world of technology and innovation in Ibadan, Nigeria's largest city by landmass. The Ibadan Tech Expo aims to create an inclusive and engaging environment that brings together a diverse community of tech enthusiasts, professionals, and stakeholders. Whether you're a seasoned industry veteran or a newcomer looking to explore the exciting possibilities of the tech scene, this event is tailor-made for you.",
        descImg: Poster
    }
]

const About = () => {
    return (
        <section>
            <div className="mx-auto font-primary container mt-[90px] md:mt-[160px] lg:mt-[480px] mb-10">
                {aboutData.map((data, i)=> {
                    const { titleImg, desc, descImg } = data
                    return (
                        <div key={i} className="flex flex-col md:flex-row items-center">
                            <div className='w-full'> 
                                <img className='border-b-2 border-secondary relative w-full' src={titleImg} alt="" />
                                <p className='text-[10px] lg:text-[18px] text-primary font-medium lg:w-[600px] leading-5 md:my-6'>{desc}</p>
                            </div>
                            <div>
                                <img className='w-[1728px] md:h-[734px] md:top-[1129px] mt-5' src={descImg} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div> 
        </section>
    )
}

export default About
