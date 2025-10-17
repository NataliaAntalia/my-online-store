import React from 'react';
import {Box, Button, Divider} from "@mui/material";
import {socialButtons} from "@/components/pages/LoginPage/constants";
import s from './SocialButtons.module.css'




export const SocialButtons = () => {
    return (
        <Box>
            <Divider className={s.divider}>Вход через соц. сети</Divider>

            <Box className={s.socialButtons}>
                {socialButtons.map((item, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        className={`${s.socialButton} ${item.className}`}>
                        {item.label}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

