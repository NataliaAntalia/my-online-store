import React, {useState} from 'react';
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
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as Balance } from '../../../../img/compare.svg';
import { ReactComponent as Cart } from '../../../../img/shop.svg';
import { ReactComponent as Favorites } from '../../../../img/like.svg';
import { ReactComponent as Payment } from '../../../../img/credit-card.svg';
import { ReactComponent as Delivery } from '../../../../img/credit-card.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    isMobile: boolean;
    navPages: Array<{ path: string; labelKey: string }>;
    mainNumber: string;
    logoPath: string;
    languages: Array<{ code: string; label: string }>;
    cartData: {
        favorites: any[];
        comparison: any[];
        cart: any[];
    };
}

export const CatalogDrawer: React.FC<CatalogDrawerProps> = ({
                                                                open, onClose, sections, activeSection, setActiveSection,
                                                                expandedSubcategories, setExpandedSubcategories, t, anchorEl,
                                                                isMobile, navPages, mainNumber, logoPath, languages, cartData
                                                            }) => {
    const activeSectionData = sections[activeSection] || {};
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const getPage = (key: string) => navPages.find(p => p.labelKey === key);

    if (!isMobile) {
        return (
            <Popper
                open={open}
                anchorEl={anchorEl}
                placement="bottom-start"
                transition
                modifiers={[
                    { name: 'offset', options: { offset: [0, 8] } },
                ]}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={150}>
                        <Paper elevation={3}  sx={{
                            backgroundColor: 'var(--drawer-bg)',
                            color: 'var(--drawer-text)',
                        }}>
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
    }

    // ----------------------------------------------------------------------------------
    // ✅ РЕЖИМ: МОБИЛЬНЫЙ (Drawer - собираем список навигации, как на скриншоте PandaShop)
    // ----------------------------------------------------------------------------------

    const promotionItem = getPage('promotion');
    const bonusesItem = getPage('bonuses');
    const paymentItem = getPage('payment');
    const deliveryItem = getPage('delivery');

    const mobileNavItems = [
        { text: ('Вход | Регистрация'), link: '/profile', icon: PersonIcon, count: null, isAuth: true },
        { text: ('Каталог'), link: '#', icon: MenuIcon, isCatalog: true, count: null },


        promotionItem && { text: ('Акции'), link: `/${promotionItem.path}`, icon: null, count: null, isCatalog: false },

        bonusesItem && { text: ('Бонусы'), link: `/${bonusesItem.path}`, icon: null, count: null, isCatalog: false },

        { text: ('Корзина'), link: '/cart', icon: Cart, count: cartData.cart.length, isCatalog: false },

        { text: ('Избранное'), link: '/favorites', icon: Favorites, count: cartData.favorites.length, isCatalog: false },

        { text: ('Сравнение'), link: '/comparison', icon: Balance, count: cartData.comparison.length, isCatalog: false },

        paymentItem && { text: ('Оплата'), link: `/${paymentItem.path}`, icon: Payment, count: null, isCatalog: false },

        deliveryItem && { text: ('Доставка'), link: `/${deliveryItem.path}`, icon: Delivery, count: null, isCatalog: false },

        { text: ('мун. Кишинэу'), link: '/location', icon: LocationOnIcon, count: null, isCatalog: false },

        { text: ('Позвонить'), link: `tel:${mainNumber}`, icon: PhoneIcon, count: null, isCatalog: false },
    ].filter(Boolean);




    // ⬅️ ИСПРАВЛЕНИЕ: Возвращаем Drawer в мобильном режиме
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{ sx: { width: 280, maxWidth: '80vw' } }}
        >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* ЛОГОТИП И ЯЗЫК */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logoPath} alt="Logo" style={{ height: 30, marginRight: 16 }} />
                    <Box sx={{ display: 'flex' }}>
                        {languages.map(lang => (
                            <Typography
                                key={lang.code}
                                component="span"
                                sx={{
                                    fontWeight: lang.code === ('current_language_code') ? 'bold' : 'normal',
                                    mr: 1
                                }}>
                                {lang.label}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                <IconButton onClick={onClose} size="large">
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider />

            {/* ОСНОВНОЙ СПИСОК (Скриншот PandaShop) */}
            <List>
                {mobileNavItems.filter(Boolean).map((item, index) => {
                    if (!item) return null;

                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                // Теперь TypeScript видит, что item не undefined
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
                                {item.icon && <item.icon sx={{ mr: 2 }} />}
                                <ListItemText primary={item.text} />

                                {item.count !== null && item.count > 0 && <span>{item.count}</span>}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            {/* ------------------------------------------------------------------
                Вложенный Drawer для категорий (Скриншот с розовым логотипом)
                ------------------------------------------------------------------ */}
            <Drawer
                anchor="left"
                open={isCatalogOpen}
                onClose={() => setIsCatalogOpen(false)}
                PaperProps={{ sx: { width: 280, maxWidth: '80vw' } }}
            >
                {/* Заголовок и кнопка назад/закрыть */}
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton onClick={() => setIsCatalogOpen(false)} size="large">
                        <MenuIcon sx={{ transform: 'scaleX(-1)' }} />
                    </IconButton>
                    <Typography variant="h6">{('catalog.title')}</Typography>
                </Box>
                <Divider />

                {/* Рендеринг всех категорий */}
                <List>
                    {sections.map((section: any, index: number) => (
                        <ListItem key={section.key || index} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={`/category/${section.key.split('.')[1]}`}
                                onClick={() => { setIsCatalogOpen(false); onClose(); }}
                            >
                                <ListItemText primary={`catalog.${section.key.split('.')[1]}`} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </Drawer>
    );
};