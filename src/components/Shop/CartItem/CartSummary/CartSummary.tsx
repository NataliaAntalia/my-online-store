import React, {useMemo} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Product} from "@/store/types";
import Button from "@mui/material/Button";
import s from './CartSummary.module.css'
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

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

     const navigate = useNavigate();

     const handleGoHome = () => {
         navigate("/profile");
     };
     const {t}=useTranslation();

    return (
        <Box className={s.container}>
            <Box className={s.containerPrice}>
            <Typography className={s.text}>{t("price")}</Typography>
            <Typography className={s.text}>{total} {t("price_unit")}</Typography>
            </Box>
            <Box className={s.divider}/>
            <Box className={s.containerButton}>
            <Button className={s.button1} onClick={handleGoHome}>{t("proceed_to_checkout")}</Button>
            <Button className={s.button2}>{t("buy")}</Button>
            </Box>
        </Box>
    );
};

