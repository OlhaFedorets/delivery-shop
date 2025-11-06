"use client";

import {useCartStore} from "@/store/cartStore";
import Link from "next/link";
import EmptyCart from "@/app/(cart)/cart/_components/EmptyCart";
import CartHeader from "@/app/(cart)/cart/_components/CartHeader";
import CartItemsDisplay from "@/app/(cart)/cart/_components/CartItemsDisplay";
import FinalPriceDisplay from "@/app/(cart)/cart/_components/FinalPriceDisplay";

const CartPage = () => {
    const {
        totalItems,
        clearCart,
        getCartProducts,
    } = useCartStore();

    const cartProducts = getCartProducts();

    if (cartProducts.length === 0) {
        return <EmptyCart/>
    }

    return (
        <div className="px-[max(12px,calc((100%-1208px)/2))] md:px-[max(16px,calc((100%-1208px)/2))] text-main-text mx-auto">
            <div className="flex justify-between items-center mb-8">
                <CartHeader itemCount={totalItems}/>
                <button
                    onClick={clearCart}
                    className="text-[var(--color-secondary)] hover:text-red-500 transition-colors"
                >
                    Очистить корзину
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <CartItemsDisplay />
                <FinalPriceDisplay/>
            </div>

            <div className="m-4 text-center">
                <Link
                    href="/"
                    className="inline-block text-[var(--color-secondary)] hover:text-red-500 transition-colors"
                >
                    ← Продолжить покупки
                </Link>
            </div>
        </div>
    );
};

export default CartPage;

