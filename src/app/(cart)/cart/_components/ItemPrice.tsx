import {CartProduct} from "@/types/cart";

interface ItemPriceProps {
    item: CartProduct
    finalPrice: number
    cardPrice: number
}


const ItemPrice = ({item, finalPrice, cardPrice}: ItemPriceProps) => {
    return (
        <>
            <div className="flex items-center space-x-2 mt-2">
                {item.product.discountPercent > 0 && (
                    <span className="text-gray-400 line-through text-sm">
                        {item.product.basePrice} руб.
                    </span>
                )}
                <span className="text-[#ff6633] font-semibold">
                    {finalPrice.toFixed(2)} руб.
                </span>
                {item.product.discountPercent > 0 && (
                    <span
                        className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                        -{item.product.discountPercent}%
                    </span>
                )}
            </div>

            <div className="mt-1">
                <span className="text-green-600 text-sm font-semibold">
                    {cardPrice.toFixed(2)} руб. с картой
                </span>
            </div>
        </>
    )
}

export default ItemPrice