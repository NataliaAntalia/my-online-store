import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";
import {inputSX} from "@/components/pages/LoginPage/inputStyles";
import {useTranslation} from "react-i18next";


type EmailFieldType = {
    value: string;
    onChange: (value: string) => void;
}


export const EmailField = ({value, onChange}: EmailFieldType) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onChange(e.target.value)
    const {t}=useTranslation();
    return (
        <TextField
            label={t("email")}
            type="email"
            fullWidth
            margin="normal"
            value={value}
            onChange={handleChange}
            sx={inputSX}

        />
    );
};
