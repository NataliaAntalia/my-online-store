import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

export const socialLinks = [
    {icon: InstagramIcon, url: "https://instagram.com"},
    {icon: FacebookIcon, url: "https://facebook.com"},
    {icon: YouTubeIcon, url: "https://youtube.com"},
    {icon: MusicNoteIcon, url: "https://tiktok.com"},
];


export const customerLinks = ["Акции", "Доставка", "Оплата", "Бонусы"]
export const infoLinks = ["Обмен и возврат товара", "Защита прав потребителей", "Публичная оферта"]
export const aboutLinks = ["О нас", "Контакты", "Вакансии", "Поставщикам", "Политика конфиденциальности"]


export const buttons = [
    {icon: AppleIcon, link: "https://apps.apple.com", subText: "Download at the", mainText: "App Store"},
    {icon: AndroidIcon, link: "https://play.google.com", subText: "Get it on", mainText: "Google Play"}
]

export const images = [
    {link: "/my-online-store/icons/visa.png", alt: "visa_logo"},
    {link: "/my-online-store/icons/master.svg", alt: "master_logo"},
]

export const footerSections = [
    {title: "EasyShop", links: aboutLinks},
    {title: "Покупателю", links: customerLinks},
    {title: "Полезная информация", links: infoLinks},
];