import Image from "next/image";
import slide from "@/../public/images/graphics/slide-1.png"

const FirstSlide = () => {
    return (
        <div className="pt-10 mb-10 md:mb-15 xl:mb-20 w-full relative">
            <Image
                src={slide}
                alt="Slide"
                width={1400}
                height={200}
                className="object-cover w-auto h-auto mx-auto"
                priority={true}
            />
        </div>
    );
}

export default FirstSlide