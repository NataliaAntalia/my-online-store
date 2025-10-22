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


export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const {addToCart, favorites, toggleFavorite, comparison, toggleComparison} = useCart();
    const [rating, setRating] = useState(product.rating);
    const [hover, setHover] = useState(0);
    const {t} = useTranslation();

    const handleAddToCart = () => {
        addToCart({
            id: uuidv4(),
            image: product.image_url,
            name: t(product.name),
            price: product.price,
            cashback: product.cashback,
        });
    };

    const mappedProduct = React.useMemo(() => ({
        id: product.id,
        name: t(product.name),
        price: product.price,
        cashback: product.cashback,
        image: product.image_url,
    }), [product, t]);


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
                <ProductActions product={mappedProduct}
                                handleAddToCart={handleAddToCart}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                                toggleComparison={toggleComparison}
                                t={t}
                                comparison={comparison}/>
            </CardContent>
        </Card>
    );
};
