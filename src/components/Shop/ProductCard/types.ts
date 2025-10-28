import {Product} from "@/store/types";

export type ProductCardProps = {
    product:Product;
    showRemoveButton?: boolean;
}

export type ProductActionsProps = {
    product: Product & { image_url?: string };
    favorites: Product[];
    comparison: Product[];
    toggleFavorite: (product: Product) => void;
    toggleComparison: (product: Product) => void;
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