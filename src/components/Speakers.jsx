import "./css/speakers.css";
import sp1 from '../assets/hero/PSpeaker1.png'; 
import sp2 from '../assets/hero/PSpeaker2.png';
import sp3 from '../assets/hero/PSpeaker3.png';
import sp4 from '../assets/hero/PSpeaker4.png';
import sp5 from '../assets/hero/PSpeaker5.png';
import sp6 from '../assets/hero/PSpeaker6.png';
import sp7 from '../assets/hero/PSpeaker7.png';
import sp8 from '../assets/hero/PSpeaker8.png';
import sp9 from '../assets/hero/PSpeaker9.png';
import sp10 from '../assets/hero/PSpeaker10.png';
import sp11 from '../assets/hero/PSpeaker11.png';
import sp12 from '../assets/hero/PSpeaker12.png';
import sp13 from '../assets/hero/PSpeaker13.png';
import sp14 from '../assets/hero/PSpeaker14.png';
import sp15 from '../assets/hero/PSpeaker15.png';
import sp16 from '../assets/hero/PSpeaker16.png';
import sp17 from '../assets/hero/PSpeaker17.png';
import sp18 from '../assets/hero/PSpeaker18.png';
import sp19 from '../assets/hero/PSpeaker19.png';

const speakerData = [
  {
    id: 1,
    name: 'Hon. Akin Alabi',
    role: 'Honorable Member, Federal House of Representatives',
    image: sp1
  },
  {
    id: 2,
    name: 'Seun Onigbinde',
    role: 'Director BudgIT',
    image: sp2
  },
  {
    id: 3,
    name: 'Sam Aiyesoro',
    role: 'MD/CEO Wiseki Technologies',
    image: sp3
  },
  {
    id: 4,
    name: 'Victor Ehindero',
    role: 'Director POTTV Media',
    image: sp6
  },
  {
    id: 5,
    name: 'Sanmi Adebunmi',
    role: 'CEO PatchPay',
    image: sp4
  },
  {
    id: 6,
    name: 'Rilwan Akeyewale',
    role: 'Founder TechPlan Africa',
    image: sp5
  },
  {
    id: 7,
    name: 'Ore Afolayan',
    role: 'Founder Renifi',
    image: sp7
  },
  {
    id: 8,
    name: 'Asiwaju Lerry',
    role: 'Media Personality',
    image: sp8
  },
  {
    id: 9,
    name: 'Olugbenga Ogunbowale',
    role: 'CEO GrantMaster',
    image: sp9
  },
  {
    id: 10,
    name: 'Olumide Akinsola',
    role: 'VP of Growth, QuickBus',
    image: sp10
  },
  {
    id: 11,
    name: 'Adeitan Abimbola Moses',
    role: 'Co-founder, Logikeep Africa',
    image: sp11
  },
  {
    id: 12,
    name: 'Rasheed Ridwan',
    role: 'Cofounder - Shiip',
    image: sp12
  },
  {
    id: 13,
    name: 'Olumide Omotoso',
    role: 'CEO Watu',
    image: sp13
  },
  {
    id: 14,
    name: 'Sam Adeleke',
    role: 'Group Head, The Bunker',
    image: sp14
  },
  {
    id: 15,
    name: 'Omomame Imafidon',
    role: 'Lead, Polygon Guild Ibadan',
    image: sp15
  },
  {
    id: 16,
    name: 'Damilola Oluwatunmise-Adediran',
    role: 'Founder:CodeSchool Africa',
    image: sp16
  },
  {
    id: 17,
    name: 'Oluwamayowa Oshidero',
    role: 'Founder, Equilibrium Zone',
    image: sp17
  },
  {
    id: 18,
    name: 'Edem Dorothy Ossai',
    role: 'Regional Coordinator, NORRAG, and Executive Director MAYEIN',
    image: sp18
  },
  {
    id: 19,
    name: 'Adewumi Onaopemipo Femi',
    role: 'CEO @ Alusoft Technologies Ltd',
    image: sp19
  },
];

const Speakers = () => {
  return (
    <div className='h-full bg-background mt-14' id="speakers">
      <section className='container mx-auto h-full'>
        <section className='flex justify-between pt-3 font-primary text-primary items-center border-b-2 border-secondary'>
          <h1 className='sm:text-4xl lg:text-7xl font-extrabold'>SPEAKERS</h1>
          <p className='text-xs font-medium'>VIEW ALL SPEAKERS</p>
        </section>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12 mx-auto">
          {speakerData.map((speaker) => (
            <div className="h-full" key={speaker.id}>
              <img className='w-80 h-82 lg:w-full mx-auto rounded-lg' src={speaker.image} alt={`speaker${speaker.id}`} />
              <div className="font-primary text-primary text-center px-8 py-4">
                <h1 className="font-medium md:text-3xl">{speaker.name}</h1>
                <p className="text-[10px] md:text-[18px]">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Speakers;
