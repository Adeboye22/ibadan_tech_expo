import Tit from '../assets/about/tit.svg'
import Rec from '../assets/about/rec.svg'
import Venue from '../components/Venue'
const aboutData = [
    {
        titleImg: Tit,
        desc: "Welcome to Ibadan Tech Expo - a dynamic and vibrant gathering that celebrates the world of technology and innovation in Ibadan, Nigeria's largest city by landmass. The Ibadan Tech Expo aims to create an inclusive and engaging environment that brings together a diverse community of tech enthusiasts, professionals, and stakeholders. Whether you're a seasoned industry veteran or a newcomer looking to explore the exciting possibilities of the tech scene, this event is tailor-made for you.",
        descImg: Rec
    }
]

const About = () => {
    return (
        <section>
            <div className="mx-auto container mt-[50px] md:mt-[160px] lg:mt-[380px] mb-10">
                {aboutData.map((data, i)=> {
                    const { titleImg, desc, descImg } = data
                    return (
                        <div key={i} className="flex flex-col md:flex-row items-center">
                            <div className='w-full'>
                                <img className='border-b border-secondary relative' src={titleImg} alt="" />
                                <p className='text-[10px] lg:text-[18px] text-primary font-medium lg:w-[600px] leading-5 my-6'>{desc}</p>
                            </div>
                            <div className='bg-[#D9D9D9] h-[300px] w-[800px] lg:h-[500px] lg:w-[1000px]'>
                                {/* <img src={descImg} alt="" /> */}
                            </div>
                        </div>
                    )
                })}

                <Venue />
            </div> 
        </section>
    )
}

export default About
