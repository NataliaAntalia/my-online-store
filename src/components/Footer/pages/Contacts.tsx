import React from 'react';
import Box from "@mui/material/Box";
import s from "@/components/Footer/pages/common.module.css";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";

export const Contacts = () => {
    return (
        <Box className={`${s.box} ${s.boxContacts}`}>
            <Typography className={s.text}> Раздел Контакты пока не доступен 😒</Typography>
            <CircularProgress className={`${s.spinner} ${s.spinnerContacts}`}/>
        </Box>
    );
};

