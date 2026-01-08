import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import {ReactComponent as AndroidIcon} from "../../img/android-icon.svg";
import {ReactComponent as AppleIcon} from "../../img/apple.svg";

export const socialLinks = [
    {icon: InstagramIcon, url: "https://instagram.com", hoverColor: "#E1306C"},
    {icon: FacebookIcon, url: "https://facebook.com",hoverColor: "#1877F2"},
    {icon: YouTubeIcon, url: "https://youtube.com", hoverColor: "#FF0000"},
    {icon: MusicNoteIcon, url: "https://tiktok.com", hoverColor: "#FE2C55"},
];


export const customerLinks = [
    { labelKey: "promo", path: "/promo" },
    { labelKey: "delivery", path: "/delivery" },
    { labelKey: "payment", path: "/payment" },
    { labelKey: "bonuses", path: "/bonuses" },
];

export const infoLinks = [
    { labelKey: "exchange", path: "/exchange" },
    { labelKey: "consumer_protection", path: "/consumer-protection" },
    { labelKey: "public_offer", path: "/public-offer" },
];

export const aboutLinks = [
    { labelKey: "about", path: "/about" },
    { labelKey: "contacts", path: "/contacts" },
    { labelKey: "jobs", path: "/jobs" },
    { labelKey: "suppliers", path: "/suppliers" },
    { labelKey: "privacy_policy", path: "/privacy-policy" },
];



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
    {title: "buyer", links: customerLinks},
    {title: "useful_information", links: infoLinks},
];

