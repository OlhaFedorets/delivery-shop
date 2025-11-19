"use client"
import Image from "next/image";
import {useCartStore} from "@/store/cartStore";

const CartButton = ({productId}: {productId: string}) =>
{
    const {cartItems, updateCart} = useCartStore();

    const handleSubmit = async () => {

        // Проверяем, есть ли товар уже в корзине
        const existingItem = cartItems.find(
            (item) => item.productId === productId
        );

        if (existingItem) {
            // Если товар уже есть, увеличиваем количество
            const updatedItems = cartItems.map(item =>
                item.productId === productId
                    ? {...item, quantity: item.quantity + 1}
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

    };

    return (
        <div className="relative">
            <form action={handleSubmit}>
                <button
                    className="mb-2 h-10 md:h-15 w-full bg-secondary hover:brightness-110 text-white text-base md:text-2xl p-4
                    flex justify-center items-center rounded hover:shadow-default active:shadow-button-active duration-300 cursor-pointer relative">
                    <Image
                        src="/icons-products/icon-shopping-cart.svg"
                        alt="Корзина"
                        width={32}
                        height={32}
                        className="absolute left-4"
                    />

                    <p className="text-center">В корзину</p>
                </button>
            </form>
        </div>
    );
}
;

export default CartButton;