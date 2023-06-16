import Marquee from "react-fast-marquee";



const featuring = [
    {
        text: '📚 ENTERTAINING.'
    },
    {
        text: '📚 EDUCATING.'
    },
    {
        text: '🌿 REFRESHING.'
    },
    {
        text: '🤝🏻 NETWORKING.'
    },
    {
        text: '💡 HACKATHONS.'
    },
    {
        text: '🚀 STARTUP SHOWCASES.'
    },
]


const Features = () => {
    return (
        <div>
            <div className="flex items-center gap-x-6 bg-secondary py-3 px-1 rounded-md">
                {featuring.map((data, i)=> {
                    return (
                        <div key={i} className="text-white text-[20px]">
                            <Marquee>
                                <h1>{data.text}</h1>
                            </Marquee>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features
