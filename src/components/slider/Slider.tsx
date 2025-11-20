"use client"

import FirstSlide from "@/components/slider/FirstSlide";
import SecondSlide from "@/components/slider/SecondSlide";
import {motion} from "framer-motion";

const Slider = () => {
    const slides = [<FirstSlide key="1"/>, <SecondSlide key="2"/>]
    return (
        <div className="relative h-[140px] md:h-[200px] xl:h-[220px] w-full mb-[20px] bg-pattern">
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