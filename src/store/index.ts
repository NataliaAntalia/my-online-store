import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice';
import drawerReducer from './drawerSlice';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';
import comparisonReducer from './comparisonSlice';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        drawers: drawerReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        comparison: comparisonReducer


    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
