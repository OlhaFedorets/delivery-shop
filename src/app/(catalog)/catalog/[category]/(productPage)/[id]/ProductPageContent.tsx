import {ProductCardProps} from "@/types/product";
import {CONFIG} from "../../../../../../../config/config";
import StarRating from "@/components/StarRating";
import ImagesBlock from "./_components/ImagesBlock";
import ProductOffer from "./_components/ProductOffer";
import CartButton from "./_components/CartButton";
import Bonuses from "./_components/Bonuses";


interface ProductPageContentProps {
    product: ProductCardProps;
    productId: string;
}

const ProductPageContent = ({
                                product,
                                productId,
                            }: ProductPageContentProps) => {
    const discountedPrice = product.discountPercent
        ? product.basePrice * (1 - product.discountPercent / 100)
        : product.basePrice;

    const cardPrice = discountedPrice * (1 - CONFIG.CARD_DISCOUNT_PERCENT / 100);
    const bonusesAmount = cardPrice * 0.05;

    // @ts-ignore
    return (
        <div className="px-[max(12px,calc((100%-1208px)/2))] md:px-[max(16px,calc((100%-1208px)/2))] text-main-text">
            <h1 className="text-xl md:text-2xl font-bold mb-4">{product.description}</h1>
            <div className="flex flex-col gap-y-25 md:gap-y-20 xl:gap-y-30">
                    <div className="flex flex-row flex-wrap gap-2 items-center">
                        <StarRating rating={product.rating.rate || 5} />
                        <p className="text-sm underline">
                            {product.rating.count || 0}
                        </p>
                    </div>

                <div className="flex flex-col md:flex-row md:flex-wrap gap-10 w-full justify-center mt-4 xl:mt-8">
                    <ImagesBlock product={product} />
                    <div className="md:w-[344px] lg:w-[376px] flex flex-col">
                        <ProductOffer
                            discountedPrice={discountedPrice}
                            cardPrice={cardPrice}
                        />
                        <CartButton productId={productId}/>
                        <Bonuses bonus={bonusesAmount} />
                        <div className="flex flex-col gap-2 xl:mt-8 md:mt-4">
                            <h3>Основные характеристики:</h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPageContent;