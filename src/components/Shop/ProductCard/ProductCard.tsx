import React, {useState} from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import {useTranslation} from "react-i18next";
import {useCart} from "@/hooks/useCart";
import s from './ProductCard.module.css'
import {RatingStars} from "@/components/Shop/ProductCard/RatingStars/RatingStars";
import {ProductInfo} from "@/components/Shop/ProductCard/ProductInfo/ProductInfo";
import {ProductActions} from "@/components/Shop/ProductCard/ProductActions/ProductActions";
import {ProductCardProps} from "@/components/Shop/ProductCard/types";
import IconButton from "@mui/material/IconButton";
import {Trash2} from "lucide-react";


export const ProductCard: React.FC<ProductCardProps> = ({product, showRemoveButton = false}) => {
    const {addToCart, favorites, toggleFavorite, comparison, toggleComparison, removeFromCart} = useCart();
    const [rating, setRating] = useState(product.rating);
    const [hover, setHover] = useState(0);
    const {t} = useTranslation();

    const handleAddToCart = () => {
        addToCart({
            id: uuidv4(),
            image_url: product.image_url,
            name: t(product.name),
            price: product.price,
            cashback: product.cashback,
            currency: product.currency,
            rating: product.rating,
        });
    };



    return (
        <Card className={s.card}>
            <CardMedia
                component="img"
                height="200"
                image={product.image_url}
                alt={t(product.name)}
            />
            <CardContent>
                <Typography variant="subtitle1">{t(product.name)}</Typography>
                <RatingStars
                    rating={rating}
                    onClick={setRating}
                    onMouseLeave={setHover}
                    onMouseEnter={() => setHover(0)}
                    hover={hover}/>
                <ProductInfo
                    price={product.price}
                    currency={product.currency}
                    cashback={product.cashback}
                    t={t}
                />
                <ProductActions product={product}
                                handleAddToCart={handleAddToCart}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                                toggleComparison={toggleComparison}
                                t={t}
                                comparison={comparison}/>

                {showRemoveButton && (
                    <IconButton
                        onClick={() => removeFromCart(product.id)}
                        className={s.removeButton}
                        aria-label="Удалить из корзины"
                        size="small"
                    >
                        <Trash2 size={20} />
                    </IconButton>
                )}
            </CardContent>
        </Card>
    );
};
