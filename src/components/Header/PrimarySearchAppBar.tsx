import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';
import { ReactComponent as UserIcon } from "../../img/user.svg";
import { ReactComponent as Balance } from "../../img/compare.svg";
import { ReactComponent as Like } from "../../img/like.svg";
import { ReactComponent as Shop } from "../../img/shop.svg";
import { useCart } from "../Shop/CartContext";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {Link} from "react-router-dom";




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',  // белый фон
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888888', // цвет иконки поиска
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: { width: '20ch' },
    },
}));

// Каталог с подкаталогами
export const catalogSections = [
    {
        key: "catalog.electronics",
        subcategories: [
            {
                name: "Телефоны и связь",
                image: "/img/zagluska.jpg",
                children: [
                    "Мобильные телефоны",
                    "Радио телефоны",
                    "Проводные телефоны",
                    "Спикерфоны",
                    "GPS-навигаторы",
                    "Bluetooth-гарнитуры",
                ],
            },
            {
                name: "Компьютеры",
                image: "/img/zagluska.jpg",
                children: [
                    "Планшеты",
                    "Ноутбуки",
                    "Системные блоки",
                    "Моноблоки",
                    "Мониторы",
                    "Кронштейны для мониторов",
                ],
            },
            {
                name: "Телевизоры и проекторы",
                image: "/img/zagluska.jpg",
                children: [
                    "Телевизоры",
                    "Проекторы",
                    "Экраны для проекторов",
                    "Крепления для проекторов",
                    "Столики для проекторов",
                    "Пульты ДУ",
                ],
            },
            {
                name: "Фото-Видео техника",
                image: "/img/zagluska.jpg",
                children: [
                    "Зеркальные фотоаппараты",
                    "Системные фотоаппараты",
                    "Компактные фотоаппараты",
                    "Фотоаппараты моментальной печати",
                    "Видеокамеры",
                    "Объективы",
                ],
            },
            {
                name: "Оргтехника",
                image: "/img/zagluska.jpg",
                children: [
                    "Принтеры",
                    "МФУ",
                    "Плоттеры",
                    "Сканеры",
                    "3D-Принтеры",
                    "Компактные фотопринтеры",
                ],
            },
            {
                name: "Аудио-Видео техника",
                image: "/img/zagluska.jpg",
                children: [
                    "Акустические системы",
                    "Усилители",
                    "Наушники",
                    "Микрофоны",
                    "Саундбары",
                    "Проигрыватели пластинок",
                ],
            },
            {
                name: "Гаджеты",
                image: "/img/zagluska.jpg",
                children: [
                    "Умные часы",
                    "Фитнес браслеты",
                    "Детские умные часы",
                    "Ремешки для часов",
                    "Электронные книги",
                    "Внешние аккумуляторы",
                ],
            },
            {
                name: "Аксессуары для электроники",
                image: "/img/zagluska.jpg",
                children: [
                    "Наборы для чистки",
                    "Сжатый воздух для очистки",
                    "Спреи для чистки",
                    "Чистящие салфетки",
                    "Батарейки и аккумуляторы",
                ],
            },
        ],
    },
    // остальные разделы без изменений
    {
        key: "catalog.appliances",
        subcategories: [
            {
                name: "Крупная бытовая техника",
                image: "/img/zagluska.jpg",
                children: [
                    "Холодильники",
                    "Морозильники",
                    "Морозильные лари",
                    "Холодильные витрины",
                    "Винные шкафы",
                    "Стиральные машины",
                ],
            },
            {
                name: "Климатическая техника",
                image: "/img/zagluska.jpg",
                children: [
                    "Кондиционеры",
                    "Тепловые насосы",
                    "Бойлеры",
                    "Конвекторы электрические",
                    "Масляные обогреватели",
                    "Потолочные вентиляторы",
                ],
            },
            {
                name: "Встраиваемая техника",
                image: "/img/zagluska.jpg",
                children: [
                    "Газовые панели",
                    "Комбинированные панели",
                    "Электрические панели",
                    "Индукционные панели",
                    "Электрические духовки",
                    "Газовые духовки",
                ],
            },
            {
                name: "Мелкобытовая техника",
                image: "/img/zagluska.jpg",
                children: [
                    "Кухонные комбайны",
                    "Электрочайники",
                    "Блендеры",
                    "Тостеры",
                    "Миксеры",
                    "Мясорубки",
                ],
            },
            {
                name: "Красота и уход",
                image: "/img/zagluska.jpg",
                children: [
                    "Приборы для укладки",
                    "Зубные электрощетки",
                    "Машинки для стрижки",
                    "Насадки для зубных щёток",
                    "Ирригаторы",
                    "Триммеры для носа и ушей",
                ],
            },
            {
                name: "Техника для дома",
                image: "/img/zagluska.jpg",
                children: [
                    "Пылесосы",
                    "Пароочистители",
                    "Утюги",
                    "Утюги с парогенератором",
                    "Отпариватели",
                    "Гладильные системы",
                ],
            },
            {
                name: "Аксессуары для бытовой техники",
                image: "/img/zagluska.jpg",
                children: [
                    "Аксессуары для стеклоочистителей",
                    "Аксессуары для пароочистителей",
                    "Аксессуары для электробритв",
                    "Аксессуары для фенов",
                    "Аксессуары к машинкам для стрижки",
                    "Аксессуары для пылесосов",
                ],
            },
        ],
    },

    {
        key: "catalog.pet_supplies",
        subcategories: [
            {
                name: "Фермерское хозяйство",
                image: "/img/zagluska.jpg",
                children: [
                    "Инкубаторы",
                    "Кормоизмельчители",
                    "Доильные аппараты",
                    "Лущилки для кукурузы",
                    "Кормушки для кроликов",
                    "Кормушки для поросят",
                ],
            },
            {
                name: "Товары для собак",
                image: "/img/zagluska.jpg",
                children: [
                    "Сухие корма для собак",
                    "Влажные корма для собак",
                    "Лакомства для собак",
                    "Миски для собак",
                    "Игрушки для собак",
                    "Одежда для собак",
                ],
            },
            {
                name: "Товары для кошек",
                image: "/img/zagluska.jpg",
                children: [
                    "Игрушки для кошек",
                    "Когтеточки для кошек",
                    "Сухие корма для кошек",
                    "Влажные корма для кошек",
                    "Лакомства для кошек",
                    "Миски для кошек",
                ],
            },
            {
                name: "Товары для птиц",
                image: "/img/zagluska.jpg",
                children: [
                    "Клетки для птиц",
                    "Кормушки для птиц",
                    "Аксессуары для птиц",
                    "Игрушки для птиц",
                    "Корма для птиц",
                    "Поилки для птиц",
                ],
            },
            {
                name: "Товары для рыб и рептилий",
                image: "/img/zagluska.jpg",
                children: [
                    "Аквариумы и террариумы",
                    "Декор для аквариумов и террариумов",
                    "Аксессуары для аквариумов и террариумов",
                    "Корма для рыб",
                    "Препараты для аквариума",
                    "Грунты для аквариумов",
                ],
            },
            {
                name: "Товары для грызунов",
                image: "/img/zagluska.jpg",
                children: [
                    "Клетки для грызунов",
                    "Игрушки для грызунов",
                    "Лотки для грызунов",
                    "Лежаки для грызунов",
                    "Домики для грызунов",
                    "Поилки для грызунов",
                ],
            },
            {
                name: "Двери для животных",
                image: "/img/zagluska.jpg",
                children: [
                    "Лежаки для собак и кошек",
                    "Амуниция для собак и кошек",
                    "Намордники",
                    "Ошейники",
                    "Шлейки",
                    "Поводки",
                    "Брелоки и Адресники",
                    "GPS трекеры для собак",
                ],
            },
            {
                name: "Транспортировка животных",
                image: "/img/zagluska.jpg",
                children: [
                    "Переноски для собак и кошек",
                    "Клетки для перевозки собак",
                    "Аксессуары для транспортировки животных",
                    "Коляски для животных",
                ],
            },
            {
                name: "Груминг и Гигиена",
                image: "/img/zagluska.jpg",
                children: [
                    "Пеленки и подгузники для собак и кошек",
                    "Щетки для собак и кошек",
                    "Шампуни и Кондиционеры",
                    "Салфетки для животных",
                    "Ножницы и когтерезы",
                    "Средства для приучения к туалету",
                ],
            },
            {
                name: "Ветаптека",
                image: "/img/zagluska.jpg",
                children: [
                    "Витамины для животных",
                    "Защитные воротнии для животных",
                    "Нейтрализаторы запаха",
                    "Лекарства для животных",
                    "Защита от блох и клещей",
                    "Гигиенические пояса для собак",
                ],
            },
        ],
    },

    {
        key: "catalog.sports",
        subcategories: [
            {
                name: "Кардиотренажеры",
                image: "/img/zagluska.jpg",
                children: [
                    "Беговые дорожки",
                    "Велотренажеры",
                    "Эллиптические тренажеры",
                    "Гребные тренажеры",
                    "Степперы",
                    "Аксессуары к тренажерам",
                ],
            },
            {
                name: "Силовые тренировки",
                image: "/img/zagluska.jpg",
                children: [
                    "Шведские стенки",
                    "Гантели",
                    "Гири",
                    "Диски для штанг и гантелей",
                    "Грифы для штанг и гантелей",
                    "Замки для штанг и гантелей",
                    "Уличные спортивные тренажеры",
                ],
            },
            {
                name: "Фитнес",
                image: "/img/zagluska.jpg",
                children: [
                    "Тренировочные маски",
                    "Пульсометры",
                    "Секундомеры",
                    "Йога и пилатес",
                    "Степ платформы",
                    "Фитболы",
                ],
            },
            {
                name: "Игровые виды спорта",
                image: "/img/zagluska.jpg",
                children: [
                    "Футбол",
                    "Баскетбол",
                    "Волейбол",
                    "Гандбол",
                    "Водное поло",
                    "Регби и американский футбол",
                ],
            },
            {
                name: "Боевые искусства",
                image: "/img/zagluska.jpg",
                children: [
                    "Защитная экипировка",
                    "Перчатки для рукопашного боя",
                    "Снаряды для боевых искусств",
                    "Спортивные маты",
                    "Аксессуары для боевых искусств",
                    "Кимоно",
                ],
            },
            {
                name: "Зимний спорт",
                image: "/img/zagluska.jpg",
                children: [
                    "Лыжи",
                    "Лыжные очки",
                    "Чехлы для горных лыж и сноубордов",
                    "Перчатки, варежки",
                    "Балаклавы и маски",
                    "Лавинные зонды",
                ],
            },
            {
                name: "Спортивное питание",
                image: "/img/zagluska.jpg",
                children: [
                    "Велнес",
                    "Предтренировочные комплексы",
                    "Силовой спорт",
                    "Циклический спорт",
                    "Смеси для выпечки и десертов",
                    "Батончики",
                ],
            },
            {
                name: "Обувь для спорта",
                image: "/img/zagluska.jpg",
                children: [
                    "Футбольные бутсы",
                    "Борцовки",
                    "Боксёрки",
                    "Ортопедические изделия",
                    "Эластичные бинты",
                    "Кинезиологические ленты",
                    "Фиксаторы запястья",
                    "Фиксаторы локтевого сустава",
                    "Фиксаторы плечевого сустава",
                    "Фиксаторы коленного сустава",
                ],
            },
            {
                name: "Конный спорт",
                image: "/img/zagluska.jpg",
                children: [
                    "Амуниция",
                    "Обувь для верховой езды",
                    "Одежда для верховой езды",
                    "Шлемы для верховой езды",
                    "Перчатки для верховой езды",
                    "Краги для верховой езды",
                ],
            },
        ],
    },

    {
        key: "catalog.outdoor",
        subcategories: [
            {
                name: "Дорожные сумки и чемоданы",
                image: "/img/zagluska.jpg",
                children: [
                    "Спортивные и дорожные сумки",
                    "Чемоданы",
                    "Аксессуары для чемоданов",
                    "Рюкзаки",
                ],
            },
            {
                name: "Кемпинг",
                image: "/img/zagluska.jpg",
                children: [
                    "Палатки",
                    "Туристическая мебель",
                    "Спальные мешки",
                    "Спортивные рюкзаки",
                    "Портативные души",
                    "Палки для скандинавской ходьбы и трекинга",
                ],
            },
            {
                name: "Транспорт",
                image: "/img/zagluska.jpg",
                children: [
                    "Велосипеды",
                    "Электровелосипеды",
                    "Электросамокаты",
                    "Электроскутеры",
                    "Роликовые коньки",
                    "Скейтборды",
                ],
            },
            {
                name: "Бассейны и аксессуары",
                image: "/img/zagluska.jpg",
                children: [
                    "Бассейны",
                    "Тенты для бассейнов",
                    "Подстилки для бассейнов",
                    "Химия для бассейна",
                    "Лестницы для бассейнов",
                    "Хлоргенераторы для бассейнов",
                ],
            },
            {
                name: "Плавание, дайвинг, снорклинг",
                image: "/img/zagluska.jpg",
                children: [
                    "Матрасы для плавания",
                    "Маски и трубки для ныряния",
                    "Круги для плавания",
                    "Перчатки для дайвинга",
                    "Надувные мячи",
                    "Очки для плавания",
                ],
            },
            {
                name: "Товары для пикника",
                image: "/img/zagluska.jpg",
                children: [
                    "Коптильни",
                    "Мангалы и грили",
                    "Тандыры",
                    "Афганские казаны",
                    "Шампуры",
                    "Решётки для гриля",
                ],
            },
        ],
    },

    {
        key: "catalog.hobbies",
        subcategories: [
            {
                name: "Музыкальные инструменты",
                image: "/img/zagluska.jpg",
                children: [
                    "Струнные инструменты",
                    "Клавишные инструменты",
                    "Ударные инструменты",
                    "Смычковые инструменты",
                    "Духовые инструменты",
                    "Оборудование для музыкальных студий",
                ],
            },
            {
                name: "Рисование",
                image: "/img/zagluska.jpg",
                children: [
                    "3D-ручки и aксессуары",
                    "Бумага для рисования",
                    "Картины по номерам",
                    "Алмазные картины по номерам",
                    "Кисти для рисования",
                    "Художественные краски",
                ],
            },
            {
                name: "Лепка",
                image: "/img/zagluska.jpg",
                children: [
                    "Кинетический песок",
                    "Пластилин",
                ],
            },
            {
                name: "Рукоделие",
                image: "/img/zagluska.jpg",
                children: [
                    "Цветная бумага",
                    "Крепированная бумага",
                    "Картон",
                ],
            },
        ],
    },

];

