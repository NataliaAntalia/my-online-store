import React from 'react';
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import ResponsiveAppBar from "./ResponsiveAppBar";

const Header = () => {
    return (
        <div>
            <ResponsiveAppBar/>
            <PrimarySearchAppBar/>

        </div>
    );
};

export default Header;