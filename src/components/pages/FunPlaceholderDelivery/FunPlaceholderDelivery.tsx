import React from "react";
import {FunPlaceholderProps} from "../FunPlaceholder/FunPlaceholder";
import s from './FunPlaceholderDelivery.module.css'

export const FunPlaceholderDelivery: React.FC<FunPlaceholderProps> = ({title = "Доставка"}) => {
    return (
        <div className={s.pageContainer}>
            <div>
                <h1 className={s.title}>{title}</h1>
                <p className={s.subtitle}>
                    Страница доставки скоро будет доступна!
                </p>
                <div className={s.loader}/>
            </div>
        </div>
    );
};
