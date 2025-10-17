import React from "react";
import {FunPlaceholderProps} from "../FunPlaceholder/FunPlaceholder";
import s from './FunPlaceholderPayment.module.css'

export const FunPlaceholderPayment: React.FC<FunPlaceholderProps> = ({title = "Оплата"}) => {
    return (
        <div className={s.pageContainer}>
            <div>
                <h1 className={s.title}>{title}</h1>
                <p className={s.subtitle}>
                    Оплата будет доступна совсем скоро!
                </p>
                <div className={s.bounceBox}/>
            </div>
        </div>
    );
};
