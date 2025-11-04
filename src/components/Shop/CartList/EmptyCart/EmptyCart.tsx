import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import s from './EmptyCart.module.css'
import Button from "@mui/material/Button";
import emptyShop from "../../../../img/empty_shop.png";
import {useNavigate} from "react-router-dom";

    export const EmptyCart = () => {

        const navigate = useNavigate();

        const handleGoHome = () => {
            navigate("/");
        };
        return (
            <Box className={s.container}>
                <Box className={s.cartEmptyIco}>
                    <img src={emptyShop} alt="Пустая корзина" className={s.image}/>
                </Box>
                <Box className={s.box}>
                    <Typography variant="h5">Корзина пуста</Typography>
                    <Typography className={s.text}>Здесь появятся товары, которые вы добавили в корзину.</Typography>
                    <Button className={s.button} onClick={handleGoHome}>Добавить товары</Button>
                </Box>
            </Box>


        );
    };