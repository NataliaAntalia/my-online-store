"use client";
import {Moon, SunDim} from "lucide-react";
import {cn} from "@/lib/utils";
import {useEffect, useRef, useState} from "react";
import {flushSync} from "react-dom";
import s from './AnimatedThemeToggler.module.css'
import {runThemeTransition} from "@/components/ThemeSwicer/AnimatedThemeToogler/themeTransition";
import {toggleTheme} from "@/components/ThemeSwicer/AnimatedThemeToogler/toggleTheme";


type props = {
    className?: string;
};

declare global {
    interface Document {
        startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    }
}


export const AnimatedThemeToggler = ({className}: props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const changeTheme = () => {
        if (!buttonRef.current) return;

        flushSync(() => {
            const dark = toggleTheme();
            setIsDarkMode(dark);
            localStorage.setItem("theme", dark ? "dark" : "light");
        });

        runThemeTransition(buttonRef.current);
    };

    return (
        <button
            ref={buttonRef}
            onClick={changeTheme}
            className={cn(s.themeToggleButton, className)}
        >
            {isDarkMode ? <SunDim/> : <Moon/>}
        </button>
    );
};
