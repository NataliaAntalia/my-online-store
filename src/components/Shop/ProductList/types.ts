export type Product = {
    id: string;
    name: string;
    image_url: string;
    price: number;
    cashback: number;
    currency: string;
    rating: number;
}

export type ProductListProps = {
    titleKey: string;
    products: Product[];
}