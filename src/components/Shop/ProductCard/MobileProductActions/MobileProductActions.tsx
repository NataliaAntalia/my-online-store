import React from 'react';
import { Box, IconButton } from "@mui/material";
import {Product} from "@/store/types";
import { ReactComponent as Shop} from 'img/shop.svg'

interface MobileProductActionsProps {
    product: Product & { image_url?: string };
    handleAddToCart: () => void;
}

export const MobileProductActions: React.FC<MobileProductActionsProps> = ({product, handleAddToCart}) => {


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',

        }}>
            <IconButton
                onClick={handleAddToCart}
                color="inherit"
                size="large"
                sx={{
                    bgcolor:"lightgrey",
                    padding: '8px',
                    borderRadius: '50%',
                }}
            >
                <Shop />
            </IconButton>
        </Box>
    );
};