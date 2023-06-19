import Carousel from "./Carousel"
import vn1 from "../assets/hero/Ibadantechexpo/Component 58.png"
import vn2 from "../assets/hero/Ibadantechexpo/Component 59.png"
import vn3 from "../assets/hero/Ibadantechexpo/Component 60.png"
import vn4 from "../assets/hero/Ibadantechexpo/Component 61.png"

const slides = 
[
    vn1,
    vn2,
    vn3,
    vn4
]

const Venue = () => {
    return (
        <div className="bg-background">
          <section className='container mx-auto'>
             <section className='flex justify-between pt-3 font-primary text-primary items-center border-b-2 border-secondary'>
                    <h1 className='text-7xl font-extrabold'>VENUE</h1>
                </section>

                <div className="pt-12">
                    <Carousel autoSlide={true}>
                        {
                            slides.map((s, i) => (
                                <img key={i} src={s} />
                            ))
                        }
                    </Carousel>
                </div>
            </section>
        </div>
    )
}

export default Venue
