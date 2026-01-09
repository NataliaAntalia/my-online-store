import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CatalogSection} from "@/types/catalog";
import {fetchCatalogFromSupabase} from "@/api/catalogApi";
import {mapSupabaseToCatalog} from "@/utils/utils";


interface CatalogState {
    sections: CatalogSection[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    searchQuery: string;
}

const initialState: CatalogState = {
    sections: [],
    status: 'idle',
    searchQuery: '',
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
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        }
    },
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

export const {setSearchQuery} = catalogSlice.actions;
export default catalogSlice.reducer;
