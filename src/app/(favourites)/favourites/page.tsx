"use client"

import Link from "next/link";
import {useFavouriteStore} from "@/store/favouriteStore";
import ProductCard from "@/components/ProductCard";
import EmptyFavourites from "@/app/(favourites)/favourites/_components/EmptyFavourites";
import FavouritesHeader from "@/app/(favourites)/favourites/_components/FavouritesHeader";

const FavoritesPage = () => {

    const {
        getFavouriteProducts,
        totalFavourites,
        clearFavourites
    } = useFavouriteStore();

    const favouriteProducts = getFavouriteProducts()

    if (favouriteProducts.length === 0) {
        return (
            <EmptyFavourites/>
        )
    }


    return (
        <div
            className="px-[max(12px,calc((100%-1208px)/2))] md:px-[max(16px,calc((100%-1208px)/2))] text-main-text mx-auto">
            <div className="flex justify-between items-center mb-8">
                <FavouritesHeader itemCount={totalFavourites}/>
                <button
                    onClick={clearFavourites}
                    className="text-secondary hover:text-red-500 transition-colors"
                >
                    Очистить избранное
                </button>
            </div>

            <ul className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-10 justify-items-center`}>
                {favouriteProducts.map((item) => (
                    <li key={item.id}>
                        <ProductCard {...item} />
                    </li>
                ))}
            </ul>

            <div className="m-4 text-center">
                <Link
                    href="/"
                    className="inline-block text-secondary hover:text-red-500 transition-colors"
                >
                    ← Продолжить покупки
                </Link>
            </div>
        </div>
    );
};

export default FavoritesPage;