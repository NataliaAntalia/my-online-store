import React from 'react';
import { Box, IconButton } from "@mui/material";
import {Product} from "@/store/types";
import { ReactComponent as Shop} from 'img/shop.svg'
import s from "@/components/Shop/ProductCard/ProductActions/ProductActions.module.css";
import {useCart} from "@/hooks/useCart";

interface MobileProductActionsProps {
    product: Product & { image_url?: string };
    handleAddToCart: () => void;
}

export const MobileProductActions: React.FC<MobileProductActionsProps> = ({product, handleAddToCart}) => {
    const {cart} = useCart();
    const isInCart = cart.some(item => String(item.id) === String(product.id));
    return (
        <Box sx={{
            position: 'absolute',
            bottom: 20,
            right: -2,
            zIndex: 10,
            marginLeft: "20px"

        }}>
            <IconButton
                onClick={handleAddToCart}
                color="inherit"
                size="large"
                className={`${s.actionButton} ${isInCart ? s.inCartActive : ''}`}
                sx={{
                    bgcolor:"var(--icon-bg)",
                    padding: '8px',
                    borderRadius: '50%',
                }}
            >
                <Shop />
            </IconButton>
        </Box>
    );
};