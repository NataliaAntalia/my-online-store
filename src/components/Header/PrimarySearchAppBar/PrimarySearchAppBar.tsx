import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {useTranslation} from 'react-i18next';
import {useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/store';
import {fetchCatalog} from '@/store/catalogSlice';
import s from './PrimarySearchAppBar.module.css';
import {CatalogDrawer} from '@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogDrawer';
import {HeaderIcons} from "@/components/Header/PrimarySearchAppBar/HeaderIcons/HeaderIcons";
import {SearchBar} from "@/components/Header/SearchBar/SearchBar";
import {MobileMenu} from "@/components/Header/PrimarySearchAppBar/MobileMenu/MobileMenu";
import {DrawersRenderer} from "@/components/Header/PrimarySearchAppBar/DrawersRenderer/DrawersRenderer";
import {useCart} from "@/hooks/useCart";


export default function PrimarySearchAppBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const catalogSections = useSelector((state: RootState) => state.catalog.sections);
    const catalogStatus = useSelector((state: RootState) => state.catalog.status);
    const drawers = useSelector((state: RootState) => state.drawers.drawers);
    const {t} = useTranslation();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const {cart, removeFromCart, favorites, toggleFavorite, comparison, toggleComparison} = useCart();
    const [openCatalog, setOpenCatalog] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const [expandedSubcategories, setExpandedSubcategories] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        if (catalogStatus === 'idle') {
            dispatch(fetchCatalog());
        }
    }, [catalogStatus, dispatch]);

    const sectionsToShow = catalogSections;
    const burgerRef = useRef<HTMLButtonElement | null>(null);



    const drawerDataMap = useMemo(() => ({
        cart: {items: cart, onDelete: (item: any) => removeFromCart(item.id)},
        favorites: {items: favorites, onDelete: toggleFavorite},
        comparison: {items: comparison, onDelete: toggleComparison},
    }), [cart, favorites, comparison, removeFromCart, toggleFavorite, toggleComparison]);


    return (
        <Box className={s.appBarWrapper}>
            <AppBar position="static" className={s.customAppBar}>
                <Toolbar className={s.flexCenter}>
                    <Box className={s.flexCenter}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open catalog"
                            onClick={() => setOpenCatalog(true)}
                            ref={burgerRef}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            className={s.catalogTitle}
                            onClick={() => setOpenCatalog(true)}
                        >
                            {t('catalog.title')}
                        </Typography>
                    </Box>
                    <SearchBar
                        onChange={setSearchQuery}
                        value={searchQuery}
                        placeholder={'Search'}
                        inputProps={{'aria-label': 'search'}}/>
                    <HeaderIcons
                        comparisonCount={comparison.length}
                        favoritesCount={favorites.length}
                        cartCount={cart.length}
                        dispatch={dispatch}/>
                </Toolbar>
            </AppBar>
            <DrawersRenderer drawerDataMap={drawerDataMap} drawers={drawers} />
            <MobileMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                onClose={() => setMobileMoreAnchorEl(null)}
            />
            <CatalogDrawer
                t={t}
                open={openCatalog}
                setExpandedSubcategories={setExpandedSubcategories}
                sections={sectionsToShow}
                setActiveSection={setActiveSection}
                onClose={() => setOpenCatalog(false)}
                expandedSubcategories={expandedSubcategories}
                activeSection={activeSection}
                anchorEl={burgerRef.current}
            />
        </Box>
    );
}