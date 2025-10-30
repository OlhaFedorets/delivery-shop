import Image from "next/image";
import Link from "next/link";

const ButtonSearch = () => {
    return (
            <Link
                href={"/catalog"}
                className="bg-(--color-primary) hover:brightness-130 active:shadow-(--shadow-button-active)
                flex items-center p-2 mt-5 mb-5 gap-2 lg:gap-4 lg:px-4 lg:w-35 cursor-pointer duration-300 rounded">
                <Image
                    src="/icons-header/icon-menu.svg"
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