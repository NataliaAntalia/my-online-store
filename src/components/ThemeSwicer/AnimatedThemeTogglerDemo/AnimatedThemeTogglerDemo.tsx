import {AnimatedThemeToggler} from "@/components/ThemeSwicer/AnimatedThemeToogler/AnimatedThemeToggler";
import {Box} from "@mui/material";
import s from './AnimatedThemeTogglerDemo.module.css'

export function AnimatedThemeTogglerDemo() {
    return (
        <Box className={s.box}>
            <AnimatedThemeToggler/>
        </Box>
    );
}
