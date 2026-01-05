import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import s from './EmptyCart.module.css'
import Button from "@mui/material/Button";
import emptyShop from "../../../../img/empty_shop.png";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

    export const EmptyCart = () => {

        const navigate = useNavigate();

        const handleGoHome = () => {
            navigate("/");
        };
        const {t}= useTranslation();

        return (
            <Box className={s.container}>
                <Box className={s.cartEmptyIco}>
                    <img src={emptyShop} alt="empty_cart" className={s.image}/>
                </Box>
                <Box className={s.box}>
                    <Typography variant="h5">{t("empty_cart")}</Typography>
                    <Typography className={s.text}>{t("empty_cart_placeholder")}</Typography>
                    <Button className={s.button} onClick={handleGoHome}>{t("add_to_cart")}</Button>
                </Box>
            </Box>


        );
    };