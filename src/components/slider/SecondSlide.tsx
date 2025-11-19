import Image from "next/image";
import slide from "@/../public/images/graphics/slide-2.png"

const SecondSlide = () => {
    return (
        <div className="mb-10 md:mb-15 xl:mb-20 w-full relative">
            <Image
                src={slide}
                alt="Slide"
                width={800}
                height={200}
                className="object-cover w-auto h-auto mx-auto"
                priority={false}
            />
        </div>
    );
}

export default SecondSlide;