import React from "react";
import s from "./FunPlaceholder.module.css"
import {useTranslation} from "react-i18next";



const spinnerCircles = Array(4).fill(null);

export const FunPlaceholder: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={s.container}>
            <div>
                <h1 className={s.title}>{t("promo")}</h1>
                <p className={s.text}>{t("fun_placeholder")}</p>
                <div className={s.spinner}>
                    {spinnerCircles.map((_, index) => (
                        <div key={index} className={s["spinner-circle"]}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

