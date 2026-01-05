import React from "react";
import s from './FunPlaceholderBonuses.module.css'
import {useTranslation} from "react-i18next";

export const FunPlaceholderBonuses: React.FC = () => {

    const dots = ['dot1', 'dot2', 'dot3'];
    const {t} = useTranslation();
    return (
        <div className={s.pageContainer}>
            <div>
                <h1 className={s.title}>{t('bonuses')}</h1>
                <p className={s.subtitle}>
                    {t("bonuses_placeholder")}
                </p>
                <div className={s.dotsContainer}>
                    {dots.map((dotClass, index) => (
                        <div key={index} className={`${s.dot} ${s[dotClass]}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

