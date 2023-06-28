

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

const NavMobile = () => {
    return (
        <div className="bg-background w-full h-full shadow-2xl font-primary">
            <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
                {navigation.map((data, i)=> {
                    return (
                        <li key={i}>
                            <a className="text-[24px] text-primary font-medium capitalize" href={data.href}>{data.name}</a>    
                        </li>
                    )
                })}
                <a href="/get-tickets" className="text-primary py-3 px-7 flex justify-center items-center bg-transparent border border-secondary rounded-md text-[20px] font-medium hover:bg-secondary shadow-md hover:text-white transition-all ease-in-out duration-300">
                    <button className="capitalize flex justify-center items-center">get tickets</button>
                </a>
            </ul>
        </div>
    )
}

export default NavMobile
