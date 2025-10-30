import React, {useMemo} from "react";
import {Box, IconButton, Typography} from "@mui/material";
import {Heart, Trash2} from "lucide-react";
import s from "./CartItem.module.css";
import {Product} from "@/store/types";
import {useCart} from "@/hooks/useCart";
import {useTranslation} from "react-i18next";
import {QuantityCounter} from "@/components/Shop/CartItem/QuantityCounter/QuantityCounter";
import {PinkCheckbox} from "@/components/Shop/CartList/CartList";
import {CartSummary} from "@/components/Shop/CartItem/CartSummary/CartSummary";

export type CartItemProps = {
    product: Product;
    checked?: boolean;
    onToggleSelect?: () => void;
};

export const CartItem: React.FC<CartItemProps> = ({product, checked, onToggleSelect}) => {
    const {toggleFavorite, favorites, removeFromCart} = useCart();
    const {t} = useTranslation();
    const isFavorite = useMemo(
        () => favorites.some((f) => f.id === product.id),
        [favorites, product.id]
    );


    return (
        <Box className={s.cartItem}>
            <PinkCheckbox
                checked={checked}
                onChange={onToggleSelect}
                inputProps={{"aria-label": "select product"}}
            />
            <img src={product.image_url} alt={t(product.name)} className={s.image}/>

            <Typography variant="subtitle1" className={s.name}>
                {t(product.name)}
            </Typography>

            <QuantityCounter product={product}/>

            <Box className={s.actions}>
                <IconButton onClick={() => toggleFavorite(product)}>
                    <Heart
                        size={20}
                        fill={isFavorite ? "#fb3578" : "none"}
                        color={isFavorite ? "#f93577" : "#555"}
                    />
                </IconButton>

                <IconButton onClick={() => removeFromCart(product.id)}>
                    <Trash2 size={20}/>
                </IconButton>
            </Box>
        </Box>
    );
};
