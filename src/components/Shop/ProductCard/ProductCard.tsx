import React, {useState} from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useCart} from "@/hooks/useCart";
import s from './ProductCard.module.css'
import {RatingStars} from "@/components/Shop/ProductCard/RatingStars/RatingStars";
import {ProductInfo} from "@/components/Shop/ProductCard/ProductInfo/ProductInfo";
import {ProductActions} from "@/components/Shop/ProductCard/ProductActions/ProductActions";
import {ProductCardProps} from "@/components/Shop/ProductCard/types";
import IconButton from "@mui/material/IconButton";
import {Trash2} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";
import {setRating} from "@/store/ratingsSlice";


export const ProductCard: React.FC<ProductCardProps> = ({product, showRemoveButton = false}) => {
    const {addToCart, favorites, toggleFavorite, comparison, toggleComparison, removeFromCart} = useCart();
    const [hover, setHover] = useState(0);
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const rating = useAppSelector(state => state.ratings[product.id] || 0);

    const handleRatingChange = (value: number) => {
        dispatch(setRating({id: product.id, rating: value}));
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
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
                <Typography variant="subtitle1" className={s.text}>{t(product.name)}</Typography>
                <RatingStars
                    rating={rating}
                    onClick={handleRatingChange}
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
                                comparison={comparison}
                />

                {showRemoveButton && (
                    <IconButton
                        onClick={() => removeFromCart(product.id)}
                        className={s.removeButton}
                        aria-label="Удалить из корзины"
                        size="small"
                    >
                        <Trash2 size={20}/>
                    </IconButton>
                )}
            </CardContent>
        </Card>
    );
};
