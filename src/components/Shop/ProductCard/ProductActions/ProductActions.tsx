import React from 'react';
import {Box, Button, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {ReactComponent as Compare} from "../../../../img/compare.svg";
import s from './ProductActions.module.css';
import {ProductActionsProps} from "@/components/Shop/ProductCard/types";


export const ProductActions: React.FC<ProductActionsProps> = ({
                                                                  product,
                                                                  favorites,
                                                                  comparison,
                                                                  toggleFavorite,
                                                                  toggleComparison,
                                                                  handleAddToCart,
                                                                  t
                                                              }) => {


    const actions = [
        {
            key: 'favorite',
            isActive: favorites.some(f => f.id === product.id),
            onClick: () => toggleFavorite({...product, name: t(product.name)}),
            activeIcon: <FavoriteIcon className={s.favorite}/>,
            inactiveIcon: <FavoriteBorderIcon/>,
        },
        {
            key: 'compare',
            isActive: comparison.some(c => c.id === product.id),
            onClick: () => toggleComparison({...product, name: t(product.name)}),
            activeIcon: <Compare width={24} height={24} className={s.compareActive}/>,
            inactiveIcon: <Compare width={24} height={24}/>,
        }
    ];

    return (
        <Box className={s.actions}>
            <Button
                variant="contained"
                startIcon={<ShoppingCartIcon/>}
                onClick={handleAddToCart}
            >
                {t('addToCart')}
            </Button>


            {actions.map(({key, isActive, onClick, activeIcon, inactiveIcon}) => (
                <IconButton key={key} onClick={onClick}>
                    {isActive ? activeIcon : inactiveIcon}
                </IconButton>
            ))}

        </Box>
    );
};
