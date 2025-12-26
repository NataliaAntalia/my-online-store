import React from 'react';
import {TextField} from "@mui/material";
import {PasswordToggleIcon} from "@/components/pages/LoginPage/PasswordField/PasswordToggleIcon";
import {inputSX} from "@/components/pages/LoginPage/inputStyles";
import {useTranslation} from "react-i18next";

type PasswordFieldType = {
    showPassword: boolean,
    password: string,
    onChange: (value: string) => void,
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}


export const PasswordField = ({showPassword, password, onChange, onClick}: PasswordFieldType) => {

    const inputType = showPassword ? "text" : "password"
    const togglePassword = () => onClick(prev => !prev);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
const {t}= useTranslation();

    return (
        <TextField
            type={inputType}
            label={t("password")}
            fullWidth
            value={password}
            margin="normal"
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                    <PasswordToggleIcon onClick={togglePassword} showPassword={showPassword}/>
                ),
            }}
            sx={inputSX}
        />
    );
};

