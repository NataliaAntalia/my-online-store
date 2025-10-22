import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from "@/store/types";

interface ComparisonState {
    comparison: Product[];
}

const initialState: ComparisonState = {comparison: []};

const comparisonSlice = createSlice({
    name: 'comparison',
    initialState,
    reducers: {
        toggleComparison(state, action: PayloadAction<Product>) {
            const exists = state.comparison.find(p => p.id === action.payload.id);
            state.comparison = exists
                ? state.comparison.filter(p => p.id !== action.payload.id)
                : [...state.comparison, action.payload];
        },
        clearComparison(state) {
            state.comparison = [];
        },
    },
});

export const {toggleComparison, clearComparison} = comparisonSlice.actions;
export default comparisonSlice.reducer;
