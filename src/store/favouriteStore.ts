import { create } from "zustand";
import {Product} from "@/types/cart";
import productsData from "@/data/productsDatabase.json"

interface FavouriteState {
    favourites: string[];
    totalFavourites: number;
    getFavouriteProducts: () => Product[];
    toggleFavourite: (productId: string) => void;
    isFavourite: (productId: string) => boolean;
    clearFavourites: () => void;
}

export const useFavouriteStore = create<FavouriteState>((set, get) => ({
    favourites: [],
    totalFavourites: 0,

    getFavouriteProducts: (): Product[] => {
        const { favourites } = get();
        return favourites
            .map(id => productsData.find(product => product.id.toString() === id))
            .filter((product): product is Product => product !== undefined);
    },

    toggleFavourite: (productId: string) => {
        const { favourites } = get();

        if (favourites.includes(productId)) {
            // Удаляем из избранного
            const updatedFavourites = favourites.filter(id => id !== productId);
            set({
                favourites: updatedFavourites,
                totalFavourites: updatedFavourites.length
            });
        } else {
            // Добавляем в избранное
            const updatedFavourites = [...favourites, productId];
            set({
                favourites: updatedFavourites,
                totalFavourites: updatedFavourites.length
            });
        }
    },

    isFavourite: (productId: string) => {
        const { favourites } = get();
        return favourites.includes(productId);
    },

    clearFavourites: () => {
        set({ favourites: [],
            totalFavourites: 0
        });
    }
}));