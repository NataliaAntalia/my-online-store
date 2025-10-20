import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from "react";
import {supabaseAnonKey, supabaseUrl} from "@/supabaseClient";
import s from './PopularCategories.module.css'
import {CategoryCard} from "@/components/PopularCategories/CategoryCard/CategoryCard";

type Category = {
    id: number;
    name: string;
    image_url: string;
};


export default function PopularCategories() {
    const {t} = useTranslation();
    const [categories, setCategories] = useState<Category[]>([]);
    const visible = categories.slice(0, 10);


    useEffect(() => {
        const fetchCategories = async () => {
            const headers = {
                'apikey': supabaseAnonKey,
                'Authorization': `Bearer ${supabaseAnonKey}`,
                'Accept': 'application/json',
            };

            try {
                const res = await fetch(`${supabaseUrl}/rest/v1/categories`, {headers});
                const data: Category[] = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);

            }
        };

        fetchCategories();
    }, []);


    return (
        <Box className={s.categoriesSection}>
            <Typography variant="h5" gutterBottom>
                {t('popularCategories')}
            </Typography>

            <Box className={s.categoriesGrid}>
                {visible.map((cat) => (
                    <CategoryCard key={cat.id} name={cat.name} imageUrl={cat.image_url}/>
                ))}
            </Box>
        </Box>
    );
}