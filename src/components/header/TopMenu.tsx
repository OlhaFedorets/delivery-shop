import Image from "next/image";
import iconHeart from"./../../../public/icons-header/icon-heart.svg"
import iconBox from"./../../../public/icons-header/icon-box.svg"
import iconCart from"./../../../public/icons-header/icon-cart.svg"
import iconMobMenu from"./../../../public/icons-header/icon-mobile-menu.svg"

const TopMenu = () => {
    return (
        <ul className="flex flex-row gap-x-6 items-end">
            <li className="flex flex-col items-center gap-2.5 md:hidden w-11 cursor-pointer">
                <Image src={iconMobMenu} alt="Menu" width="24" height="24" className="object-contain w-6 h-6"/>
                <span>Catalog</span>
            </li>
            <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
                <Image src={iconHeart} alt="Favourites" width="24" height="24" className="object-contain w-6 h-6"/>
                <span>Favourites</span>
            </li>
            <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
                <Image src={iconBox} alt="Orders" width="24" height="24" className="object-contain w-6 h-6"/>
                <span>Orders</span>
            </li>
            <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
                <Image src={iconCart} alt="Basket" width="24" height="24" className="object-contain w-6 h-6"/>
                <span>Basket</span>
            </li>
        </ul>
    )
}

export default TopMenu