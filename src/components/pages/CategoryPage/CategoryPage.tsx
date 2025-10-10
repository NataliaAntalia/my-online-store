import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {RootState} from "@/store";




export default function FullBorderedGrid() {
    const {categoryKey} = useParams();
    const {t} = useTranslation();
    const catalogSections = useSelector((state: RootState) => state.catalog.sections);
    const category = catalogSections.find(
        (c) => c.key.split(".")[1] === categoryKey
    );

    if (!category) return <Typography>Категория не найдена</Typography>;

    return (
        <Box sx={{maxWidth: 1370, mx: "auto", px: 2, my: 6}}>
            <Typography variant="h4" gutterBottom>
                {t(category.key)}
            </Typography>
            <Grid
                container
                sx={{
                    '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderLeft: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                    '& > div': {
                        borderRight: 'var(--Grid-borderWidth) solid',
                        borderBottom: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        transition: '0.2s',
                        '&:hover': {
                            boxShadow: 3,
                            transform: 'scale(1.02)',
                            zIndex: 1,
                            position: 'relative',
                            backgroundColor: '#fff',
                        },
                    },
                }}
            >
                {category.subcategories.map((sub, idx) => (
                    <Grid
                        key={idx}
                        minHeight={272}
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 4,
                            lg: 3,
                        }}
                    >
                        <Link
                            to={`/subcategory/${sub.name}`}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                height: '100%',
                                display: 'block',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={sub.image || '/placeholder.jpg'}
                                    alt={sub.name}
                                    sx={{
                                        height: 270,

                                    }}
                                />
                                <Typography
                                    variant="subtitle2"
                                    align="center"
                                    sx={{ fontWeight: 500, p: '10px', fontSize: 18 }}
                                >
                                    {sub.name}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}