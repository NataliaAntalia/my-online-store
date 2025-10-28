import React from 'react';
import {ProductsPage} from "@/components/pages/ProductsPage/ProductsPage";
import {useCart} from "@/hooks/useCart";

export const CartPage = () => {
    const {cart} = useCart();
    return <ProductsPage products={cart} titleKey={'cart'} emptyTextKey={'cart_empty'} showRemoveButton={true}/>;
};



