import React from 'react';
import Box from "@mui/material/Box";
import s from "@/components/Footer/pages/common.module.css";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";

export const PublicOffer = () => {
    return (
        <Box className={`${s.box} ${s.boxPublic}`}>
            <Typography className={s.text}> Раздел Публичная оферта пока не доступен 😒</Typography>
            <CircularProgress className={`${s.spinner} ${s.spinnerPublic}`}/>
        </Box>
    );
};

