import React from 'react';
import Box from "@mui/material/Box";
import s from "@/components/Footer/pages/common.module.css";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";

export const Suppliers = () => {
    return (
        <Box className={`${s.box} ${s.boxSuppliers}`}>
            <Typography className={s.text}> Раздел Поставщикам пока не доступен 😒</Typography>
            <CircularProgress className={`${s.spinner} ${s.spinnerSuppliers}`}/>
        </Box>
    );
};

