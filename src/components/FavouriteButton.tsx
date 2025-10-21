"use client";

import { useFavouriteStore } from "@/store/favouriteStore";
import IconHeart from "./svg/IconHeart";


const FavoriteButton = ({productId}: { productId: string }) => {

    const {toggleFavourite, isFavourite  } = useFavouriteStore();


    const handleClick = () => {
        toggleFavourite(productId)
    };

    const isActive = isFavourite(productId);

    return (
        <button
            onClick={handleClick}
            className={`w-8 h-8 p-2 bg-[#f3f2f1] hover:bg-[#fcd5ba] absolute top-2 right-2 
            rounded duration-300 z-10 flex items-center justify-center`}
            title={isActive ? "Удалить из избранного" : "Добавить в избранное"}
        >
            <IconHeart isActive={isActive}/>
        </button>
    );
};

export default FavoriteButton;