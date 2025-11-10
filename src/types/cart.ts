import { ProductCardProps } from "./product";

export interface CartItem {
    productId: string;
    quantity: number;
    addedAt: Date;
}

export interface CartProduct extends CartItem {
    product: ProductCardProps;
}

export interface CartSummary {
    totalItems: number;
    baseTotal: number;
    productDiscount: number;
    cardDiscount: number;
    finalTotal: number;
    bonuses: number;
}