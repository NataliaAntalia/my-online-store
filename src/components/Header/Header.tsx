import React from 'react';
import PrimarySearchAppBar from "./PrimarySearchAppBar/PrimarySearchAppBar";
import {ResponsiveAppBar} from "@/components/Header/ResponsiveAppBar/ResponsiveAppBar";

const Header = () => {
    return (
        <div>
            <ResponsiveAppBar/>
            <PrimarySearchAppBar/>

        </div>
    );
};

export default Header;