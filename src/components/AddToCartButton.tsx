"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

const AddToCartButton = ({ productId }: { productId: string }) => {
    // const [isLoading, setIsLoading] = useState(false);
    const { cartItems, updateCart } = useCartStore();

    const handleSubmit = async () => {
        // setIsLoading(true);

        // Проверяем, есть ли товар уже в корзине
        const existingItem = cartItems.find(
            (item) => item.productId === productId
        );

        if (existingItem) {
            // Если товар уже есть, увеличиваем количество
            const updatedItems = cartItems.map(item =>
                item.productId === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            updateCart(updatedItems);
        } else {
            // Если товара нет, добавляем новый
            const newCartItem = {
                productId,
                quantity: 1,
                addedAt: new Date(),
            };
            const newCartItems = [...cartItems, newCartItem];
            updateCart(newCartItems);
        }

        // setIsLoading(false);
    };

    return (
        <div className="relative">
            <form action={handleSubmit}>
                <button
                    type="submit"
                    // disabled={isLoading}
                    className="absolute border bottom-2 left-2 right-2 border-primary hover:text-white hover:bg-[#ff6633] hover:border-transparent active:shadow-(--shadow-button-active) h-10 rounded justify-center items-center text-primary transition-all duration-300 cursor-pointer select-none"
                >
                    В корзину
                </button>
            </form>
        </div>
    );
};

export default AddToCartButton;


// "use client";
//
// import { useState } from "react";
// import { useCartStore } from "@/store/cartStore";
// import {CartItem} from "@/types/cart";
//
// const AddToCartButton = ({ productId }: { productId: string }) => {
//     // const [isLoading, setIsLoading] = useState(false);
//     // const [message, setMessage] = useState<{
//     //     success: boolean;
//     //     message: string;
//     // } | null>(null);
//
//     const { fetchCart } = useCartStore();
//
//     const handleSubmit = async () => {
//         // setIsLoading(true);
//         // setMessage(null);
//
//         const cartItems: CartItem[] = [];
//
//         const existingItem = cartItems.find(
//             (item: CartItem) => item.productId === productId
//         );
//
//         if (existingItem) {
//             return {
//                 success: false,
//                 message:
//                     "Товар уже в корзине. Изменить его количество можно на странице корзины",
//             };
//         }
//
//
//         const newCartItem: CartItem = {
//             productId,
//             quantity: 1,
//             addedAt: new Date(),
//         };
//
//         const newCartItems = [...cartItems, newCartItem];
//         fetchCart()
//     return (
//         <div className="relative">
//             <form action={handleSubmit}>
//                 <button
//                     type="submit"
//                     // disabled={isLoading}
//                     className="absolute border bottom-2 left-2 right-2 border-primary hover:text-white hover:bg-[#ff6633] hover:border-transparent active:shadow-(--shadow-button-active) h-10 rounded justify-center items-center text-primary transition-all duration-300 cursor-pointer select-none"
//                 >
//                     В корзину
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default AddToCartButton;