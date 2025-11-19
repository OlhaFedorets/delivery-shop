import {useCartStore} from "@/store/cartStore";

const CartSummary = () => {
    const {
        getCartSummary,
        hasCard,
    } = useCartStore();

    const summary = getCartSummary();

    return (
        <>
            <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                    <span>Товары ({summary.totalItems} шт.)</span>
                    <span>{summary.baseTotal.toFixed(2)} руб.</span>
                </div>

                {summary.productDiscount > 0 && (
                    <div className="flex justify-between text-tertiary">
                        <span>Скидка на товары</span>
                        <span>-{summary.productDiscount.toFixed(2)} руб.</span>
                    </div>
                )}

                {hasCard && summary.cardDiscount > 0 && (
                    <div className="flex justify-between text-tertiary">
                        <span>Скидка по карте (7%)</span>
                        <span>-{summary.cardDiscount.toFixed(2)} руб.</span>
                    </div>
                )}

                <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                        <span>Итого</span>
                        <span>{summary.finalTotal.toFixed(2)} руб.</span>
                    </div>
                    {hasCard && (
                        <div className="text-tertiary text-sm mt-1">
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
        </>
    )
};

export default CartSummary;