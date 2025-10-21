import React from 'react';
import {Typography} from "@mui/material";
import {ProductInfoProps} from "@/components/Shop/ProductCard/types";


export const ProductInfo = ({price, cashback, currency, t}: ProductInfoProps) => {
    return (
        <>
            <Typography variant="h6">
                {price.toLocaleString()} {currency}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {t('cashback')}: {cashback} {currency}
            </Typography>
        </>
    );
};

