import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import s from "./FooterAppButtons.module.css";
import stile from "../Footer.module.css";


type AppButton = {
    icon: React.ElementType,
    link: string,
    subText: string;
    mainText: string;
}

type FooterAppButtonsType = {
    title: string,
    buttons: AppButton[],


}


export const FooterAppButtons = ({title, buttons}: FooterAppButtonsType) => {
    return (
        <Box className={s.container}>
            <Typography gutterBottom className={stile.footerTitle}>
                {title}
            </Typography>
            <Box className={s.footerStoreButtons}>
                {buttons.map(({icon: Icon, link, subText, mainText}, idx) => (
                    <Button key={idx} href={link} variant="contained" className={s.storeButton}>
                        <Box className={s.storeButtonIcon}>
                            <Icon className={s.storeIcon}/>
                        </Box>
                        <Box className={s.storeButtonText}>
                            <Typography variant="caption" className={s.storeButtonSubtext}>
                                {subText}
                            </Typography>
                            <Typography variant="body2" className={s.storeButtonMaintext}>
                                {mainText}
                            </Typography>
                        </Box>
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

