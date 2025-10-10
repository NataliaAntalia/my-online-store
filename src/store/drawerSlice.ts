import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerConfig {
    id: string;
    title: string;
    emptyMessage: string;
    open: boolean;
}

interface DrawerState {
    drawers: DrawerConfig[];
}

const initialState: DrawerState = {
    drawers: [
        {
            id: 'cart',
            title: 'cart',
            emptyMessage: 'cart_empty',
            open: false,
        },
        {
            id: 'favorites',
            title: 'favorites',
            emptyMessage: 'favorites_empty',
            open: false,
        },
        {
            id: 'comparison',
            title: 'comparison',
            emptyMessage: 'comparison_empty',
            open: false,
        },
    ],
};

 const drawerSlice = createSlice({
    name: 'drawers',
    initialState,
    reducers: {
        setDrawerOpen: (state, action: PayloadAction<{ id: string; open: boolean }>) => {
            const drawer = state.drawers.find((d) => d.id === action.payload.id);
            if (drawer) {
                drawer.open = action.payload.open;
            }
        },
    },
});

export const { setDrawerOpen } = drawerSlice.actions;
export default drawerSlice.reducer;