import Image from "next/image";

const FirstSlide = () => {
    return (
        <div className="relative bg-[url('/images/graphics/pattern-slider.png')] bg-repeat bg-contain overflow-hidden
        flex justify-center h-20 md:h-40 xl:h-50">
            {/*Затемнение поверх фона но под контролем*/}
            <div className="absolute inset-0 bg-white-70"></div>

            <div className="flex flex-row gap-x-2 xl:gap-x-4 items-center z-10 relative">
                <div className="relative hidden md:block md:w-50 md:h-33 xl:w-75 xl:h-50 top-7">
                    <Image src="/images/graphics/food.png" alt="Slide" fill
                           sizes="(max-width: 768px) 50px, (max-width: 1200px) 75px, 100px"/>
                </div>
                <h2 className="text-lg md:text-2x1 xl:text-5x1 font-bold text-[#414141]">
                    Free delivery (shipping)
                </h2>

            </div>
        </div>
    );
}

export default FirstSlide