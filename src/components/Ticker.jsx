import { useState, useEffect } from "react"
import moment from "moment/moment"



const Ticker = ({ defaultDate }) => {
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(()=> {
        const interval = setInterval(()=> {
            const now = moment();
            const futureDate = moment(defaultDate);
            const diff = futureDate.diff(now)
            const duration = moment.duration(diff);

            setCountDown({
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds()
            })
        }, 1000)
        return () => clearInterval(interval);
    },[defaultDate])

    return (
        <div>
            <div className="flex lg:gap-x-20">
            <h1 className="flex flex-col lg:text-[100px] font-bold">{countDown.days} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-10">Days</span></h1>
            <h1 className="flex flex-col lg:text-[100px] font-bold">{countDown.hours} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-2">Hours</span></h1>
            <h1 className="flex flex-col lg:text-[100px] font-bold">{countDown.minutes} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-4">Minutes</span> </h1>
            <h1 className="flex flex-col lg:text-[100px] font-bold">{countDown.seconds} <span className="lg:text-[20px] font-medium mr-4 lg:mr-0 lg:ml-4">Seconds</span></h1>
        </div>
        </div>
    )
}

export default Ticker
