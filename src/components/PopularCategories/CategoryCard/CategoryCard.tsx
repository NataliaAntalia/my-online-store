import React from 'react';
import Box from "@mui/material/Box";
import s from "./CategoryCard.module.css";


type CategoryCardProps = {
    name: string;
    imageUrl: string;
    key: number
}
export const CategoryCard = ({name, imageUrl, key}: CategoryCardProps) => {
    return (
        <Box className={s.catCard}>
            <Box
                key={key}
                component="img"
                src={imageUrl}
                alt={name}
                className={s.categoryImage}
            />
            <Box
                className={s.categoryOverlay}
            >
                {name}
            </Box>
        </Box>
    );
};

