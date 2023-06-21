import "./css/speakers.css"
import sp1 from '../assets/hero/Speaker 1 Color.png'
import sp2 from '../assets/hero/Speaker  2 Color.png'
import sp3 from '../assets/hero/Speaker 3 Color.png'
import sp4 from '../assets/hero/Speaker4 Color.png'
import sp5 from '../assets/hero/Speaker 6 Color.png'
import sp6 from '../assets/hero/Rectangle22.png'

const Speakers = () => {

        // const speakers = [
        //   { id: 1, name: 'Speaker 1', image: '' },
        //   { id: 2, name: 'Speaker 2', image: '' },
        //   { id: 3, name: 'Speaker 3', image: '' },
        // ];
      
        // const [activeImage, setActiveImage] = useState(null);
      // const [activeImage, setActiveImage] = useState(null);W
        // const handleImageHover = (index) => {
        //   setActiveImage(index);
        // };

    return (
        <div className=' h-full bg-background'>
          <section style={{}} className='container mx-auto h-full'>
            <section className='flex justify-between pt-3 font-primary text-primary items-center border-b-2 border-secondary'>
                    <h1 className=' sm:text-4xl lg:text-7xl font-extrabold'>SPEAKERS</h1>
                    <p className='text-xs font-medium'>VIEW ALL SPEAKER </p> 
                    {/* <span> <img src={arrow} alt="" /></span> */}
                </section>

                <div className="grid grid-rows-2 grid-flow-col pt-12 mx-auto gap-2">
                    <div> <img className='w-80 h-82 lg:w-96 mx-auto bg-secondary rounded-lg' src={sp1} alt="speaker1" /></div>
                    <div> <img className='w-80 h-82 lg:w-96 mx-auto bg-secondary rounded-lg' src={sp4} alt="speaker1" /></div>
                    <div><img  className='w-80 h-82 lg:w-96 mx-auto bg-secondary rounded-lg' src={sp2} alt="speaker2" /></div>
                    <div><img  className='w-80 h-82 lg:w-96 mx-auto bg-secondary rounded-lg' src={sp5} alt="speaker4" /></div>
                    <div><img  className='w-80 h-82 lg:w-96 mx-auto bg-secondary rounded-lg' src={sp3} alt="speaker5" /></div>
                    <div><img  className='w-80 h-82 lg:w-96 mx-auto bg-secondary rounded-lg' src={sp6} alt="speaker6" /></div>
                </div>
                {/*{speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className={`relative ${activeImage === index ? 'scale-150' : 'scale-100'} transform transition-transform duration-300 ease-in-out`}
          onMouseEnter={() => handleImageHover(index)}
          onMouseLeave={() => handleImageHover(null)}
        >
          <img src={speaker.image} alt={speaker.name} className="w-full" />
          {activeImage === index && (
            <div className="absolute bottom-0 left-0 w-full bg-black text-white p-2 text-center">
              {speaker.name}
            </div>
          )}*/}
          </section>
        </div>

    )
}

export default Speakers
