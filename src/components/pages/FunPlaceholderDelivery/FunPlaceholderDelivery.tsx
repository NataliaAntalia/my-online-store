import React from "react";
import s from './FunPlaceholderDelivery.module.css'
import {useTranslation} from "react-i18next";

export const FunPlaceholderDelivery: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className={s.pageContainer}>
            <div>
                <h1 className={s.title}>{t("delivery")}</h1>
                <p className={s.subtitle}>
                    {t("delivery_placeholder")}
                </p>
                <div className={s.loader}/>
            </div>
        </div>
    );
};
