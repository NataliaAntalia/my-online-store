import React from "react";
import {Box, Typography} from "@mui/material";
import {ProductCard} from "../ProductCard/ProductCard";
import {useTranslation} from "react-i18next";
import s from './ProductList.module.css'
import {ProductListProps} from "@/components/Shop/ProductList/types";
import {useSelector} from "react-redux";
import {RootState} from "@/store";



export const ProductList: React.FC<ProductListProps> = ({titleKey, products}) => {
    const {t} = useTranslation();
    const searchQuery = useSelector((state: RootState) => state.catalog.searchQuery);

    const filteredProducts = React.useMemo(() => {
        if (!searchQuery) return products;

        return products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, products]);

    return (
        <Box className={s.categorySection}>
            <Typography className='sectionTitle'>
                {t(titleKey)}
            </Typography>

            <Box className={s.productList}>
                {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                ) : (
                    <Typography sx={{ p: 2, opacity: 0.6 }}>
                        {searchQuery ? t('Ничего не найдено') : t('no_elements')}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};
