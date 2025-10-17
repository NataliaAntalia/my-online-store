import React from "react";
import {FunPlaceholderProps} from "../FunPlaceholder/FunPlaceholder";
import s from './FunPlaceholderBonuses.module.css'

export const FunPlaceholderBonuses: React.FC<FunPlaceholderProps> = ({title = "Бонусы"}) => {

    const dots = ['dot1', 'dot2', 'dot3'];

    return (
        <div className={s.pageContainer}>
            <div>
                <h1 className={s.title}>{title}</h1>
                <p className={s.subtitle}>
                    Бонусы скоро будут активны!
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
