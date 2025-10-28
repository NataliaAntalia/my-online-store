import React from 'react';
import {ProductsPage} from "@/components/pages/ProductsPage/ProductsPage";
import {useCart} from "@/hooks/useCart";

export const ComparisonPage = () => {
    const {comparison} = useCart();
    return <ProductsPage products={comparison} emptyTextKey={'comparison_empty'} titleKey={'comparison'}/>

};

