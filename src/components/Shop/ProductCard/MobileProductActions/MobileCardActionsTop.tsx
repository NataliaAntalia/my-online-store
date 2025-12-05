import React from 'react';
import { Box, IconButton } from "@mui/material";
import {Product} from "@/store/types";
import { ReactComponent as FavoriteIcon} from 'img/like.svg';
import { ReactComponent as CompareIcon} from 'img/compare.svg';
import s from "@/components/Shop/ProductCard/ProductActions/ProductActions.module.css";
import {useCart} from "@/hooks/useCart";

interface MobileCardActionsTopProps {
    product: Product;
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
    toggleComparison: (product: Product) => void;
    comparison: Product[];
}


export const MobileCardActionsTop: React.FC<MobileCardActionsTopProps> = ({product, toggleFavorite, toggleComparison}) => {

    const {favorites, comparison} = useCart();
    const isInFavorites = favorites.some(item => String(item.id) === String(product.id));
    const isInCompare = comparison.some(item => String(item.id) === String(product.id));

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',

            }}
        >
            <IconButton
                onClick={() => toggleFavorite(product)}
                sx={{
                    bgcolor: "var(--icon-bg)",
                    boxShadow: 1,
                    padding: '8px',
                    '&:hover': {
                        bgcolor: 'var(--icon-bg-hover)',
                    },
                }}
            >
                <FavoriteIcon className={isInFavorites ? s.favorite : s.favoriteNon}/>
            </IconButton>

            <IconButton
                onClick={() => toggleComparison(product)}
                sx={{
                    bgcolor:"var(--icon-bg)",
                    boxShadow: 1,
                    padding: '8px',
                    '&:hover': {
                        bgcolor: 'var(--icon-bg-hover)',
                    },
                }}
            >
                <CompareIcon className={isInCompare ? s.favorite : s.favoriteNon}/>
            </IconButton>
        </Box>
    );
};