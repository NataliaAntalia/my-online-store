import React, {useState} from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
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
import {LangSwitcher} from "@/components/Header/ResponsiveAppBar/LangSwitcher/LangSwitcher";
import i18n from "i18next";
import logoPath from '../../../../../img/logo.png'
import {Divider} from "@mui/material";
import {AnimatedThemeTogglerDemo} from "@/components/ThemeSwicer/AnimatedThemeTogglerDemo/AnimatedThemeTogglerDemo";


export const CatalogMobile: React.FC<CatalogDrawerProps> = (props) => {

    const {
        open, onClose, sections, navPages, mainNumber,
        languages, cartData
    } = props;

    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const mobileNavItems = getMobileNavItems(navPages, cartData, mainNumber);


    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={open}
                onClose={onClose}
                PaperProps={{
                    className: s.mobilePaper,
                }}
                BackdropProps={{
                    sx: {
                        backgroundColor: 'rgb(126,126,126)',

                    }
                }}
            >
                <Box className={s.containerMobile}>
                    <Box className={s.logoContainer}>
                        <img src={logoPath} alt="Logo" className={s.logo}/>
                        <Box className={s.container}>
                            <AnimatedThemeTogglerDemo/>
                            <LangSwitcher languages={languages} i18n={i18n}/>
                        </Box>
                    </Box>
                </Box>


                <List className={s.list}>
                    {mobileNavItems.filter(Boolean).map((item, index) => {
                        if (!item) return null;
                        const shouldAddDivider = index === 1 || index === 5 || index === 9;
                        return (
                            <React.Fragment key={index}>
                                <ListItem
                                    key={index}
                                    disablePadding
                                    className={index === 0 ? s.authItem : ''}
                                >
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
                                        className={s.listItemButton}
                                    >
                                        <Box className={s.leftIcon}>
                                            {item.icons ? <item.icons.left /> : item.icon && <item.icon />}
                                        </Box>

                                        {/* текст */}
                                        <ListItemText primary={item.text} className={s.text} />

                                        {item.icons && (
                                            <Box className={s.rightIcon}>
                                                <item.icons.right />
                                            </Box>
                                        )}

                                        {item.count !== null && item.count > 0 && (
                                            <Box className={s.boxCounter}>
                                            <span className={s.count}>{item.count}</span>
                                            </Box>
                                        )}
                                    </ListItemButton>

                                </ListItem>
                                {shouldAddDivider && (
                                    <Divider sx={{margin: '8px 0'}}/>
                                )}
                            </React.Fragment>
                        );
                    })}
                </List>
                <Box className={s.boxButtons}>
                    <FooterAppButtons title={'Загрузите наше приложение'} buttons={buttons}/>
                    <CatalogSubMenu
                        setIsCatalogOpen={setIsCatalogOpen}
                        isCatalogOpen={isCatalogOpen}
                        onClose={onClose}
                        sections={sections}/>
                </Box>
            </Drawer>

            {open && (
                <IconButton
                    onClick={onClose}
                    size="large"
                    className={s.closeIconBox}
                >
                    <CloseIcon className={s.closeIcon}/>
                </IconButton>
            )}
        </React.Fragment>
    );

};