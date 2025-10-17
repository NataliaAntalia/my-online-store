import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";
import s from '../LoginPage.module.css'

type EmailFieldType = {
    value: string;
    onChange: (value: string) => void;
}


export const EmailField = ({value, onChange}: EmailFieldType) => {
    const handleChange=(e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onChange(e.target.value)
    return (
        <TextField
            label="Ваш E-mail"
            type="email"
            fullWidth
            margin="normal"
            className={s.inputField}
            value={value}
            onChange={handleChange}
        />
    );
};
