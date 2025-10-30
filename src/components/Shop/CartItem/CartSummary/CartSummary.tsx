import React, {useMemo} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Product} from "@/store/types";
import Button from "@mui/material/Button";
import s from './CartSummary.module.css'

type CartSummaryType ={
    products:Product[];
    checkedItems:string[];

}

export const CartSummary = ({products,checkedItems}:CartSummaryType) => {

    const total = useMemo(() => {
        return products
            .filter((p) => checkedItems.includes(p.id))
            .reduce((sum, p) => sum + p.price * (p.quantity ?? 1), 0);
    }, [products, checkedItems]);

    return (
        <Box className={s.container}>
            <Box className={s.containerPrice}>
            <Typography className={s.text}>Стоимость товаров</Typography>
            <Typography className={s.text}>{total} лей</Typography>
            </Box>
            <Box className={s.divider}/>
            <Box className={s.containerButton}>
            <Button className={s.button1}>Перейти к оформлению</Button>
            <Button className={s.button2}>Купить в 1 клик</Button>
            </Box>
        </Box>
    );
};

