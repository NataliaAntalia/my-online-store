import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import Box from "@mui/material/Box";
import s from '../NavigationLinks/NavigationLinks.module.css'

type PaGesType = {
    path: string,
    labelKey: string,
}

interface Props {
    t: (key: string) => string;
    pages: PaGesType[]
}

export const NavigationLinks = ({t, pages}: Props) => {


    return (
        <Box className={s.navLinks}>
            {pages.map((page) => (
                <RouterLink
                    key={page.path}
                    to={`/${page.path}`}
                    className={s.navLink}
                >
                    {t(page.labelKey)}
                </RouterLink>
            ))}
        </Box>
    );
};

