import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { TFunction } from 'i18next';
import { CatalogChild, CatalogSubcategory } from '@/types/catalog';
import s from './CatalogDrawer.module.css'


interface CatalogDrawerProps {
    open: boolean;
    onClose: () => void;
    sections: any[]; // Замени на точный тип, если есть
    activeSection: number;
    setActiveSection: (index: number) => void;
    expandedSubcategories: { [key: string]: boolean };
    setExpandedSubcategories: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    t: TFunction;
}

export const CatalogDrawer: React.FC<CatalogDrawerProps> = ({
                                                                open,
                                                                onClose,
                                                                sections,
                                                                activeSection,
                                                                setActiveSection,
                                                                expandedSubcategories,
                                                                setExpandedSubcategories,
                                                                t,
                                                            }) => {
    const activeSectionData = sections[activeSection] || {};

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Box className={s.drawerContainer}>
                <Box className={s.drawerLeftColumn}>
                    <List>
                        {sections.map((section: any, index: number) => (
                            <ListItem key={section.key || index} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={`/category/${section.key.split('.')[1]}`}
                                    onMouseEnter={() => setActiveSection(index)}
                                    onClick={() => onClose()}
                                >
                                    <ListItemText primary={(`catalog.${section.key.split('.')[1]}`)} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box className={s.drawerRightColumn}>
                    {activeSectionData?.subcategories?.length ? (
                        activeSectionData.subcategories.map((sub: CatalogSubcategory, indexSub: number) => (
                            <Box key={sub.id || indexSub} className={s.subcategoryBox}>
                                <Link to={`/subcategory/${sub.id}`} className={s.linkReset} onClick={() => onClose()}>
                                    <Typography className={s.subcategoryTitle}>{sub.name}</Typography>
                                </Link>

                                <Box className={s.subcategoryChildren}>
                                    {sub.children?.length ? (
                                        sub.children
                                            .slice(0, expandedSubcategories[sub.name] ? sub.children.length : 6)
                                            .map((child: CatalogChild) => (
                                                <Link
                                                    key={child.id}
                                                    to={`/subcategory/${child.id}`}
                                                    onClick={() => onClose()}
                                                    className={s.linkReset}
                                                >
                                                    <Typography>{child.name}</Typography>
                                                </Link>
                                            ))
                                    ) : (
                                        <Typography className={s.noChildren}>{('no_elements')}</Typography>
                                    )}

                                    {sub.children && sub.children.length > 6 && (
                                        <Button
                                            onClick={() =>
                                                setExpandedSubcategories((prev) => ({
                                                    ...prev,
                                                    [sub.name]: !prev[sub.name],
                                                }))
                                            }
                                            endIcon={expandedSubcategories[sub.name] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                            className={s.moreButton}
                                        >
                                            {expandedSubcategories[sub.name] ? ('collapse') : ('more')}
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Typography className={s.noSubcategories}>{('no_subcategories')}</Typography>
                    )}
                </Box>
            </Box>
        </Drawer>
    );
};