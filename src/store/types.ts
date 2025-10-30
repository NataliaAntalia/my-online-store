export interface Product {
    id: string;
    name: string;
    image_url: string;
    price: number;
    cashback: number;
    currency: string;
    rating: number;
    quantity?: number;
}

export interface CartState {
    cart: Product[];
}

export interface FavoritesState {
    favorites: Product[];
}

export interface DrawerConfig {
    id: string;
    title: string;
    emptyMessage: string;
    open: boolean;
}

export interface DrawerState {
    drawers: DrawerConfig[];
}


