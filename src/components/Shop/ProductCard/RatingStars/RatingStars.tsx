import React from 'react';
import s from "./RatingStars.module.css";
import {Box, IconButton} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {RatingStarsProps} from "@/components/Shop/ProductCard/types";




export const RatingStars = ({onClick, onMouseLeave, onMouseEnter, rating, hover}: RatingStarsProps) => {
    return (
        <Box className={s.ratingContainer}>
            {[...Array(5)].map((_, i) => {
                const starValue = i + 1;
                return (
                    <IconButton
                        key={i}
                        size="small"
                        onClick={() => onClick(starValue)}
                        onMouseEnter={() => onMouseEnter(starValue)}
                        onMouseLeave={() => onMouseLeave(0)}
                    >
                        {starValue <= (hover || rating) ? (
                            <StarIcon className={s.star}/>
                        ) : (
                            <StarBorderIcon className={s.star}/>
                        )}
                    </IconButton>
                );
            })}
        </Box>
    );
};

