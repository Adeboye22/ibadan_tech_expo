import Twitter from '../assets/footer/twit.svg'
import Facebook from '../assets/footer/face.svg'
import LinkedIn from '../assets/footer/link.svg'


const navigation = [
    {
        name: 'speakers',
        href: 'speakers'
    },
    {
        name: 'contact',
        href: 'contact'
    },
    {
        name: 'venue',
        href: 'venue'
    },
    {
        name: 'partners',
        href: 'partners'
    },
]

const Footer = () => {
    return (
        <footer className="bg-[#132351]" id='footer'>
            <div className="container mx-auto py-4 font-primary">
                <div className="flex flex-col gap-y-5 lg:flex-row lg:justify-between items-center">
                    <div className='flex flex-col md:flex-row gap-x-6'>
                        <h1 className="md:text-[20px] text-white font-bold pb-2">Follow us on</h1>
                        <div className='flex items-center gap-x-5 cursor-pointer'>
                            <a href="https://twitter.com/IbadanTechExpo">
                                <img className='w-5 md:w-6' src={Twitter} alt="" />
                            </a>
                            <a href="https://www.facebook.com/ibadantechexpo?mibextid=ZbWKwL">
                                <img className='w-5 md:w-6' src={Facebook} alt="" />
                            </a>
                            <img className='w-5 md:w-6' src={LinkedIn} alt="" />
                        </div>
                    </div>
                    <ul className="flex gap-y-3 gap-x-5 md:flex-row  items-center md:gap-x-16">
                        {navigation.map((data, i)=> {
                            const {name, href} = data
                            return (
                                <li className="text-white md:text-[20px] font-normal capitalize" key={i}>
                                    <a href={href}>{name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

