import Menu from "@mui/material/Menu";
import React from 'react';


interface MobileMenuProps {
    mobileMoreAnchorEl: HTMLElement | null;
    onClose: () => void;
}

export const MobileMenu = ({mobileMoreAnchorEl, onClose}:MobileMenuProps) => {
    const isOpen = Boolean(mobileMoreAnchorEl);
    const mobileMenuId = "primary-search-account-menu-mobile";

    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isOpen}
            onClose={onClose}
        />
    );
};

