import React from "react";
import {Box, Typography} from "@mui/material";
import {ProductCard} from "../ProductCard/ProductCard";
import {useTranslation} from "react-i18next";
import s from './ProductList.module.css'
import {ProductListProps} from "@/components/Shop/ProductList/types";



export const ProductList: React.FC<ProductListProps> = ({titleKey, products}) => {
    const {t} = useTranslation();

    return (
        <Box className={s.categorySection}>
            <Typography className={s.categoryTitle} variant="h4">
                {t(titleKey)}
            </Typography>
            <Box className={s.productList}>
                {Array.isArray(products) && products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </Box>
        </Box>
    );
};
