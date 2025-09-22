import React, {createContext, useState, useContext} from "react";

export interface Product {
    id: string;
    name: string;
    price: number;
    cashback: number;
    image: string;
}

interface CartContextType {
    cart: Product[];
    favorites: Product[];
    comparison: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    toggleFavorite: (product: Product) => void;
    toggleComparison: (product: Product) => void;

}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [favorites, setFavorites] = useState<Product[]>([]);
    const [comparison, setComparison] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const toggleFavorite = (product: Product) => {
        setFavorites((prev) =>
            prev.find((item) => item.id === product.id)
                ? prev.filter((item) => item.id !== product.id)
                : [...prev, product]
        );
    };

    const toggleComparison = (product: Product) => {
        setComparison(prev =>
            prev.find(item => item.id === product.id)
                ? prev.filter(item => item.id !== product.id)
                : [...prev, product]
        );
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, toggleFavorite, favorites, comparison, toggleComparison}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};
