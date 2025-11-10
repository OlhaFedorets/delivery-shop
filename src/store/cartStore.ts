import { create } from "zustand";
import { CartItem, CartProduct, CartSummary } from "@/types/cart";
import { ProductCardProps } from "@/types/product";
import productsData from "@/data/productsDatabase.json"

interface CartState {
    cartItems: CartItem[];
    totalItems: number;
    hasCard: boolean;
    fetchCart: () => void;
    updateCart: (items: CartItem[]) => void;
    clearCart: () => void;
    addToCart: (productId: string) => void;
    removeFromCart: (productId: string) => void;
    getCartProducts: () => CartProduct[];
    getProductById: (id: string) => ProductCardProps | undefined;
    toggleCard: () => void; // Переключение наличия карты
    getCartSummary: () => CartSummary;
}

export const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],
    totalItems: 0,
    hasCard: false,

    fetchCart: async () => {
        set({
            cartItems: [],
            totalItems: 0,
        });
    },

    updateCart: (items: CartItem[]) => {
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        set({
            cartItems: items,
            totalItems,
        });
    },

    addToCart: (productId: string) => {
        const { cartItems, getProductById } = get();
        const product = getProductById(productId);

        if (!product) {
            console.error("Product not found:", productId);
            return;
        }

        if (product.quantity <= 0) {
            console.error("Product out of stock:", productId);
            return;
        }

        const existingItem = cartItems.find(item => item.productId === productId);

        if (existingItem) {
            if (existingItem.quantity >= product.quantity) {
                console.error("Not enough stock");
                return;
            }

            const updatedItems = cartItems.map(item =>
                item.productId === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            get().updateCart(updatedItems);
        } else {
            const newItem: CartItem = {
                productId,
                quantity: 1,
                addedAt: new Date(),
            };
            get().updateCart([...cartItems, newItem]);
        }
    },

    removeFromCart: (productId: string) => {
        const { cartItems } = get();
        const updatedItems = cartItems.filter(item => item.productId !== productId);
        get().updateCart(updatedItems);
    },

    clearCart: () => {
        set({
            cartItems: [],
            totalItems: 0,
        });
    },

    getCartProducts: (): CartProduct[] => {
        const { cartItems, getProductById } = get();
        return cartItems.map(item => {
            const product = getProductById(item.productId);
            return {
                ...item,
                product: product!
            };
        }).filter(item => item.product !== undefined);
    },

    getProductById: (id: string): ProductCardProps | undefined => {
        return productsData.find(product => product.id.toString() === id);
    },

    toggleCard: () => {
        set((state) => ({ hasCard: !state.hasCard }));
    },

    getCartSummary: (): CartSummary => {
        const { cartItems, getProductById, hasCard } = get();
        const CARD_DISCOUNT_PERCENT = 6; // 6% скидка по карте
        const BONUS_RATE = 0.05; // 5% бонусов

        let baseTotal = 0;
        let productDiscount = 0;

        cartItems.forEach(item => {
            const product = getProductById(item.productId);
            if (product) {
                const itemBaseTotal = product.basePrice * item.quantity;
                const itemDiscountedPrice = product.basePrice * (1 - product.discountPercent / 100) * item.quantity;

                baseTotal += itemBaseTotal;
                productDiscount += (itemBaseTotal - itemDiscountedPrice);
            }
        });

        const totalAfterProductDiscount = baseTotal - productDiscount;
        const cardDiscount = hasCard ? totalAfterProductDiscount * (CARD_DISCOUNT_PERCENT / 100) : 0;
        const finalTotal = totalAfterProductDiscount - cardDiscount;
        const bonuses = finalTotal * BONUS_RATE;

        return {
            totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
            baseTotal,
            productDiscount,
            cardDiscount,
            finalTotal,
            bonuses
        };
    }
}));
