import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice';
import drawerReducer from './drawerSlice';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';
import comparisonReducer from './comparisonSlice';
import {loadState, saveState} from "@/store/localStorage";
import ratingsReducer from './ratingsSlice';


const preloadedCart = loadState('cart');
const preloadedFavorites = loadState('favorites');
const preloadedComparison = loadState('comparison');

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        drawers: drawerReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        comparison: comparisonReducer,
        ratings: ratingsReducer,
    },
    preloadedState: {
        cart: { cart: preloadedCart || [] },
        favorites: { favorites: preloadedFavorites || [] },
        comparison: { comparison: preloadedComparison || [] },
        ratings: loadState('ratings') || {},
    },
});

store.subscribe(() => {
    const state = store.getState();
    saveState('cart', state.cart.cart);
    saveState('favorites', state.favorites.favorites);
    saveState('comparison', state.comparison.comparison);
    saveState('ratings', state.ratings);
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
