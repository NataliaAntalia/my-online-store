import React from 'react';
import {Box, Button} from "@mui/material";
import {authButtons} from "@/components/pages/LoginPage/constants";
import s from './AuthButtons.module.css'

type AuthButtonsType={
    disabled:boolean
}


export const AuthButtons = ({disabled}:AuthButtonsType) => {
    return (
        <Box>
            <Box className={s.forgotContainer}>

                {authButtons.map((button, i) => (
                    <Button key={i} variant="text" size="small" className={s.forgotButton}>{button}</Button>
                ))}
            </Box>

            <Button disabled={disabled} className={s.loginButton}>
                Войти
            </Button>
        </Box>
    );
};

