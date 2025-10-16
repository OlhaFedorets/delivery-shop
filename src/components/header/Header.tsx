import LogoBlock from "@/components/header/LogoBlock";
import ButtonSearch from "@/components/header/ButtonSearch";
import UserBlock from "@/components/header/UserBlock";

const Header = () => {
    return (
        <header className="bg-white w-full shadow-(--shadow-default) z-10 flex flex-row py-2 px-4 items-center justify-around">
            <div className="flex flex-row gap-8 xl:gap-10">
                <LogoBlock/>
                <ButtonSearch/>
            </div>
            <UserBlock/>
        </header>
    )
}

export default Header
