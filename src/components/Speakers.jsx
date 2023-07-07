import "./css/speakers.css";
import sp1 from '../assets/hero/Speaker1.png';
import sp2 from '../assets/hero/speaker2.png';
import sp3 from '../assets/hero/Speaker3.png';
import sp4 from '../assets/hero/Speakers4.png';
import sp5 from '../assets/hero/speaker5.png';
import sp6 from '../assets/hero/Speakers4.png';

const speakerData = [
  {
    id: 1,
    name: 'Hon. Akin Alabi',
    role: 'Honorable member, Fed House of Representatives',
    image: sp1
  },
  {
    id: 2,
    name: 'Sam Aiyesoro',
    role: 'C.E.O, Wiseki Technologies',
    image: sp2
  },
  {
    id: 3,
    name: 'Oluseun Onigbinde',
    role: 'Nigerian Entrepreneur',
    image: sp3
  },
  {
    id: 4,
    name: 'Rilwan Akeyewale',
    role: 'Entrepreneur',
    image: sp6
  },
  {
    id: 5,
    name: 'Asiwaju Larry',
    role: 'Social Media Influencer',
    image: sp4
  },
  {
    id: 6,
    name: 'Asiwaju Larry',
    role: 'Social Media Influencer',
    image: sp5
  }
];

const Speakers = () => {
  return (
    <div className='h-full bg-background mt-14'>
      <section className='container mx-auto h-full'>
        <section className='flex justify-between pt-3 font-primary text-primary items-center border-b-2 border-secondary'>
          <h1 className='sm:text-4xl lg:text-7xl font-extrabold'>SPEAKERS</h1>
          <p className='text-xs font-medium'>VIEW ALL SPEAKERS</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-12 mx-auto">
          {speakerData.map((speaker) => (
            <div className="h-full" key={speaker.id}>
              <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={speaker.image} alt={`speaker${speaker.id}`} />
              <div className="font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
                <h1 className="font-medium text-3xl pt-4">{speaker.name}</h1>
                <p>{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Speakers;
