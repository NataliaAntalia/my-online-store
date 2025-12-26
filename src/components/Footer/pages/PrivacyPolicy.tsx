import React from 'react';
import Box from "@mui/material/Box";
import s from "@/components/Footer/pages/common.module.css";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";

export const PrivacyPolicy = () => {
    return (
        <Box className={`${s.box} ${s.boxPrivacy}`}>
            <Typography className={s.text}> Раздел Политика конфиденциальности пока не доступен 😒</Typography>
            <CircularProgress className={`${s.spinner} ${s.spinnerPrivacy}`}/>
        </Box>

    );
};

