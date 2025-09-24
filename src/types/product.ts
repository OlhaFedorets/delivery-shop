export interface ProductCardProps {
    id: number;
    img: string;
    title: string;
    description: string;
    basePrice: number;
    discountPercent?: number;
    rating: {
        rate: number;
        count: number;
    };
    categories: string[];
    weight?: number;
    quantity?: number;
    tags?: string[];
}