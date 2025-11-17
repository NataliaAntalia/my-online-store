import React from 'react';
import {Typography} from "@mui/material";
import {ProductInfoProps} from "@/components/Shop/ProductCard/types";


export const ProductInfo = ({price, cashback, currency, t}: ProductInfoProps) => {
    return (
        <>
            <Typography variant="h6" sx={{color: 'var(--text-color)'}}>
                {price.toLocaleString()} {currency}
            </Typography>
            <Typography variant="body2" sx={{color: 'var(--text-secondary)' }}>
                {t('cashback')}: {cashback} {currency}
            </Typography>
        </>
    );
};

