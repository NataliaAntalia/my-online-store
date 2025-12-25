import {AnimatedThemeToggler} from "@/components/ThemeSwicer/AnimatedThemeToogler/AnimatedThemeToggler";
import {Box} from "@mui/material";
import s from '../AnimatedThemeToogler/AnimatedThemeToggler.module.css'

export function AnimatedThemeTogglerDemo() {
    return (
        <Box className={s.boxDemo}>
            <AnimatedThemeToggler/>
        </Box>
    );
}
