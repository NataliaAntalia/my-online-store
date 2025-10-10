import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice';
import drawerReducer from './drawerSlice';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        drawers: drawerReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
