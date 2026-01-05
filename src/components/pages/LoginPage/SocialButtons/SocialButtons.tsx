import React from 'react';
import {Box, Button, Divider} from "@mui/material";
import {socialButtons} from "@/components/pages/LoginPage/constants";
import s from './SocialButtons.module.css'
import {useTranslation} from "react-i18next";





export const SocialButtons = () => {

    const {t}=useTranslation();

    return (
        <Box>
            <Divider className={s.divider}>{t("entrance_socials")}</Divider>

            <Box className={s.socialButtons}>

                {socialButtons.map((item, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        className={`${s.socialButton} ${item.className}`}>
                        {t(item.label)}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

