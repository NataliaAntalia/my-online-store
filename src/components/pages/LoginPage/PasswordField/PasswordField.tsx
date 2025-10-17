import React from 'react';
import {TextField} from "@mui/material";
import {PasswordToggleIcon} from "@/components/pages/LoginPage/PasswordField/PasswordToggleIcon";
import s from './PasswordField.module.css'

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

    return (
        <TextField
            type={inputType}
            label="Пароль"
            fullWidth
            value={password}
            margin="normal"
            className={s.inputField}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                    <PasswordToggleIcon onClick={togglePassword} showPassword={showPassword}/>
                ),
            }}
        />
    );
};

