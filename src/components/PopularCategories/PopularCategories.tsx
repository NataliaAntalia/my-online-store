import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import {useEffect} from "react";
import {supabaseAnonKey, supabaseUrl} from "@/supabaseClient";

type Category = { id: number,name: string; image_url: string };


export default function PopularCategories() {
    const { t } = useTranslation();

const [categories, setCategories] = React.useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const headers = {
                'apikey': supabaseAnonKey,
                'Authorization': `Bearer ${supabaseAnonKey}`,
                'Accept': 'application/json',
            };

            try {
                const res = await fetch(`${supabaseUrl}/rest/v1/categories`, { headers });
                const data: Category[] = await res.json();
                console.log("Fetched categories:", data);
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const visible = categories.slice(0, 10);
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
                {t('popularCategories')}
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(3, 1fr)',
                        md: 'repeat(5, 1fr)',
                    },
                    '&:hover .catCard:not(:hover)': {
                        opacity: 0.6,
                        transform: 'none',
                    },
                    '& .catCard': {
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'transform 0.24s ease, box-shadow 0.24s ease, opacity 0.24s ease',
                        transformOrigin: 'center',
                    },
                    '& .catCard:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 4,
                        zIndex: 1,
                        opacity: 1,
                    },
                }}
            >
                {visible.map((cat, i) => (
                    <Box key={i} className="catCard">
                        <Box
                            component="img"
                            src={cat.image_url}
                            alt={t(cat.name)}
                            sx={{
                                width: '100%',
                                minWidth: '274px',
                                height: "250px",
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                bgcolor: 'rgba(0,0,0,0.5)',
                                color: '#fff',
                                textAlign: 'center',
                                p: 1,
                            }}
                        >
                            {t(cat.name)}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
