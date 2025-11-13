import {Product} from "@/store/types";

export interface CartContextType {
    cart: Product[];
    favorites: Product[];
    comparison: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    toggleFavorite: (product: Product) => void;
    toggleComparison: (product: Product) => void;

}