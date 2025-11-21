import Image from "next/image";
import Link from "next/link";
import iconMenu from "@/../public/icons-header/icon-menu.svg"

const ButtonSearch = () => {
    return (
            <Link
                href={"/catalog"}
                className="bg-primary hover:bg-opacity-90 active:bg-opacity-80 active:scale-95
                flex items-center p-2 mt-5 mb-5 gap-2 lg:gap-4 lg:px-4 lg:w-35 cursor-pointer duration-300 rounded">
                <Image
                    src={iconMenu}
                    alt="menu"
                    width={24}
                    height={24}
                />
                <span className="text-base text-white hidden md:block">
                Каталог
            </span>
            </Link>
    );
};

export default ButtonSearch;