import Image from "next/image";

const SecondSlide = () => {
    return (
        <div className="mb-10 md:mb-15 xl:mb-20 w-full relative">
            <Image
                src="/images/graphics/slide-2.png"
                alt="Slide"
                width={800}
                height={200}
                className="object-cover w-auto h-auto mx-auto"
                priority
            />
        </div>
    );
}

export default SecondSlide;