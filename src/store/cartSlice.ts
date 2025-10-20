import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Product {
    id: string;
    name: string;
    price: number;
    cashback: number;
    image: string;
}

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            state.cart.push(action.payload);
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
