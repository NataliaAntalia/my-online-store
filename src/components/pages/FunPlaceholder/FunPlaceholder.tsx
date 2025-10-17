import React from "react";
import s from "./FunPlaceholder.module.css"

export interface FunPlaceholderProps {
    title?: string;
}



export const FunPlaceholder: React.FC<FunPlaceholderProps> = ({ title = "Страница в разработке" }) => {
    return (
        <div className={s.container}>
            <div>
                <h1 className={s.title}>{title}</h1>
                <p className={s.text}>Мы работаем над этой страницей. Она скоро оживёт!</p>
                <div className={s.spinner}>
                    <div className={s["spinner-circle"]}></div>
                    <div className={s["spinner-circle"]}></div>
                    <div className={s["spinner-circle"]}></div>
                    <div className={s["spinner-circle"]}></div>
                </div>
            </div>
        </div>
    );
};

