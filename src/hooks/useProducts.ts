import {useEffect, useState} from "react";
import {fetchProducts, Product} from "@/api/products";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(err => {
                console.error("Error fetching products:", err);
                setError(err.message);
            });
    }, []);

    const newProducts = products.filter(p => p.category === "new");
    const discountedProducts = products.filter(p => p.category === "discounted");
    const topProducts = products.filter(p => p.category === "top");

    return {products, newProducts, discountedProducts, topProducts, error};
}
