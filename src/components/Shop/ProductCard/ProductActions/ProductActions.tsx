import React from 'react';
import {Box, Button, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {ReactComponent as Compare} from "../../../../img/compare.svg";
import s from './ProductActions.module.css';
import {ProductActionsProps} from "@/components/Shop/ProductCard/types";
import {useCart} from "@/hooks/useCart";


export const ProductActions: React.FC<ProductActionsProps> = ({
                                                                  product,
                                                                  favorites,
                                                                  comparison,
                                                                  toggleFavorite,
                                                                  toggleComparison,
                                                                  handleAddToCart,
                                                                  t
                                                              }) => {

    const {cart} = useCart();
    const isInCart = cart.some(item => String(item.id) === String(product.id));

     const actions = [
        {
            key: 'favorite',
            isActive: favorites.some(f => f.id === product.id),
            onClick: () => toggleFavorite({...product, name: t(product.name)}),
            activeIcon: <FavoriteIcon className={s.favorite}/>,
            inactiveIcon: <FavoriteBorderIcon className={s.favoriteNon}/>,
        },
        {
            key: 'compare',
            isActive: comparison.some(c => c.id === product.id),
            onClick: () => toggleComparison({...product, name: t(product.name)}),
            icon: <Compare width={24} height={24}/>,
        },
    ];

    return (
        <Box className={s.actions}>
            <Button
                variant="contained"
                startIcon={<ShoppingCartIcon/>}
                onClick={handleAddToCart}
                className={`${s.actionButton} ${isInCart ? s.inCartActive : ''}`}
            >
                {isInCart ? t('В корзине') : t('addToCart')}
            </Button>


            {actions.map(({key, isActive, onClick, activeIcon, inactiveIcon, icon}) => (
                <IconButton
                    key={key}
                    onClick={onClick}
                    sx={{
                        color: isActive ? 'var(--lang-active-bg)' : 'var(--icon-color)'
                    }}>
                    {icon ? icon : (isActive ? activeIcon : inactiveIcon)}
                </IconButton>
            ))}

        </Box>
    );
};
