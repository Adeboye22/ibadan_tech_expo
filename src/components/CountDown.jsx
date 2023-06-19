
import  Ticker  from "./Ticker"
import Line from '../assets/countdown/line.svg'




const CountDown = () => { 

    return (
        <section className='bg-gradient-to-l from-[#5576CF] from-70% to-[#CB9000] rounded-md'>
            <div className='mx-auto container text-white'>
                <div className="flex flex-col gap-y-7 md:flex-row gap-x-20 lg:justify-between items-center py-10 md:py-20 md:px-6">
                    <div className="flex flex-col w-[200px] lg:w-[250px]"> 
                        <h1 className='lg:text-[24px] font-normal'>SEE YOU IN</h1>
                        <img className='my-1' src={Line} alt="" />
                        <h1 className='lg:text-[24px] font-normal'>September 9, 2023</h1>
                    </div>
                    <div className="flex">
                        <Ticker defaultDate="2023-09-09T23:59:59" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountDown
