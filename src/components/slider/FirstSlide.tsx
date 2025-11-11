import Image from "next/image";

const FirstSlide = () => {
    return (
        <div className="pt-10 mb-10 md:mb-15 xl:mb-20 w-full relative">
            <Image
                src="/images/graphics/slide-1.png"
                alt="Slide"
                width={1400}
                height={200}
                className="object-cover w-auto h-auto mx-auto"
                priority
            />
        </div>
    );
}

export default FirstSlide