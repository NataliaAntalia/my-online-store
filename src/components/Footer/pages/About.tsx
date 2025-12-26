import React from 'react';
import Box from "@mui/material/Box";
import s from './common.module.css'
import {CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";



export const About = () => {
    return (
        <Box className={`${s.box} ${s.boxAbout}`}>
            <Typography className={s.text}> Раздел о нас пока не доступен 😒</Typography>
            <CircularProgress className={`${s.spinner} ${s.spinnerAbout}`}/>
        </Box>
    );
};

