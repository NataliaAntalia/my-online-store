import React from 'react';
import Box from "@mui/material/Box";
import s from "@/components/Footer/pages/common.module.css";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";

export const ReturnsAndExchanges = () => {
    return (
        <Box className={`${s.box} ${s.boxReturns}`}>
            <Typography className={s.text}> Раздел Обмен и возврат товара пока не доступен 😒</Typography>
            <CircularProgress className={`${s.spinner} ${s.spinnerReturns}`}/>
        </Box>
    );
};

