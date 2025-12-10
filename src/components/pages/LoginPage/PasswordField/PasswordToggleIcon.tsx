import React from 'react';
import {IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type PasswordToggleIconType = {
    onClick: () => void;
    showPassword:boolean
}

export const PasswordToggleIcon = ({onClick, showPassword}:PasswordToggleIconType) => {
    return (
            <InputAdornment
                position="end"

            >
                <IconButton
                    onClick={onClick}
                    edge="end"
                    size="small"
                >
                    {showPassword ?
                        <VisibilityOff fontSize="small" sx={{ color: "var(--icon-color-eye-diss)" }}/>
                        : <Visibility fontSize="small" sx={{ color: "var(--icon-color)" }}/>}
                </IconButton>
            </InputAdornment>
    );
};

