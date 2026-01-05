import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import s from './SubcategoryCard.module.css'
import {CatalogSubcategory} from "@/types/catalog";
import {useTranslation} from "react-i18next";

interface SubcategoryCardProps {
    sub: CatalogSubcategory;
}

export function SubcategoryCard({ sub }:SubcategoryCardProps) {
    const {t}=useTranslation();
    return (
        <Link to={`/subcategory/${sub.name}`} className={s.cardLink}>
            <Box className={s.cardContent}>
                <Box component="img" src={sub.image || '/placeholder.jpg'} alt={sub.name} className={s.cardImage} />

                <Typography variant="subtitle2" align="center" className={s.cardTitle}>
                    {t(sub.name)}
                </Typography>
            </Box>
        </Link>
    );
}
