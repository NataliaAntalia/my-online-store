import Box from "@mui/material/Box";
import s from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogDrawer.module.css";
import {CatalogChild, CatalogSubcategory} from "@/types/catalog";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import {CatalogDrawerProps} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/types";


export const CatalogRightColumn: React.FC<CatalogDrawerProps> = (props) => {
    const {sections, activeSection, expandedSubcategories, setExpandedSubcategories, onClose} = props;

    const activeSectionData = sections[activeSection] || {};
    const INITIAL_VISIBLE_ITEMS = 4;

    return (
        <Box className={s.drawerRightColumn}>
            {activeSectionData?.subcategories?.length ? (
                activeSectionData.subcategories.map((sub: CatalogSubcategory, indexSub: number) => (
                    <Box key={sub.id || indexSub}>
                        <Link to={`/subcategory/${sub.id}`} className={s.linkReset}
                              onClick={onClose}>
                            <Typography
                                className={s.subcategoryTitle}>{sub.name}</Typography>
                        </Link>

                        <Box className={s.subcategoryChildren}>
                            {sub.children?.length ? (
                                sub.children
                                    .slice(0, expandedSubcategories[sub.name] ? sub.children.length : INITIAL_VISIBLE_ITEMS)
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
                                <Typography
                                    className={s.noChildren}>{'no_elements'}</Typography>
                            )}

                            {sub.children && sub.children.length > INITIAL_VISIBLE_ITEMS && (
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
                                        expandedSubcategories[sub.name] ?
                                            <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
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

    );
};

