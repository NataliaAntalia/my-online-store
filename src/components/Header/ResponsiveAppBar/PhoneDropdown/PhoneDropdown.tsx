import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import s from '../PhoneDropdown/PhoneDropdown.module.css';
import React from 'react';

interface PhoneDropdownProps {
    mainNumber: string,
    otherNumbers: string[];
    workingHours: string;

}


export const PhoneDropdown = ({mainNumber, otherNumbers, workingHours}: PhoneDropdownProps) => {
    const [anchorElUser, setAnchorElUser] = React.useState(false);


    const handleOpenMenu = () => setAnchorElUser(true);
    const handleCloseMenu = () => setAnchorElUser(false);

    return (
        <Box
            className={s.userMenuContainer}
            onMouseEnter={handleOpenMenu}
            onMouseLeave={handleCloseMenu}
        >
            <Button
                className={s.mainNumberButton}
                endIcon={<ArrowDropDownIcon className={s.dropdownIcon}/>}
            >
                <CallIcon className={s.callIcon}/>
                {mainNumber}
            </Button>

            <Box
                className={`${s.dropdownMenu} ${anchorElUser ? s.show : ''}`}
            >
                {otherNumbers.map((number, index) => (
                    <Box
                        key={index}
                        className={s.additionalNumber}
                        onClick={handleCloseMenu}
                    >
                        <Typography>{number}</Typography>
                    </Box>
                ))}

                <Box className={s.divider}/>

                <Box className={s.workingHours}>
                    <Typography variant="body2" color="text.secondary">
                        {workingHours}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
