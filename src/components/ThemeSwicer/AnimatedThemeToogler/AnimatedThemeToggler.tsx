"use client";
import { Moon, SunDim } from "lucide-react";
import { cn } from "@/lib/utils";
import {useRef, useState} from "react";
import {flushSync} from "react-dom";


type props = {
    className?: string;
};

declare global {
    interface Document {
        startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    }
}


export const AnimatedThemeToggler = ({ className }: props) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const changeTheme = async () => {
        if (!buttonRef.current) return;

        flushSync(() => {
            const dark = document.documentElement.classList.toggle("dark");
            setIsDarkMode(dark);
        });

        const { top, left, width, height } =
            buttonRef.current.getBoundingClientRect();
        const y = top + height / 2;
        const x = left + width / 2;

        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRad}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 700,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            },
        );
    };
    // @ts-ignore
    return (
        <button ref={buttonRef} onClick={changeTheme} className={cn(className)} style={{ outline: "none",
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",}}>
            {isDarkMode ? <SunDim /> : <Moon />}
        </button>
    );
};
