import React from 'react';
import PrimarySearchAppBar from "./PrimarySearchAppBar/PrimarySearchAppBar";
import {ResponsiveAppBar} from "@/components/Header/ResponsiveAppBar/ResponsiveAppBar";
import {useMediaQuery, useTheme} from "@mui/material";


export const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            {!isMobile && <ResponsiveAppBar/>}
            <PrimarySearchAppBar isMobile={isMobile}/>

        </div>
    );
};

