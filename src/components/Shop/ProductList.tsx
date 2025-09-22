import React from "react";
import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useTranslation } from "react-i18next";

interface Product {
    id: string;
    name: string;
    image_url: string;
    price: number;
    cashback: number;
    currency: string;
    rating: number;
}

interface ProductListProps {
    titleKey: string; // ключ для перевода заголовка
    products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ titleKey, products }) => {
    const { t } = useTranslation();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography sx={{ mt: "50px", mb: "8px" }} variant="h4">{t(titleKey)}</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {Array.isArray(products) && products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </Box>
        </Box>
    );
};
