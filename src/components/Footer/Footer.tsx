import React from "react";
import { Box, Container, Typography, Link, IconButton, Button, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";




const socialLinks = [
    { icon: InstagramIcon, url: "https://instagram.com" },
    { icon: FacebookIcon, url: "https://facebook.com" },
    { icon: YouTubeIcon, url: "https://youtube.com" },
    { icon: MusicNoteIcon, url: "https://tiktok.com" },
];

export const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: "#f5f7fa", py: 2, marginTop: 8 }}>
            <Container maxWidth="lg" >
                <Grid container spacing={13} >
                    {/* Колонка 1: EasyShop.md */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Typography gutterBottom sx={{ fontWeight: 'bold', color: "#434343", }}>
                            EasyShop
                        </Typography>
                        {["О нас", "Контакты", "Вакансии", "Поставщикам", "Политика конфиденциальности"].map((text) => (
                            <Link key={text} href="#" display="block" underline="hover" color="inherit" sx={{ mb: 0.5 }}>
                                {text}
                            </Link>
                        ))}
                    </Grid>

                    {/* Колонка 2: Покупателю */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Typography gutterBottom sx={{ fontWeight: 'bold', color: "#434343", }}>
                            Покупателю
                        </Typography>
                        {["Акции", "Доставка", "Оплата", "Бонусы"].map((text) => (
                            <Link key={text} href="#" display="block" underline="hover" color="inherit" sx={{ mb: 0.5 }}>
                                {text}
                            </Link>
                        ))}
                    </Grid>

                    {/* Колонка 3: Полезная информация */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Typography  gutterBottom sx={{ fontWeight: 'bold', color: "#434343", }}>
                            Полезная информация
                        </Typography>
                        {["Обмен и возврат товара", "Защита прав потребителей", "Публичная оферта"].map((text) => (
                            <Link key={text} href="#" display="block" underline="hover" color="inherit" sx={{ mb: 0.5 }}>
                                {text}
                            </Link>
                        ))}
                    </Grid>

                    {/* Колонка 4: Приложения + соцсети + оплата */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Typography gutterBottom sx={{ fontWeight: 'bold', color: "#434343", }}>
                            Загрузите наше приложение
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                            <Button
                                href="https://apps.apple.com"
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "#272727",
                                    transition: "0.3s",
                                    display: "flex",
                                    alignItems: "stretch", // иконка на всю высоту
                                    px: 1,   // горизонтальные отступы уменьшены
                                    py: 0.25, // вертикальные отступы уменьшены
                                    "&:hover": { color: "#ff4081", transform: "scale(1.05)" },
                                    minWidth: 'auto', // ширина зависит от содержимого
                                }}
                            >
                                {/* Иконка слева */}
                                <Box sx={{ display: "flex", alignItems: "stretch", mr: 0.5 }}>
                                    <AppleIcon sx={{ fontSize: '1.8rem' }} />
                                </Box>

                                {/* Текст справа, две строки */}
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Typography variant="caption" sx={{ fontSize: 8, lineHeight: 1 }}>
                                        Download at the
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 12, fontWeight: "bold", lineHeight: 1 }}>
                                        App Store
                                    </Typography>
                                </Box>
                            </Button>
                            <Button
                                href="https://play.google.com"
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "#272727",
                                    transition: "0.3s",
                                    display: "flex",
                                    alignItems: "stretch", // иконка на всю высоту
                                    px: 1,   // горизонтальные отступы
                                    py: 0.5, // вертикальные отступы
                                    "&:hover": { color: "#ff4081", transform: "scale(1.05)" },
                                    minWidth: 'auto', // ширина зависит от содержимого
                                }}
                            >
                                {/* Иконка слева */}
                                <Box sx={{ display: "flex", alignItems: "stretch", mr: 0.5 }}>
                                    <AndroidIcon sx={{ fontSize: '1.8rem' }} />
                                </Box>

                                {/* Текст справа, две строки */}
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Typography variant="caption" sx={{ fontSize: 8, lineHeight: 1 }}>
                                        Get it on
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 12, fontWeight: "bold", lineHeight: 1 }}>
                                        Google Play
                                    </Typography>
                                </Box>
                            </Button>
                        </Box>

                        <Typography gutterBottom sx={{ fontWeight: 'bold', color: "#434343", }}>
                            Мы в социальных сетях
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                            {socialLinks.map(({ icon: Icon, url }, idx) => (
                                <IconButton
                                    key={idx}
                                    component="a"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        pb: '5px',
                                        pl: 0,
                                        color: "#272727",
                                        transition: "0.3s",
                                        "&:hover": { color: "#ff4081", transform: "scale(1.2)" },
                                    }}
                                >
                                    <Icon sx={{ fontSize: 30 }} />
                                </IconButton>
                            ))}
                        </Box>


                        <Typography gutterBottom  sx={{ fontWeight: 'bold', color: "#434343", }}>
                            Принимаем к оплате
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <img src="/my-online-store/icons/visa.png" alt="visa_logo" height={20}  />
                                <img src="/my-online-store/icons/master.svg" alt="master_logo" height={20}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 6, color: "text.secondary" }}>
                    <Typography variant="body1">
                        © 2002–{new Date().getFullYear()} Интернет-магазин EasyShop | Превратит покупку в удовольствие
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
