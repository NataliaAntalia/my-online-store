export interface CatalogChild {
    id: number;
    subcategory_id: number;
    name: string;
}

export interface CatalogSubcategory {
    id: number;
    name: string;
    image?: string;
    children: CatalogChild[];
}

export interface CatalogSection {
    id: number;
    key: string;
    name: string;
    subcategories: CatalogSubcategory[];
}