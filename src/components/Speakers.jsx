import "./css/speakers.css"
import sp1 from '../assets/hero/Speaker1.png'
import sp2 from '../assets/hero/speaker2.png'
import sp3 from '../assets/hero/Speaker3.png'
import sp4 from '../assets/hero/Speakers4.png'
import sp5 from '../assets/hero/speaker5.png'
import sp6 from '../assets/hero/Speakers4.png'

const Speakers = () => {
  return (
    <div className='h-full bg-background mt-14'>
      <section style={{}} className='container mx-auto h-full'>
        <section className='flex justify-between pt-3 font-primary text-primary items-center border-b-2 border-secondary'>
          <h1 className='sm:text-4xl lg:text-7xl font-extrabold'>SPEAKERS</h1>
          <p className='text-xs font-medium'>VIEW ALL SPEAKER </p>
          {/* <span> <img src={arrow} alt="" /></span> */}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-12 mx-auto">
          <div className="h-full">
            <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp1} alt="speaker1" />
            <div className="font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
              <h1 className="font-medium text-3xl pt-4"> Hon. Akin Alabi </h1>
              <p>Honorable member, Fed House of representatives</p>
            </div>
          </div>

          <div className="h-full">
            <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp2} alt="speaker1" />
            <div className="font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
              <h1 className="font-medium text-3xl pt-4"> Sam Aiyesoro </h1>
              <p>C.E.O, Wiseki Technologies</p>
            </div>
          </div>

          <div className="h-full">
            <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp3} alt="speaker2" />
            <div className="font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
              <h1 className="font-medium text-3xl pt-4"> Oluseun Onigbinde </h1>
              <p>Nigerian Entrepreneur</p>
            </div>
          </div>

          <div className="h-full">
            <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp6} alt="speaker4" />
            <div className="font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
              <h1 className="font-medium text-3xl pt-4"> Rilwan Akeyewale </h1>
              <p>Entrepreneur</p>
            </div>
          </div>

          <div className="h-full">
            <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp4} alt="speaker5" />
            <div className="font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
              <h1 className="font-medium text-3xl pt-4"> Asiwaju Larry </h1>
              <p>Social Media Influencer</p>
            </div>
          </div>

          <div className="h-full">
            <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp5} alt="speaker6" />
            <div className="font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
              <h1 className="font-medium text-3xl pt-4"> Asiwaju Larry </h1>
              <p>Social Media Influencer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Speakers
