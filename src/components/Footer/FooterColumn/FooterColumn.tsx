import React from 'react';
import { Link } from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import s from "./FooterColumn.module.css";
import stile from "../Footer.module.css";
import { useTranslation } from 'react-i18next';


type FooterColumnType = {
    title: string,
    links: { labelKey: string; path: string }[];
}

export const FooterColumn = ({title, links}: FooterColumnType) => {

    const { t } = useTranslation();
    return (

        <Grid item xs={12} sm={6} md={3} {...({} as any)}>
            <Typography gutterBottom className={stile.footerTitle}>
                {t(title)}
            </Typography>
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={s.footerLink}>
                    {t(link.labelKey)}
                </Link>
            ))}
        </Grid>


    );
};

