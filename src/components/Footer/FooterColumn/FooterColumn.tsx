import React from 'react';
import { Link } from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import s from "./FooterColumn.module.css";
import stile from "../Footer.module.css";
import {FOOTER_ROUTES} from "@/components/Footer/routes";
import { useTranslation } from 'react-i18next';


type FooterColumnType = {
    title: string,
    links: string[],
}

export const FooterColumn = ({title, links}: FooterColumnType) => {

    const { t } = useTranslation();
    return (

        <Grid item xs={12} sm={6} md={3} {...({} as any)}>
            <Typography gutterBottom className={stile.footerTitle}>
                {t(title)}
            </Typography>
            {links.map((link) => (
                <Link key={link} to={FOOTER_ROUTES[link]} className={s.footerLink}>
                    {t(link)}
                </Link>
            ))}
        </Grid>


    );
};

