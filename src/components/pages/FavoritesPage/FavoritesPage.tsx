import React from 'react';
import {useCart} from '@/hooks/useCart';
import {ProductsPage} from "@/components/pages/ProductsPage/ProductsPage";


export const FavoritesPage = () => {
    const { favorites } = useCart();
    return <ProductsPage products={favorites} titleKey="favorites" emptyTextKey="favorites_empty" />;
};
