import {motion, MotionProps} from "framer-motion";
import {Box} from "@mui/material";
import s from './ElementPage.module.css'


const imageAnimation = {
    initial: {scale: 0.8, opacity: 0},
    animate: {scale: 1, opacity: 1},
    transition: {duration: 0.8, type: "spring", stiffness: 150},
} as const;

export const fadeInUp: MotionProps = {
    initial: {y: -50, opacity: 0},
    animate: {y: 0, opacity: 1},
    transition: {duration: 0.8},
};

export const fadeInDelayed: MotionProps = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: {delay: 0.8, duration: 0.8},
};

export default function ElementPage() {
    return (
        <Box className={s.container}>
            <Box className={s.inner}>

                <motion.h1 className={s.title}{...fadeInUp}>
                    В РАЗРАБОТКЕ
                </motion.h1>

                <motion.img
                    className={s.image}
                    src="/my-online-store/img/developer.webp"
                    {...imageAnimation}
                />

                <motion.p {...fadeInDelayed}>
                    Страница ещё в разработке, возвращайтесь позже 🚧
                </motion.p>
            </Box>
        </Box>
    );
}




