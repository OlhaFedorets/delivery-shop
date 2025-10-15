import {useCartStore} from "@/store/cartStore";
import DiscountMarker from "@/app/(cart)/cart/_components/DiscountMarker";

const FinalPriceDisplay = () => {
    const {
        getCartSummary,
        hasCard,
        clearCart
    } = useCartStore();

    const summary = getCartSummary();

    return (
        <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <DiscountMarker/>

                <h2 className="text-xl font-bold mb-4">Итог заказа</h2>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                        <span>Товары ({summary.totalItems} шт.)</span>
                        <span>{summary.baseTotal.toFixed(2)} руб.</span>
                    </div>

                    {summary.productDiscount > 0 && (
                        <div className="flex justify-between text-green-600">
                            <span>Скидка на товары</span>
                            <span>-{summary.productDiscount.toFixed(2)} руб.</span>
                        </div>
                    )}

                    {hasCard && summary.cardDiscount > 0 && (
                        <div className="flex justify-between text-green-600">
                            <span>Скидка по карте (6%)</span>
                            <span>-{summary.cardDiscount.toFixed(2)} руб.</span>
                        </div>
                    )}

                    <div className="border-t pt-3">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Итого</span>
                            <span>{summary.finalTotal.toFixed(2)} руб.</span>
                        </div>
                        {hasCard && (
                            <div className="text-green-600 text-sm mt-1">
                                Вы экономите {(summary.productDiscount + summary.cardDiscount).toFixed(2)} руб.
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Начислим бонусов:</span>
                        <span className="text-blue-600 font-bold">{summary.bonuses.toFixed(2)} бон.</span>
                    </div>
                </div>

                <button
                    onClick={clearCart}
                    className="w-full bg-[#ff6633] text-white py-3 rounded hover:bg-[#e55a2b] transition-colors font-semibold">
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

export default FinalPriceDisplay;