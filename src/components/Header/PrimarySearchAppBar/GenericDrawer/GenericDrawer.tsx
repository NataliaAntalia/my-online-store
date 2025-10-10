import React from 'react';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";
import s from './GenericDrawer.module.css'


interface GenericDrawerProps {
    open: boolean;
    onClose: () => void;
    title: string;
    items: any[];
    emptyMessage: string;
    onDelete: (item: any) => void;
}

export const GenericDrawer: React.FC<GenericDrawerProps> = ({ open, onClose, title, items, emptyMessage, onDelete }) => {
    const { t } = useTranslation();

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box className={s.cartContainer}>
                <Typography variant="h6">{t(title)}</Typography>
                {items.length === 0 ? (
                    <Typography>{t(emptyMessage)}</Typography>
                ) : (
                    items.map((item, index) => (
                        <Box key={index} className={s.cartItem}>
                            <Typography>{item.name} — {item.price} {t('currency')}</Typography>
                            <Button onClick={() => onDelete(item)}>{t('delete')}</Button>
                        </Box>
                    ))
                )}
            </Box>
        </Drawer>
    );
};

