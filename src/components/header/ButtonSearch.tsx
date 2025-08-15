import Image from "next/image";

const ButtonSearch = () => {
    return (

        <button className="bg-(--color-primary) hover:shadow-(--shadow-buttton-default)
            active:shadow-(--shadow-buttton-active) hidden md:flex w-10 p-2 gap-4 lg:w-35 cursor-pointer
            duration-300 rounded">
            <Image src="/icons-header/icon-menu.svg" alt="Menu" width="24" height="24"
                   className="hidden md:block"/>
            <span className="text-base text-white hidden lg:block">Catalog</span>
        </button>
    )
}

export default ButtonSearch