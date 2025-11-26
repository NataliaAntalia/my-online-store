import React from 'react';
import {Box, Typography} from "@mui/material";
import {ProductCard} from "@/components/Shop/ProductCard/ProductCard";
import {Product} from "@/store/types";
import {useTranslation} from "react-i18next";
import s from './ProductsPage.module.css'


type ProductsPageProps = {
    products: Product[];
    titleKey: string;
    emptyTextKey: string;
    showRemoveButton?: boolean;
}

export const ProductsPage = ({products, titleKey, emptyTextKey, showRemoveButton= false}: ProductsPageProps) => {
    const {t} = useTranslation();

    return (
        <>
            <Typography variant="h5" className={s.title}>
                {t(titleKey)}
            </Typography>
            <Box className={s.container}>
                <Box className={s.textContainer}>
                    {products.length === 0 ? (
                        <Typography className={s.emptyText}>{t(emptyTextKey)}</Typography>
                    ) : (
                        <Box className={s.productsList}>
                            {products.map((item) => (
                                <ProductCard key={item.id} product={item} showRemoveButton={showRemoveButton} />
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
};
