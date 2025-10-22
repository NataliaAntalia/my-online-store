import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {useTranslation} from "react-i18next";
import {Link as RouterLink} from 'react-router-dom';
import {AnimatedThemeTogglerDemo} from "@/components/ThemeSwicer/AnimatedThemeTogglerDemo/AnimatedThemeTogglerDemo";
import s from '../ResponsiveAppBar/ResponsiveAppBar.module.css'
import {NavigationLinks} from "@/components/Header/ResponsiveAppBar/NavigationLinks/NavigationLinks";
import {PhoneDropdown} from "@/components/Header/ResponsiveAppBar/PhoneDropdown/PhoneDropdown";
import {LangSwitcher} from "@/components/Header/ResponsiveAppBar/LangSwitcher/LangSwitcher";
import {
    LANGUAGES,
    LOGO_PATH, LOGO_PATH_DARK,
    MAIN_NUMBER,
    OTHER_NUMBERS, PAGES,
    WORKING_HOURS
} from "@/components/Header/ResponsiveAppBar/constants";
import {useEffect, useState} from "react";


export function ResponsiveAppBar() {

    const {t, i18n} = useTranslation();
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        const updateTheme = () => {
            const dark = document.documentElement.classList.contains('dark');
            setIsDarkMode(dark);
        };
        updateTheme();
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    const currentLogo = isDarkMode ? LOGO_PATH_DARK : LOGO_PATH;

    return (
        <AppBar position="static" className={s.appBar}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <RouterLink to="/">
                        <Box
                            component="img"
                            src={currentLogo}
                            alt="Logo"
                            className={s.logo}
                        />
                    </RouterLink>

                    <NavigationLinks t={t} pages={PAGES}/>
                    <PhoneDropdown
                        mainNumber={MAIN_NUMBER}
                        otherNumbers={OTHER_NUMBERS}
                        workingHours={WORKING_HOURS}/>
                    <AnimatedThemeTogglerDemo/>
                    <LangSwitcher i18n={i18n} languages={LANGUAGES}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

