import { supabaseUrl, supabaseAnonKey } from "@/supabaseClient";

export interface Product {
    id: string;
    name: string;
    image_url: string;
    price: number;
    cashback: number;
    currency: string;
    rating: number;
    category: string;
}

export async function fetchProducts(): Promise<Product[]> {
    const headers = {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Accept': 'application/json',
    };

    const res = await fetch(`${supabaseUrl}/rest/v1/products`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    return res.json();
}
