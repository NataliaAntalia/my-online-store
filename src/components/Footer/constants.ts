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


export const customerLinks = ["promo", "delivery", "payment", "bonuses"]
export const infoLinks = ["exchange", "consumer_protection", "public_offer"  ]
export const aboutLinks = ["about", "contacts", "jobs", "suppliers", "privacy_policy"]


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

