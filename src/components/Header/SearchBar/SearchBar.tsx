import React from 'react';
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import s from './SearchBar.module.css'

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'var(--search-bg)',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--search-icon)',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'var(--search-text)',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {width: '20ch'},
    },
}));

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>;
}

export const SearchBar = ({value, onChange, placeholder = "Search...", inputProps}:SearchBarProps) => {
    return (
        <Box className={s.searchContainer}>
            <Search className={s.searchBox}>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    inputProps={inputProps}
                />
            </Search>
        </Box>
    );
};

