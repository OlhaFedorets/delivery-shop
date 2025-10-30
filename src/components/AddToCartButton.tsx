"use client";


import {useCartStore} from "@/store/cartStore";

const AddToCartButton = ({productId}: { productId: string }) => {
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
                    type="submit"
                    className="absolute border bottom-2 left-2 right-2 border-primary hover:text-white hover:bg-[var(--color-secondary)]
                    hover:border-transparent active:shadow-(--shadow-button-active) h-10 rounded justify-center items-center text-primary
                    transition-all duration-300 cursor-pointer select-none"
                >
                    В корзину
                </button>
            </form>
        </div>
    );
};

export default AddToCartButton;