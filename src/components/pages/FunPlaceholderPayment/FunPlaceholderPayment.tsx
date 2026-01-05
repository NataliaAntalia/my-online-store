import React from "react";
import s from './FunPlaceholderPayment.module.css'
import {useTranslation} from "react-i18next";

export const FunPlaceholderPayment: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className={s.pageContainer}>
            <div>
                <h1 className={s.title}>{t("payment")}</h1>
                <p className={s.subtitle}>
                    {t("payment_placeholder")}
                </p>
                <div className={s.bounceBox}/>
            </div>
        </div>
    );
};
