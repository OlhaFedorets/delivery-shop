"use client";

import Image from "next/image";
import firstBanner from "/public/images/banners/1.jpg";
import secondBanner from "/public/images/banners/2.jpg";

const SpecialOffers = () => {
    return (
        <section>
            <div
                className="flex flex-col gap-4 mb-4 md:mb-8 xl:mb-10 justify-between text-[#414141]">
                <h2 className="text-2xl xl:text-4xl text-left font-bold mb-4 md:mb-8">
                    Специальные предложения
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center xl:w-auto">
                    <button className="rounded w-full max-w-[336px] md:max-w-[352px] xl:max-w-[584px] h-[170px] xl:h-70
                        hover:shadow-(--shadow-article) duration-300 relative overflow-hidden cursor-pointer">
                        <Image
                            src={firstBanner}
                            alt="Cкидка"
                            fill
                            sizes="(max-width: 768px) 336px, (max-width: 1280px) 352px, 584px"
                            className="object-cover"
                        />
                    </button>
                    <button
                        className="rounded w-full max-w-[336px] md:max-w-[352px] xl:max-w-[584px] h-[170px] xl:h-70
                        hover:shadow-(--shadow-article) duration-300 relative overflow-hidden cursor-pointer">
                        <Image
                            src={secondBanner}
                            alt="Акция"
                            fill
                            sizes="(max-width: 768px) 336px, (max-width: 1280px) 352px, 584px"
                            className="object-cover"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;