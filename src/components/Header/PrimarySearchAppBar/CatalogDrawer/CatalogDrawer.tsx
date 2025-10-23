import React from 'react';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
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
import s from './CatalogDrawer.module.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';



interface CatalogDrawerProps {
    open: boolean;
    onClose: () => void;
    sections: any[];
    activeSection: number;
    setActiveSection: (index: number) => void;
    expandedSubcategories: { [key: string]: boolean };
    setExpandedSubcategories: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    t: TFunction;
    anchorEl: HTMLElement | null;
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
                                                                anchorEl,
                                                            }) => {
    const activeSectionData = sections[activeSection] || {};

    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            transition
            modifiers={[
                { name: 'offset', options: { offset: [0, 8] } }, // немного отступа вниз
            ]}
        >
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={150}>
                    <Paper elevation={3}>
                        <ClickAwayListener onClickAway={onClose}>
                        <Box className={s.drawerContainer}>
                            <Box className={s.drawerLeftColumn}>
                                <List>
                                    {sections.map((section: any, index: number) => (
                                        <ListItem key={section.key || index} disablePadding>
                                            <ListItemButton
                                                component={Link}
                                                to={`/category/${section.key.split('.')[1]}`}
                                                onMouseEnter={() => setActiveSection(index)}
                                                onClick={onClose}
                                            >
                                                <ListItemText primary={`catalog.${section.key.split('.')[1]}`} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Box className={s.drawerRightColumn}>
                                {activeSectionData?.subcategories?.length ? (
                                    activeSectionData.subcategories.map((sub: CatalogSubcategory, indexSub: number) => (
                                        <Box key={sub.id || indexSub}>
                                            <Link to={`/subcategory/${sub.id}`} className={s.linkReset} onClick={onClose}>
                                                <Typography className={s.subcategoryTitle}>{sub.name}</Typography>
                                            </Link>

                                            <Box className={s.subcategoryChildren}>
                                                {sub.children?.length ? (
                                                    sub.children
                                                        .slice(0, expandedSubcategories[sub.name] ? sub.children.length : 4)
                                                        .map((child: CatalogChild) => (
                                                            <Link
                                                                key={child.id}
                                                                to={`/subcategory/${child.id}`}
                                                                onClick={onClose}
                                                                className={s.linkReset}
                                                            >
                                                                <Typography>{child.name}</Typography>
                                                            </Link>
                                                        ))
                                                ) : (
                                                    <Typography className={s.noChildren}>{'no_elements'}</Typography>
                                                )}

                                                {sub.children && sub.children.length > 4 && (
                                                    <Button
                                                        size="small"
                                                        disableElevation
                                                        onClick={() =>
                                                            setExpandedSubcategories((prev) => ({
                                                                ...prev,
                                                                [sub.name]: !prev[sub.name],
                                                            }))
                                                        }
                                                        endIcon={
                                                            expandedSubcategories[sub.name] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                                                        }
                                                        className={s.moreButton}
                                                    >
                                                        {expandedSubcategories[sub.name] ? 'collapse' : 'more'}
                                                    </Button>
                                                )}
                                            </Box>
                                        </Box>
                                    ))
                                ) : (
                                    <Typography className={s.noSubcategories}>{'no_subcategories'}</Typography>
                                )}
                            </Box>
                        </Box>
                        </ClickAwayListener>
                    </Paper>
                </Fade>
            )}
        </Popper>
    );
};
