import { Link } from "react-scroll"


const navigation = [
    {
        name: 'speakers',
        href: 'speakers'
    },
    {
        name: 'contact',
        href: 'footer'
    },
    {
        name: 'venue',
        href: 'venue'
    },
]

const NavMobile = () => {
    return (
        <div className="bg-background w-full h-full shadow-2xl font-primary">
            <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
                {navigation.map((data, i)=> {
                    return (
                        <li key={i} className="cursor-pointer">
                            <Link className="text-[24px] text-primary font-medium capitalize" to={data.href} spy={true} smooth={true} duration={500}>{data.name}</Link>    
                        </li>
                    )
                })}
                {/* <li>
                    <Link to='venue' spy={true} smooth={true} offset={100} duration={500}>Venue</Link>
                </li> */}
                <Link to="prices" className="text-primary px-[1.25rem] py-[0.625rem] flex justify-center items-center bg-secondary border border-secondary rounded-md text-[20px] font-medium hover:bg-secondary shadow-md hover:text-white transition-all ease-in-out duration-300">
                    <button className="capitalize flex justify-center items-center">get tickets</button>
                </Link>
            </ul>
        </div>
    )
}

export default NavMobile
