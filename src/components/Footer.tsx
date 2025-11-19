"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="bg-[#f2efe7] bg-pattern-footer px-[max(12px,calc((100%-1208px)/2))] py-10 w-full flex flex-col gap-4 md:flex-row text-[#414141] justify-around items-center">

            <Link href="/" className="relative w-12 h-12 md:w-20 md:h-20 block">
                <Image src="/icons-header/icon-logo.png" alt="Логотип" fill/>
            </Link>


            <div className="social flex flex-row gap-x-5 md:flex-col xl:flex-row gap-y-3 justify-between">
                <div className="flex gap-x-5 items-start">
                    <Link href="https://vk.com" target="_blank">
                        <Image
                            src="/icons-footer/VK.svg"
                            alt="VKontakte"
                            width={24}
                            height={24}
                            className="hover:opacity-80 transition-opacity duration-300"
                        />
                    </Link>
                    <Link href="https://ok.ru" target="_blank">
                        <Image
                            src="/icons-footer/OK.svg"
                            alt="Odnoklassniki"
                            width={24}
                            height={24}
                            className="hover:opacity-80 transition-opacity duration-300"
                        />
                    </Link>
                </div>
                <div className="flex gap-x-5 items-start">
                    <Link href="https://www.whatsapp.com/" target="_blank">
                        <Image
                            src="/icons-footer/wa.svg"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                            className="hover:opacity-80 transition-opacity duration-300"
                        />
                    </Link>
                    <Link href="https://telegram.org/" target="_blank">
                        <Image
                            src="/icons-footer/telegram.svg"
                            alt="Telegram"
                            width={24}
                            height={24}
                            className="hover:opacity-80 transition-opacity duration-300"
                        />
                    </Link>
                </div>
            </div>


            <div className="flex items-center gap-x-2 hover:opacity-80 transition-opacity duration-300">
                <Image
                    src="/icons-footer/phone.svg"
                    alt="Позвонить по телефону"
                    width={20}
                    height={20}
                    className="hover:opacity-80 transition-opacity duration-300"
                />
                <p className="text-base hover:text-black duration-300">
                    8 800 777 33 33
                </p>
            </div>


                <ul className="flex flex-wrap gap-x-8 text-xs gap-4 xl:gap-y-2 md:gap-x-10">
                    <li className="hover:text-black cursor-pointer">
                        <Link href="">О компании</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        <Link href="">Контакты</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        <Link href="">Статьи</Link>
                    </li>
                </ul>
        </footer>
    );
};


export default Footer;