import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CatalogSection} from "@/types/catalog";
import {fetchCatalogFromSupabase} from "@/api/catalogApi";
import {mapSupabaseToCatalog} from "@/lib/utils";


interface CatalogState {
    sections: CatalogSection[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CatalogState = {
    sections: [],
    status: 'idle',
};

export const fetchCatalog = createAsyncThunk<CatalogSection[]>(
    "catalog/fetchCatalog",
    async () => {
        const supabaseSections = await fetchCatalogFromSupabase();
        return mapSupabaseToCatalog(supabaseSections);
    }
);

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.sections = action.payload;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export default catalogSlice.reducer;
