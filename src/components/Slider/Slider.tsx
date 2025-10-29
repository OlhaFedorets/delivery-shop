"use client"

import FirstSlide from "@/components/Slider/FirstSlide";
import SecondSlide from "@/components/Slider/SecondSlide";
import {motion} from "framer-motion";

const Slider = () => {
    const slides = [<FirstSlide key="1"/>, <SecondSlide key="2"/>]
    return (
        <div className="mb-10 md:mb-10 xl:mb-10 h-25 md:h-40 xl:h-50 w-full relative bg-[url('/images/graphics/pattern.png')]">
            {slides.map((slide, index) => {
                return <motion.div
                    key={`slide-${index}`}
                    initial={{opacity: 0}}
                    animate={{opacity: [0, 1, 1, 0]}}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: slides.length * 5 - 5,
                        delay: index * 5
                    }}
                    className="absolute w-full h-full">
                    {slide}
                </motion.div>
            })}
        </div>
    );
}

export default Slider