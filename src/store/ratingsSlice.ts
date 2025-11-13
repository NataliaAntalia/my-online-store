import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RatingsState {
    [productId: string]: number;
}

const initialState: RatingsState = {};

const ratingsSlice = createSlice({
    name: 'ratings',
    initialState,
    reducers: {
        setRating: (state, action: PayloadAction<{id: string, rating: number}>) => {
            state[action.payload.id] = action.payload.rating;
        }
    }
});

export const { setRating } = ratingsSlice.actions;
export default ratingsSlice.reducer;
