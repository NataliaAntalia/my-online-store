import React, {createContext} from "react";
import {CartContextType} from "@/components/Shop/CartContext/types";
import {addToCart, removeFromCart} from "@/store/cartSlice";
import {toggleFavorite} from "@/store/favoritesSlice";
import {toggleComparison} from "@/store/comparisonSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";


export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart.cart);
    const favorites = useAppSelector(state => state.favorites.favorites);
    const comparison = useAppSelector(state => state.comparison.comparison);


    const contextValue: CartContextType = {
        cart,
        favorites,
        comparison,
        addToCart: (product) => dispatch(addToCart(product)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        toggleFavorite: (product) => dispatch(toggleFavorite(product)),
        toggleComparison: (product) => dispatch(toggleComparison(product)),
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
