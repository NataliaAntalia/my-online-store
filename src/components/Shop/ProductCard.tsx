

import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "./CartContext";
import { ReactComponent as Compare } from "../../img/compare.svg";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        image_url: string;
        price: number;
        cashback: number;
        currency: string;
        rating: number;
    };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart, favorites, toggleFavorite, comparison, toggleComparison } = useCart();
    const [rating, setRating] = React.useState(product.rating);
    const [hover, setHover] = React.useState(0);
    const { t } = useTranslation();

    const handleAddToCart = () => {
        addToCart({
            id: uuidv4(),
            image: product.image_url,
            name: t(product.name),
            price: product.price,
            cashback: product.cashback,
        });
    };

    return (
        <Card sx={{ maxWidth: 260, margin: '7px' }}>
            <CardMedia
                component="img"
                height="200"
                image={product.image_url}
                alt={t(product.name)}
            />
            <CardContent>
                <Typography variant="subtitle1">{t(product.name)}</Typography>

                <Box sx={{ display: "flex", mb: 1 }}>
                    {[...Array(5)].map((_, i) => {
                        const starValue = i + 1;
                        return (
                            <IconButton
                                key={i}
                                size="small"
                                onClick={() => setRating(starValue)}
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(0)}
                            >
                                {starValue <= (hover || rating) ? (
                                    <StarIcon sx={{ color: "#fbc02d" }} />
                                ) : (
                                    <StarBorderIcon sx={{ color: "#fbc02d" }} />
                                )}
                            </IconButton>
                        );
                    })}
                </Box>

                <Typography variant="h6">
                    {product.price.toLocaleString()} {product.currency}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {t('cashback')}: {product.cashback} {product.currency}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                    <Button
                        variant="contained"
                        startIcon={<ShoppingCartIcon />}
                        onClick={handleAddToCart}
                    >
                        {t('addToCart')}
                    </Button>

                    <IconButton onClick={() => toggleFavorite({ ...product, name: t(product.name), image: product.image_url })}>
                        {favorites.find(f => f.id === product.id) ? (
                            <FavoriteIcon sx={{ color: '#fd3579' }} />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </IconButton>

                    <IconButton onClick={() => toggleComparison({ ...product, name: t(product.name), image: product.image_url })}>
                        {comparison.find(c => c.id === product.id) ? (
                            <Compare width={24} height={24} style={{ fill: "blue" }} />
                        ) : (
                            <Compare width={24} height={24} />
                        )}
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};
