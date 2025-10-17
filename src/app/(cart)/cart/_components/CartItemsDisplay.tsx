import {useCartStore} from "@/store/cartStore";
import QuantitySelector from "@/app/(cart)/cart/_components/QuantitySelector";
import ProductImage from "@/app/(cart)/cart/_components/ProductImage";
import ItemPrice from "@/app/(cart)/cart/_components/ItemPrice";

const CartItemsDisplay = () => {
    const {
        removeFromCart,
        getCartProducts,
        hasCard,
    } = useCartStore();

    const cartProducts = getCartProducts();

    const removeItem = (productId: string) => {
        removeFromCart(productId);
    };

    const getFinalPrice = (basePrice: number, discountPercent: number) => {
        return basePrice * (1 - discountPercent / 100);
    };

    const getCardPrice = (basePrice: number, discountPercent: number) => {
        const discountedPrice = basePrice * (1 - discountPercent / 100);
        return discountedPrice * (1 - 6 / 100); // Дополнительная скидка 6% по карте
    };

   return(
    <div className="lg:w-2/3">
        <div className="bg-white rounded-lg shadow-md">
            {cartProducts.map((item) => {
                const finalPrice = getFinalPrice(item.product.basePrice, item.product.discountPercent);
                const cardPrice = getCardPrice(item.product.basePrice, item.product.discountPercent);

                return (
                    <div key={item.productId} className="border-b last:border-b-0 p-6">
                        <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row">
                            <div className="flex items-center space-x-4">
                                <ProductImage img={item.product.img} title={item.product.title}/>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{item.product.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.product.description}</p>
                                    <ItemPrice item={item} finalPrice={finalPrice} cardPrice={cardPrice}/>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <QuantitySelector item={item} />

                                <div className="text-right min-w-[120px]">
                                    <p className="font-semibold text-lg">
                                        {(finalPrice * item.quantity).toFixed(2)} руб.
                                    </p>
                                    {hasCard && (
                                        <p className="text-green-600 text-sm font-semibold">
                                            {(cardPrice * item.quantity).toFixed(2)} руб.
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={() => removeItem(item.productId)}
                                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
   )
}

export default CartItemsDisplay;