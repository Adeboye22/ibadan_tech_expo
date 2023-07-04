import { useState, useEffect } from "react"
import Logo from '../assets/header/logo.svg'
import NavMobile from "./NavMobile"
import { CgMenuRight, CgClose } from 'react-icons/cg'
// import { Link } from "react-router-dom"

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
]

const Header = () => {
    const [bg, setBg] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    }, [])

    return (
        <header className={`${bg ? 'bg-background shadow-lg py-4 lg:py-6 font-primary' : 'bg-none'} fixed left-0 w-full pt-6 pb-8 z-10 transition-all duration-200`}>
            <div className="container mx-auto">
                <div className="flex  justify-between items-center">
                    <a href="#">
                        <img className="h-6 lg:h-8" src={Logo} alt="" />
                    </a>
                    <div onClick={()=> setMobileNav(!mobileNav)} className="text-2xl text-primary md:hidden lg:text-3xl cursor-pointer">
                        {mobileNav ? <CgClose /> : <CgMenuRight />}
                    </div>
                    <nav className="hidden md:flex">
                        <ul className="md:flex md:gap-x-12">
                            {navigation.map((data, i)=>{
                                return (
                                    <li key={i}>
                                        <a className="capitalize text-primary text-[24px] font-medium hover:border-b border-secondary transition-all" href={data.href}>{data.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <a href="/get-tickets" className="text-primary px-3 ml-6 flex justify-center items-center bg-transparent border border-secondary rounded-md text-[15px] font-medium hover:bg-secondary shadow-md hover:text-white transition-all ease-in-out duration-300">
                            <button className="capitalize flex justify-center items-center">get tickets</button>
                        </a>
                    </nav>

                    <div className={`${mobileNav ? "left-0" : "-left-full"} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
                        <NavMobile />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
