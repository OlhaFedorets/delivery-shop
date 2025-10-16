'use client'

import {usePathname} from "next/navigation";
import IconCart from "@/components/svg/IconCart";
import Link from "next/link";
import {useCartStore} from "@/store/cartStore";
import {useEffect} from "react";
import IconHeart from "@/components/svg/IconHeart";

const UserBlock = () => {
    const pathname = usePathname()
    const isFavoritesPage = pathname === "/favorites";
    const isCartPage = pathname === "/cart"

    const {totalItems, fetchCart} = useCartStore();

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return (
            <ul className="flex flex-row gap-x-2 md:gap-x-8 justify-between items-center bg-wite z-50 text-sm">
                <li>
                    <Link
                        href="/favorites"
                        className="flex flex-col items-center gap-2.5 w-11 cursor-pointer"
                    >
                        <IconHeart isActive={isFavoritesPage} variant="orange"/>
                        <span className={`hidden md:block ${isFavoritesPage ? "text-[#ff6633]" : ""}`}>
                            Избранное
                        </span>
                    </Link>
                </li>

                <li className="relative flex flex-col items-center gap-2.5 w-11 cursor-pointer">
                    <Link
                        href="/cart"
                        className="flex flex-col items-center gap-2.5 w-11 cursor-pointer"
                    >
                        <IconCart isActive={isCartPage}/>

                        {totalItems > 0 && (
                            <span
                                className="absolute -top-2 right-0 bg-[#ff6633] text-white text-[9px] rounded w-4 h-4 flex
                                items-center justify-center py-0.5 px-1"
                            >
                            {totalItems > 99 ? '99+' : totalItems}
                            </span>
                        )}

                        <span className={`hidden md:block ${isCartPage ? "text-[#ff6633]" : ""}`}>
                            Корзина
                        </span>
                    </Link>
                </li>
            </ul>
    )
}

export default UserBlock
