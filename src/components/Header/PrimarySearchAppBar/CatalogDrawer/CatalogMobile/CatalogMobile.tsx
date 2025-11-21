import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import {CatalogDrawerProps} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/types";
import {getMobileNavItems} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogMobile/catalogUtils";
import {CatalogSubMenu} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogMobile/CatalogSubMenu";
import s from '../CatalogDrawer.module.css'
import {FooterAppButtons} from "@/components/Footer/FooterAppButtons/FooterAppButtons";
import {buttons} from "@/components/Footer/constants";


export const CatalogMobile: React.FC<CatalogDrawerProps> = (props) => {

    const {
        open, onClose, sections, navPages, mainNumber, logoPath,
        languages, cartData
    } = props;

    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const mobileNavItems = getMobileNavItems(navPages, cartData, mainNumber);


    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            className={s.mobilePaper}
        >
            <Box className={s.containerMobile}>
                <Box className={s.logoContainer}>
                    <img src={logoPath} alt="Logo" className={s.logo}/>
                    <Box className={s.languagesList}>
                        {languages.map(lang => (
                            <Typography
                                key={lang.code}
                                component="span"
                                className={`${s.languageItem} ${lang.code === 'current_language_code' ? s.activeLanguage : ''}`}>
                                {lang.label}
                            </Typography>
                        ))}
                    </Box>
                </Box>
                <IconButton onClick={onClose} size="large">
                    <CloseIcon/>
                </IconButton>
            </Box>
            <Divider/>
            <List>
                {mobileNavItems.filter(Boolean).map((item, index) => {
                    if (!item) return null;

                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                component={item.isCatalog ? 'div' : Link}
                                to={item.link}
                                onClick={() => {
                                    if (item.isCatalog) {
                                        setIsCatalogOpen(true);
                                    } else {
                                        onClose();
                                    }
                                }}
                            >
                                {item.icon && <item.icon/>}
                                <ListItemText primary={item.text}/>

                                {item.count !== null && item.count > 0 && <span>{item.count}</span>}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <FooterAppButtons title={'Загрузите наше приложение'} buttons={buttons}/>
            <CatalogSubMenu
                setIsCatalogOpen={setIsCatalogOpen}
                isCatalogOpen={isCatalogOpen}
                onClose={onClose}
                sections={sections}/>
        </Drawer>
    );

};

