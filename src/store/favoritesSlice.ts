import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from './cartSlice';

interface FavoritesState {
    favorites: Product[];
}

const initialState: FavoritesState = {favorites: []};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<Product>) {
            const exists = state.favorites.find(f => f.id === action.payload.id);
            state.favorites = exists
                ? state.favorites.filter(f => f.id !== action.payload.id)
                : [...state.favorites, action.payload];
        },
        clearFavorites(state) {
            state.favorites = [];
        },
    },
});

export const {toggleFavorite, clearFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
