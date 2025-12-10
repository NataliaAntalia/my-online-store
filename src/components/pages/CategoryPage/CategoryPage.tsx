import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import s from './CategoryPage.module.css'
import {SubcategoryCard} from "@/components/pages/SubcategoryCard/SubcategoryCard";


export default function FullBorderedGrid() {
    const {categoryKey} = useParams();
    const {t} = useTranslation();
    const catalogSections = useSelector((state: RootState) => state.catalog.sections);
    const category = catalogSections.find(
        (c) => c.key.split(".")[1] === categoryKey
    );

    if (!category) return <Typography>Категория не найдена</Typography>;

    return (
        // <Box className='globalContainer'>
        //     <Box className='headerWrapper'>
        <Box className={s.container}>
            <Typography variant="h4" className={s.title}>
                {t(category.key)}
            </Typography>
            <Grid container className={s.grid}>
                {category.subcategories.map((sub, idx) => (
                    <Grid
                        className={s.gridItem}
                        key={idx}
                        size={{xs: 12, sm: 6, md: 4, lg: 3,}}
                    >
                        <SubcategoryCard sub={sub} />
                    </Grid>
                ))}
            </Grid>
        </Box>
        // </Box>
        // </Box>
    );
}