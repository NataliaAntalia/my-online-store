export interface Product {
    id: string;
    name: string;
    price: number;
    cashback: number;
    image: string;
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


