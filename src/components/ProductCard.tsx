import Image from "next/image";
import {ProductCardProps} from "@/types/product";
import {formatPrice} from "@/utils/formatPrice";
import StarRating from "@/components/StarRating";
import Link from "next/link";
import FavouriteButton from "@/components/FavouriteButton";
import AddToCartButton from "@/components/AddToCartButton";
import {CONFIG} from "../../config/config";


const ProductCard = ({
                         id,
                         img,
                         description,
                         basePrice,
                         discountPercent = 0,
                         rating,
                         category,
                     }: ProductCardProps) => {
    const calculatePrice = (price: number, discount: number): number => {
        return discount > 0 ? price * (1 - discount / 100) : price;
    };

    const finalPrice = calculatePrice(basePrice, discountPercent);
    const priceByCard = calculatePrice(finalPrice, CONFIG.CARD_DISCOUNT_PERCENT);
    const ratingValue = rating?.rate || 5;
    const productUrl = `/catalog/${encodeURIComponent(category)}/${id}?desc=${encodeURIComponent(description.substring(0, 50))}`;

    return (
        <div
            className="relative flex flex-col justify-between w-40 rounded overflow-hidden bg-white md:w-[224px] xl:w-[272px] h-[349px] align-top p-0 hover:shadow-(--shadow-article) duration-300">
            <FavouriteButton productId={id.toString()}/>
            <Link href={productUrl}>
                <div className="relative aspect-square w-40 h-40 md:w-[224px] xl:w-[272px]">
                    <Image
                        src={img}
                        alt="Товар"
                        fill
                        className="object-contain"
                        priority={false}
                        sizes="(max-width: 768px) 160px, (max-width: 1280px) 224px, 272px"
                    />
                    {discountPercent > 0 && (
                        <div
                            className="absolute bg-[var(--color-secondary)] py-1 px-2 rounded text-white bottom-2.5 left-2.5">
                            -{discountPercent}%
                        </div>
                    )}
                </div>

                <div className="flex flex-col p-2 h-[189px]">
                    <div className="flex flex-row justify-between items-start h-[45px]">
                        <div className="flex flex-col gap-x-1">
                            <div className="flex flex-row gap-x-1 text-sm md:text-lg font-bold text-main-text">
                                <span>{formatPrice(priceByCard)}</span>
                                <span>₽</span>
                            </div>
                            <p className="text-[#bfbfbf] text-[8px] md:text-xs">С картой</p>
                        </div>
                        <div className="flex flex-col gap-x-1">
                            <div className="flex flex-row gap-x-1 text-xs md:text-base text-[#606060]">
                                <span>{formatPrice(finalPrice)}</span>
                                <span>₽</span>
                            </div>
                            <p className="text-[#bfbfbf] text-[8px] md:text-xs text-right">
                                Обычная
                            </p>
                        </div>
                    </div>
                    <div
                        className="h-13.5 text-xs md:text-base text-main-text line-clamp-3 md:line-clamp-2 leading-[1.5]">
                        {description}
                    </div>
                    {<StarRating rating={ratingValue}/>}
                </div>
            </Link>
            <AddToCartButton productId={id.toString()}/>
        </div>
    );
};

export default ProductCard;