export interface Product {
    id: string;
    name: string;
    price: number;
    cashback: number;
    image: string;
}

export interface CartContextType {
    cart: Product[];
    favorites: Product[];
    comparison: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    toggleFavorite: (product: Product) => void;
    toggleComparison: (product: Product) => void;

}