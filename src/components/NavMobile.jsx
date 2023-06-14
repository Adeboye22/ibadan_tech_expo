

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

const NavMobile = () => {
    return (
        <div className="bg-background w-full h-full shadow-2xl">
            <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
                {navigation.map((data, i)=> {
                    return (
                        <li key={i}>
                            <a className="text-[24px] text-primary font-medium capitalize" href={data.href}>{data.name}</a>    
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavMobile
