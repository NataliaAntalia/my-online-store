import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import stile from "../Footer.module.css";
import s from "./FooterSocials.module.css";


type SocialLinksType = {
    icon: React.ElementType,
    url: string,
}

type FooterSocialsType = {
    title: string,
    links: SocialLinksType[],
}

export const FooterSocials = ({title, links}: FooterSocialsType) => {
    return (
        <Box>
            <Typography gutterBottom className={stile.footerTitle}>
                {title}
            </Typography>
            <Box className={s.footerSocials}>
                {links.map(({icon: Icon, url}, idx) => (
                    <IconButton
                        key={idx}
                        component="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.footerSocialButton}
                    >
                        <Icon className={s.footerSocialIcon}/>
                    </IconButton>
                ))}
            </Box>

        </Box>
    );
};

