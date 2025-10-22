export interface SupabaseChild {
    id: number;
    subcategory_id: number;
    name: string;
}

export interface SupabaseSubcategory {
    id: number;
    name: string;
    image: string;
    catalog_children: SupabaseChild[];
}

export interface SupabaseSection {
    id: number;
    key: string;
    name: string;
    catalog_subcategory: SupabaseSubcategory[];
}