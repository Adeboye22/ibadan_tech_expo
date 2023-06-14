import { useTicker } from "../hooks"

const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate)
    const tickerContents = isTimeUp ? (
        <div>Time is up!!!</div>
    ) : (
        <div className="flex lg:gap-x-20">
            <h1 className="flex flex-col lg:text-[100px] font-bold">{days} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-10">Days</span></h1>
            <h1 className="flex flex-col lg:text-[100px] font-bold">{hours} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-7">Hours</span></h1>
            <h1 className="flex flex-col lg:text-[100px] font-bold">{minutes} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-4">Minutes</span> </h1>
            <h1 className="flex flex-col lg:text-[100px] font-bold">{seconds} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-4">Seconds</span></h1>
        </div>
    )

    return (
        <div>
            { tickerContents }
        </div>
    )
}

export default Ticker