export default function PrimarySearchAppBar() {

    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchResults, setSearchResults] = React.useState<any[]>([]);

    React.useEffect(() => {
        if (!searchQuery) {
            setSearchResults([]);
            return;
        }

        const query = searchQuery.toLowerCase();

        const results = catalogSections
            .map(section => ({
                ...section,
                subcategories: section.subcategories
                    .map(sub => ({
                        ...sub,
                        children: sub.children.filter(child => child.toLowerCase().includes(query))
                    }))
                    .filter(sub => sub.children.length > 0 || sub.name.toLowerCase().includes(query))
            }))
            .filter(section => section.subcategories.length > 0 || section.key.toLowerCase().includes(query));

        setSearchResults(results);
    }, [searchQuery]);



    const { t } = useTranslation();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const { cart, removeFromCart, favorites, toggleFavorite, comparison, toggleComparison } = useCart();
    const [openCart, setOpenCart] = React.useState(false);
    const [openFavorites, setOpenFavorites] = React.useState(false);
    const [openCompresion, setOpenCompresion] = React.useState(false);

    const [openCatalog, setOpenCatalog] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState(0);

    const [expandedSubcategories, setExpandedSubcategories] = React.useState<{[key: string]: boolean}>({});

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
        </Menu>
    );

    const sectionsToShow = searchQuery ? searchResults : catalogSections;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#EAEFF6FF", color: "black",boxShadow: "none" }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Левая часть: меню + название */}
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open catalog"
                            onClick={() => setOpenCatalog(true)}
                            sx={{ mr: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, cursor: "pointer" }}
                            onClick={() => setOpenCatalog(true)}
                        >
                            {t("catalog.title")}
                        </Typography>
                    </Box>

                    {/* Поиск — растягивается */}
                    <Box sx={{ flexGrow: 1, mx: '30px' }}>
                        <Search sx={{ width: '100%' }}>
                            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                            <StyledInputBase
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('search')}
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ width: '100%' }}
                            />
                        </Search>
                    </Box>

                    {/* Правая часть: иконки остаются справа */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Tooltip title={t('profile_login')}>
                            <IconButton
                                component={Link}
                                to="/profile"
                                size="large"
                            >
                                <UserIcon width={24} height={24} />
                            </IconButton>
                        </Tooltip>


                        <Tooltip title={t('comparison')}>
                            <IconButton
                                size="large"
                                onClick={() => setOpenCompresion(true)}
                            >
                                <Balance width={24} height={24} />
                            </IconButton>
                        </Tooltip>



                        <Tooltip title={t('favorites')}>
                            <IconButton size="large" onClick={() => setOpenFavorites(true)}>
                                <Badge badgeContent={favorites.length}  sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: '#fd3579', // твой цвет
                                        color: 'white'               // цвет текста внутри цифры
                                    }
                                }}>
                                    <Like width={24} height={24} />
                                </Badge>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title={t('cart')}>
                            <IconButton size="large" onClick={() => setOpenCart(true)}>
                                <Badge badgeContent={cart.length} sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: '#fd3579', // твой цвет
                                        color: 'white'               // цвет текста внутри цифры
                                    }
                                }}>
                                    <Shop width={24} height={24} />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>

            </AppBar>
            {renderMobileMenu}
            {/*{renderMenu}*/}

            <Drawer anchor="left" open={openCatalog} onClose={() => setOpenCatalog(false)}>
                <Box sx={{ width: 1400, height: 622, display: 'flex' }}>
                    {/* Левая колонка — категории с поиском */}
                    <Box sx={{ minWidth: 150, wordBreak: 'break-word', borderRight: '1px solid #ccc' }}>
                        <List>
                            {sectionsToShow.map((section: any, index:number) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        to={`/category/${section.key.split(".")[1]}`}
                                        onMouseEnter={() => setActiveSection(index)}
                                        onClick={() => setOpenCatalog(false)}
                                    >
                                        <ListItemText primary={t(`catalog.${section.key.split(".")[1]}`)} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Правая колонка — подкатегории + подподкатегории */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 2,
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                            gap: 2,
                        }}
                    >
                        {sectionsToShow[activeSection]?.subcategories.map((sub: any, indexSub: number) => (
                            <Box key={indexSub} sx={{ whiteSpace: 'normal', wordBreak: 'break-word', minWidth: 150 }}>
                                <Link
                                    to={`/subcategory/${sub.name}`} // <-- путь к странице подкатегории
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    onClick={() => setOpenCatalog(false)}
                                >
                                <Typography sx={{ fontWeight: "bold", mb: 1 }}>
                                    {sub.name}
                                </Typography>
                                </Link>
                                <Box sx={{ pl: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                    {sub.children
                                        .slice(0, expandedSubcategories[sub.name] ? sub.children.length : 6)
                                        .map((child: string, childIndex: number) => (
                                            <Link
                                                key={childIndex}
                                                to={`/subcategory/${child}`} // <-- путь к странице подкатегории
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                                onClick={() => setOpenCatalog(false)}
                                            >
                                                <Typography sx={{ fontSize: 14, "&:hover": { textDecoration: 'underline' } }}>
                                                    {child}
                                                </Typography>
                                            </Link>
                                        ))}
                                    {sub.children.length > 6 && (
                                        <Button
                                            onClick={() =>
                                                setExpandedSubcategories(prev => ({ ...prev, [sub.name]: !prev[sub.name] }))
                                            }
                                            endIcon={expandedSubcategories[sub.name] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                            sx={{
                                                justifyContent: "flex-start",
                                                p: 0,
                                                minWidth: 0,
                                                textTransform: "none",
                                                fontSize: 14
                                            }}
                                        >
                                            {expandedSubcategories[sub.name] ? "Свернуть" : "Ещё"}
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box> {/* <-- Закрываем Box внешнего контейнера */}
            </Drawer>

            {/* Drawer корзины */}
            <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
                <Box sx={{ width: 350, p: 2 }}>
                    <Typography variant="h6">{t('cart')}</Typography>
                    {cart.length === 0 ? (
                        <Typography>{t('cart_empty')}</Typography>
                    ) : (
                        cart.map((item, index) => (
                            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                <Typography>{item.name} — {item.price} {t('currency')}</Typography>
                                <Button onClick={() => removeFromCart(item.id)}>{t('delete')}</Button>
                            </Box>
                        ))
                    )}
                </Box>
            </Drawer>

            {/* Drawer избранного */}
            <Drawer anchor="right" open={openFavorites} onClose={() => setOpenFavorites(false)}>
                <Box sx={{ width: 350, p: 2 }}>
                    <Typography variant="h6">{t('favorites')}</Typography>
                    {favorites.length === 0 ? (
                        <Typography>{t('favorites_empty')}</Typography>
                    ) : (
                        favorites.map((item, index) => (
                            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                <Typography>{item.name} — {item.price} {t('currency')}</Typography>
                                <Button onClick={() => toggleFavorite(item)}>{t('delete')}</Button>
                            </Box>
                        ))
                    )}
                </Box>
            </Drawer>

            {/* Drawer сравнения */}
            <Drawer anchor="right" open={openCompresion} onClose={() => setOpenCompresion(false)}>
                <Box sx={{ width: 350, p: 2 }}>
                    <Typography variant="h6">{t('comparison')}</Typography>
                    {comparison.length === 0 ? (
                        <Typography>{t('comparison_empty')}</Typography>
                    ) : (
                        comparison.map((item, index) => (
                            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                <Typography>{item.name} — {item.price} {t('currency')}</Typography>
                                <Button onClick={() => toggleComparison(item)}>{t('delete')}</Button>
                            </Box>
                        ))
                    )}
                </Box>
            </Drawer>
        </Box>
    );
}