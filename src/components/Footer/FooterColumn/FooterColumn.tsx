import React from 'react';
import {Grid, Link, Typography} from "@mui/material";
import s from "./FooterColumn.module.css";
import stile from "../Footer.module.css";

type FooterColumnType = {
    title: string,
    links: string[],
}

export const FooterColumn = ({title, links}: FooterColumnType) => {
    return (

        <Grid item xs={12} sm={6} md={3} {...({} as any)}>
            <Typography gutterBottom className={stile.footerTitle}>
                {title}
            </Typography>
            {links.map((text) => (
                <Link key={text} href="#" className={s.footerLink}>
                    {text}
                </Link>
            ))}
        </Grid>


    );
};

