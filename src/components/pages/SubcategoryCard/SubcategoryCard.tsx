import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import s from './SubcategoryCard.module.css'
import {CatalogSubcategory} from "@/types/catalog";

interface SubcategoryCardProps {
    sub: CatalogSubcategory;
}

export function SubcategoryCard({ sub }:SubcategoryCardProps) {
    return (
        <Link to={`/subcategory/${sub.name}`} className={s.cardLink}>
            <Box className={s.cardContent}>
                <Box component="img" src={sub.image || '/placeholder.jpg'} alt={sub.name} className={s.cardImage} />

                <Typography variant="subtitle2" align="center" className={s.cardTitle}>
                    {sub.name}
                </Typography>
            </Box>
        </Link>
    );
}
