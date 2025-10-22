import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {drawersConfig} from "@/config/drawerConfig";
import {DrawerState} from "@/store/types";



const initialState: DrawerState = {
    drawers: drawersConfig,
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

export const {setDrawerOpen} = drawerSlice.actions;
export default drawerSlice.reducer;