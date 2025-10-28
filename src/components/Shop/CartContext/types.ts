// export interface Product {
//     id: string;
//     name: string;
//     price: number;
//     cashback: number;
//     image: string;
// }

//
// export interface Product {
//     id: string;
//     name: string;
//     image_url: string;
//     price: number;
//     cashback: number;
//     currency: string;
//     rating: number;
// }


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