import React from 'react';
import Box from "@mui/material/Box";
import s from "./CategoryCard.module.css";


type CategoryCardProps = {
    name: string;
    imageUrl: string;
}
export const CategoryCard = ({name, imageUrl}: CategoryCardProps) => {
    return (
        <Box className={s.catCard}>
            <Box
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

