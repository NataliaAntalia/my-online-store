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
    const [isOpen, setIsOpen] = React.useState(false);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleToggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    return (
        <Box
            className={s.userMenuContainer}
            ref={containerRef}
        >
            <Button
                className={s.mainNumberButton}
                onClick={handleToggleMenu}
                endIcon={<ArrowDropDownIcon className={`${s.dropdownIcon} ${isOpen ? s.rotated : ''}`}/>}
            >
                <CallIcon className={s.callIcon}/>
                {mainNumber}
            </Button>

            <Box
                className={`${s.dropdownMenu} ${isOpen ? s.show : ''}`}
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

                <Box className={s.workingHours} sx={{ whiteSpace: 'pre-line' }}>
                    <Typography variant="body2" >
                        {workingHours}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};