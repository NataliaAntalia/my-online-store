import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../../img/logo.png';
import {useTranslation} from "react-i18next";
import {Link as RouterLink} from 'react-router-dom';
import {AnimatedThemeTogglerDemo} from "@/components/ThemeSwicer/AnimatedThemeTogglerDemo/AnimatedThemeTogglerDemo";





function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const {t, i18n} = useTranslation();

    const mainNumber = '022 815-819';
    const otherNumbers = ['079 815-819', '060 815-819']; // номера кроме основного


    const pages = [
        { path: "delivery", label: t("delivery") },
        { path: "payment", label: t("payment") },
        { path: "bonuses", label: t("bonuses") },
        { path: "promotion", label: t("promotion") },
    ];



    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Логотип */}
                    <RouterLink to="/" style={{ display: 'flex' }}>
                    <Box
                        component="img"
                        src={Logo}
                        alt="Logo"
                        sx={{display: {xs: 'flex', md: 'flex'}, mr: 1, width: 250, height: 60, paddingRight: 15}}
                    />
                    </RouterLink>

                    {/* Навигация для десктопа */}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <RouterLink
                                key={page.path}
                                to={`/${page.path}`}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    display: 'block',
                                    fontSize: '1.1rem',
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                }}
                            >
                                {page.label}
                            </RouterLink>
                        ))}
                    </Box>

                    <Box
                        sx={{flexGrow: 0, paddingRight: 1, position: 'relative'}}
                        onMouseEnter={(e) => setAnchorElUser(e.currentTarget)}
                        onMouseLeave={handleCloseUserMenu}
                    >


                        {/* Кнопка с главным номером */}
                        <Button
                            sx={{
                                color: 'black',
                                textTransform: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                width: 180,
                                zIndex: 2,
                                pl: 0,
                            }}
                            endIcon={
                                <ArrowDropDownIcon
                                    sx={{
                                        transition: '0.2s',
                                        transform: Boolean(anchorElUser) ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }}
                                />
                            }
                        >
                            <CallIcon
                                sx={{
                                    mr: 1,
                                    transition: 'opacity 0.3s',
                                    opacity: Boolean(anchorElUser) ? 0 : 1,
                                }}
                            />
                            {mainNumber}
                        </Button>

                        {/* Полотно меню с плавным появлением */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 180,
                                bgcolor: 'white',
                                border: '1px solid #ccc',
                                borderRadius: 1,
                                boxShadow: 3,
                                display: Boolean(anchorElUser) ? 'flex' : 'none',
                                flexDirection: 'column',
                                zIndex: 1,
                                pt: '40px',
                                opacity: Boolean(anchorElUser) ? 1 : 0,
                                transform: Boolean(anchorElUser) ? 'translateY(0)' : 'translateY(-10px)',
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            {/* дополнительные номера с плавным появлением */}
                            {otherNumbers.map((number, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        cursor: 'pointer',
                                        borderBottom: index === otherNumbers.length - 1 ? 'none' : '1px solid #eee',
                                        color: 'black',
                                        opacity: 0,
                                        transform: 'translateY(-10px)',
                                        animation: `fadeIn 0.3s ${index * 0.05}s forwards`,
                                        '&:hover': {bgcolor: 'grey.100'},
                                        pl: '28px',
                                    }}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography>{number}</Typography>
                                </Box>
                            ))}

                            {/* Горизонтальная линия с отступами слева и справа */}
                            <Box
                                sx={{
                                    borderTop: '1px solid #ccc',
                                    width: 'calc(100% - 30px)', // 28px слева и 28px справа
                                    ml: '15px',
                                    mr: '15px',
                                    mt: 0.5,
                                    mb: 0.5,
                                }}
                            />

                            {/* график работы */}
                            <Box
                                sx={{
                                    p: 1,
                                    opacity: 0,
                                    transform: 'translateY(-10px)',
                                    animation: 'fadeIn 0.3s 0.1s forwards',
                                    pl: '28px',
                                }}
                            >
                                <Typography variant="body2" color="text.secondary">
                                    Пн–Пт: 9:00–18:00<br/>
                                    Сб–Вс: выходной
                                </Typography>
                            </Box>

                            {/* Анимация keyframes */}
                            <style>
                                {`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
                            </style>
                        </Box>
                    </Box>


                    <AnimatedThemeTogglerDemo/>
                    <Box
                        sx={{
                            display: 'flex',
                            width: 60,
                            height: 26,
                            borderRadius: '16px',
                            overflow: 'hidden',
                            bgcolor: 'grey.200',
                            position: 'relative',
                            cursor: 'pointer',


                        }}
                    >
                        {/* Левая половина */}
                        <Box
                            onClick={() => i18n.changeLanguage('ru')}
                            sx={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                px: 0.5,
                                py: 0.5,
                                bgcolor: i18n.language === 'ru' ? '#fd3579' : 'transparent',
                                color: i18n.language === 'ru' ? 'white' : 'grey.600',
                                fontWeight: 'bold',
                                transition: 'background-color 0.2s',
                                fontSize: '1rem',


                            }}
                        >
                            RU
                        </Box>

                        {/* Правая половина */}
                        <Box
                            onClick={() => i18n.changeLanguage('ro')}
                            sx={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                px: 0.5,
                                py: 0.5,
                                bgcolor: i18n.language === 'ro' ? '#fd3579' : 'transparent',
                                color: i18n.language === 'ro' ? 'white' : 'grey.600',
                                fontWeight: 'bold',
                                transition: 'background-color 0.2s',
                                fontSize: '1rem',


                            }}
                        >
                            RO
                        </Box>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
