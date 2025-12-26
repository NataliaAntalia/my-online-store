import React from 'react';
import Box from "@mui/material/Box";
import s from "@/components/Footer/pages/common.module.css";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";

export const ConsumerProtection = () => {
    return (
        <Box className={`${s.box} ${s.boxConsumer}`}>
            <Typography className={s.text}> Раздел Защита прав потребителей пока не доступен 😒</Typography>
            <CircularProgress className={`${s.spinner} ${s.spinnerConsumer}`}/>
        </Box>
    );
};

