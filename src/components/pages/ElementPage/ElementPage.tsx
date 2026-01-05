import {motion} from "framer-motion";
import {Box} from "@mui/material";
import s from './ElementPage.module.css'
import {useTranslation} from "react-i18next";


const imageAnimation = {
    initial: {scale: 0.8, opacity: 0},
    animate: {scale: 1, opacity: 1},
    transition: {duration: 0.8, type: "spring", stiffness: 150},
} as const;

export const fadeInUp = {
    initial: {y: -50, opacity: 0},
    animate: {y: 0, opacity: 1},
    transition: {duration: 0.8},
};

export const fadeInDelayed = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: {delay: 0.8, duration: 0.8},
};

export default function ElementPage() {

    const {t} = useTranslation();
    return (
        <Box className={s.container}>
            <Box className={s.inner}>

                <motion.h1 className={s.title}{...fadeInUp}>
                    {t("in_development")}
                </motion.h1>
                <motion.img
                    className={s.image}
                    src="/my-online-store/img/developer.webp"
                    {...imageAnimation}
                />
                <motion.p {...fadeInDelayed} className={s.text}>
                    {t("placeholder_text")}
                </motion.p>
            </Box>
        </Box>
    );
}




