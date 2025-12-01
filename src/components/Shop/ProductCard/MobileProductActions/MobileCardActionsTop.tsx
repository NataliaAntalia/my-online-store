import React from 'react';
import { Box, IconButton } from "@mui/material";
import {Product} from "@/store/types";
import { ReactComponent as FavoriteIcon} from 'img/like.svg';
import { ReactComponent as CompareIcon} from 'img/compare.svg';

interface MobileCardActionsTopProps {
    product: Product;
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
    toggleComparison: (product: Product) => void;
    comparison: Product[];
}

export const MobileCardActionsTop: React.FC<MobileCardActionsTopProps> = ({product, favorites, toggleFavorite, toggleComparison, comparison}) => {
    const isFavorite = favorites.some(fav => fav.id === product.id);
    const isInComparison = comparison.some(comp => comp.id === product.id);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'center',
            }}
        >
            <IconButton
                onClick={() => toggleFavorite(product)}
                sx={{
                    bgcolor: 'rgb(235,240,245)',
                    boxShadow: 1,
                    padding: '8px',
                    '&:hover': { bgcolor: 'rgb(255,255,255)' },
                }}
            >
                <FavoriteIcon style={{ fill: isFavorite ? 'red' : 'none', stroke: isFavorite ? 'red' : 'currentColor' }} />
            </IconButton>

            <IconButton
                onClick={() => toggleComparison(product)}
                sx={{
                    bgcolor: 'rgb(235,240,245)',
                    boxShadow: 1,
                    padding: '8px',
                    color: isInComparison ? theme => theme.palette.primary.main : 'currentColor',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                }}
            >
                <CompareIcon />
            </IconButton>
        </Box>
    );
};