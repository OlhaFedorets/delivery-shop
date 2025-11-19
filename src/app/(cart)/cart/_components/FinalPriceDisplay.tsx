import {useCartStore} from "@/store/cartStore";
import DiscountMarker from "@/app/(cart)/cart/_components/DiscountMarker";
import CartSummary from "@/app/(cart)/cart/_components/CartSummary";

const FinalPriceDisplay = () => {
    const {clearCart} = useCartStore();

    return (
        <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <DiscountMarker/>
                <h2 className="text-xl font-bold mb-4">Итог заказа</h2>
                <CartSummary />

                <button
                    onClick={clearCart}
                    className="w-full bg-primary text-white py-3 rounded hover:bg-secondary transition-colors font-semibold">
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

export default FinalPriceDisplay;