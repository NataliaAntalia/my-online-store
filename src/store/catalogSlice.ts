import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { CatalogChild, CatalogSection, CatalogSubcategory } from "@/types/catalog";
import { supabaseAnonKey } from "@/supabaseClient";

interface CatalogState {
    sections: CatalogSection[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CatalogState = {
    sections: [],
    status: 'idle',
};

interface SupabaseChild {
    id: number;
    subcategory_id: number;
    name: string;
}

interface SupabaseSubcategory {
    id: number;
    name: string;
    image: string;
    catalog_children: SupabaseChild[];  // Остаётся catalog_children
}

interface SupabaseSection {
    id: number;
    key: string;
    name: string;
    catalog_subcategory: SupabaseSubcategory[];  // Исправлено на catalog_subcategory
}

// Асинхронный thunk для загрузки каталога
export const fetchCatalog = createAsyncThunk<CatalogSection[], void>(
    "catalog/fetchCatalog",
    async () => {
        try {
            const response = await axios.get(
                "https://tfzosqloquobjmszssig.supabase.co/rest/v1/catalog_section",
                {
                    headers: {
                        apikey: supabaseAnonKey,
                        "Content-Type": "application/json",
                        Prefer: "return=representation"
                    },
                    params: {
                        select: "*, catalog_subcategory(*, catalog_children(*))"
                    }
                }
            );


            const sections: SupabaseSection[] = response.data;



            return sections.map((section: SupabaseSection): CatalogSection => ({
                id: section.id,
                key: section.key || section.name.toLowerCase(),
                name: section.name,
                subcategories: section.catalog_subcategory?.map(
                    (sub: SupabaseSubcategory): CatalogSubcategory => ({
                        id: sub.id,
                        name: sub.name,
                        image: sub.image,


                        children: sub.catalog_children?.map(
                            (child: SupabaseChild): CatalogChild => ({
                                id: child.id,
                                subcategory_id: child.subcategory_id,
                                name: child.name
                            })
                        ) || []
                    })
                ) || []
            }));
        } catch (error: any) {
            console.error("Supabase fetch error:", error.response?.status, error.response?.data || error.message);
            throw error;
        }
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
