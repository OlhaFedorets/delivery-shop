import Image from "next/image";
import slide from "@/../public/images/graphics/slide-1.png"

const FirstSlide = () => {
    return (
        <div className="pt-8 md:pt-12 w-full relative h-full flex items-center justify-center">
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