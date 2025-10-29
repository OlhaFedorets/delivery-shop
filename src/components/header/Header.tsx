import LogoBlock from "@/components/header/LogoBlock";
import ButtonSearch from "@/components/header/ButtonSearch";
import UserBlock from "@/components/header/UserBlock";

const Header = () => {
    return (
        <header
            className="bg-white w-full shadow-(--shadow-default) z-10 flex flex-row py-2 px-4 xl:px-40 items-center justify-around">
            <LogoBlock/>
            <ButtonSearch/>
            <UserBlock/>
        </header>
    )
}

export default Header
