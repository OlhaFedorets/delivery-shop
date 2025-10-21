import {useCartStore} from "@/store/cartStore";
import {CartProduct} from "@/types/cart";

interface QuantitySelectorProps {
    item: CartProduct;
}

const QuantitySelector = ({item}: QuantitySelectorProps) => {

    const {
        cartItems,
        updateCart,
        getCartProducts,
    } = useCartStore();

    const updateQuantity = (productId: string, newQuantity: number) => {
        if (newQuantity < 1) return;

        const product = getCartProducts().find(p => p.productId === productId);
        if (product && newQuantity > product.product.quantity) {
            alert(`Доступно только ${product.product.quantity} шт.`);
            return;
        }

        const updatedItems = cartItems.map(item =>
            item.productId === productId
                ? { ...item, quantity: newQuantity }
                : item
        );
        updateCart(updatedItems);
    };


    return (
        <div className="flex items-center border rounded">
            <button
                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                disabled={item.quantity <= 1}
            >
                -
            </button>
            <span className="px-4 py-1">{item.quantity}</span>
            <button
                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                disabled={item.quantity >= item.product.quantity}
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;