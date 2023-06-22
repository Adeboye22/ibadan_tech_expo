import { useEffect } from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather"; 
import line from "../assets/hero/Ibadantechexpo/Line 9.png"

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0)

    const prev = () => 
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1))

    const next = () => 
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideIntervaal = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideIntervaal)
    }, [])

    return(
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                {/* <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40} />
                </button> */}
                <section className="relative left-8">
                    <div className=" rotate-90 absolute flex -right-2 justify-between">
                        <p className=" text-white left-20">VENUE</p>
                        <p className=" text-white relative left-60">*</p>
                    </div>
                    <img style={{"height" : "100%", "width" : "15%"}} src={line} className=""/>
                </section>
                {/* <button onClick={next} className="p-1 w-10 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button> */}
                  <section className=" right-6">
                    <img style={{"height" : "100%", "width" : "15%"}}  src={line} className="relative right-6 sm:h-40 lg:h-96" />
                    <div className=" rotate-90 absolute flex right-1 justify-between">
                        <p className=" text-white top-4">VENUE</p>
                        <p className=" text-white relative right-72">*</p>
                    </div>
                  {/* <p className=" text-white rotate-90 absolute flex justify-end items-end left-8 bottom-40">VENUE</p> */}
                </section> 
                
            </div>
            <div className="absolute top-4 right-28 left-0">
                <div className="flex items-center justify-center gap-2">
                        <h1 className=" font-primary sm:text-2xl lg:text-4xl text-background font-semibold  pt-8">International Conference Center <br />
                        University of Ibadan (ICC)
                        </h1>
                </div>
            </div>
        </div>
    )
}