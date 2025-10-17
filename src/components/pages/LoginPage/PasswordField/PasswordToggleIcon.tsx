import React from 'react';
import {IconButton, InputAdornment} from "@mui/material";
import s from "@/components/pages/LoginPage/LoginPage.module.css";
import stile from "@/components/pages/LoginPage/PasswordField/PasswordField.module.css";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type PasswordToggleIconType = {
    onClick: () => void;
    showPassword:boolean
}

export const PasswordToggleIcon = ({onClick, showPassword}:PasswordToggleIconType) => {
    return (
            <InputAdornment
                position="end"
                className={`${s.inputField} ${stile.passwordField}`}
            >
                <IconButton
                    onClick={onClick}
                    edge="end"
                    size="small"
                >
                    {showPassword ? <VisibilityOff fontSize="small"/> : <Visibility fontSize="small"/>}
                </IconButton>
            </InputAdornment>
    );
};

