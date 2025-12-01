import React, {useState} from "react";
import {Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useCart} from "@/hooks/useCart";
import s from './ProductCard.module.css'
import {RatingStars} from "@/components/Shop/ProductCard/RatingStars/RatingStars";
import {ProductInfo} from "@/components/Shop/ProductCard/ProductInfo/ProductInfo";
import {ProductActions} from "@/components/Shop/ProductCard/ProductActions/ProductActions";
import {ProductCardProps} from "@/components/Shop/ProductCard/types";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";
import {setRating} from "@/store/ratingsSlice";
import {MobileProductActions} from "@/components/Shop/ProductCard/MobileProductActions/MobileProductActions";
import {MobileCardActionsTop} from "@/components/Shop/ProductCard/MobileProductActions/MobileCardActionsTop";
import Box from "@mui/material/Box";


export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const {addToCart, favorites, toggleFavorite, comparison, toggleComparison} = useCart();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

    const cardSx = {
        width: isMobile ? '100%' : 'auto',
        position: 'relative',
    };
    return (
        <Card className={s.card} sx={cardSx}>
            {isMobile && (
                <MobileCardActionsTop
                    product={product}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    toggleComparison={toggleComparison}
                    comparison={comparison}
                />
            )}
            <CardMedia
                component="img"
                height={isMobile ? "148" : "200"}
                image={product.image_url}
                alt={t(product.name)}
            />
            <CardContent sx={{position: 'relative'}}>
                <Typography variant="subtitle1" className={s.text}>{t(product.name)}</Typography>
                <RatingStars
                    rating={rating}
                    onClick={handleRatingChange}
                    onMouseLeave={setHover}
                    onMouseEnter={() => setHover(0)}
                    hover={hover}/>
                <Box className={s.container}>
                    <Box className={s.productInfoBox}>
                        <ProductInfo
                            price={product.price}
                            currency={product.currency}
                            cashback={product.cashback}
                            t={t}

                        />
                    </Box>

                    {isMobile ? (
                        <MobileProductActions
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />

                    ) : (<ProductActions product={product}
                                         handleAddToCart={handleAddToCart}
                                         favorites={favorites}
                                         toggleFavorite={toggleFavorite}
                                         toggleComparison={toggleComparison}
                                         t={t}
                                         comparison={comparison}
                    />)
                    }
                </Box>
            </CardContent>
        </Card>
    );
};
