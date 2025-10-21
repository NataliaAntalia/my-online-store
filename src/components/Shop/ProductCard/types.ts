import {Product as CartProduct} from "@/components/Shop/CartContext/types";

export type ProductCardProps = {
    product: {
        id: string;
        name: string;
        image_url: string;
        price: number;
        cashback: number;
        currency: string;
        rating: number;
    };
}

export type ProductActionsProps = {
    product: CartProduct & { image_url?: string };
    favorites: CartProduct[];
    comparison: CartProduct[];
    toggleFavorite: (product: CartProduct) => void;
    toggleComparison: (product: CartProduct) => void;
    handleAddToCart: () => void;
    t: (key: string) => string;
}

export type ProductInfoProps = {
    price: number,
    currency: string,
    cashback: number,
    t: (key: string) => string;
}

export type RatingStarsProps = {
    onClick: (value: number) => void;
    onMouseEnter: (value: number) => void;
    onMouseLeave: (value: number) => void;
    hover: number;
    rating: number
}