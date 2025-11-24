// import React from 'react';
// import Box from "@mui/material/Box";
// import type { i18n as I18nType } from "i18next";
// import s from '../LangSwitcher/LangSwitcher.module.css'
//
//
// type LangType={
//     code:string,
//     label:string,
// }
//
// interface LangSwitcherProps {
//     i18n: I18nType;
//     languages:LangType[]
//
// }
//
// export const LangSwitcher = ({i18n, languages}:LangSwitcherProps) => {
//
//     return (
//         <Box className={s.langSwitcher}>
//             {languages.map(({code, label}) => (
//                 <Box
//                     key={code}
//                     onClick={()=>i18n.changeLanguage(code)}
//                     className={`${s.langOption} ${i18n.language === code ? s.active : ''}`}>
//                     {label}
//                 </Box>
//             ))}
//         </Box>
//     );
// };


// Файл 1: LangSwitcher.tsx

import React from 'react';
import Box from "@mui/material/Box";
import type { i18n as I18nType } from "i18next";
import s from '../LangSwitcher/LangSwitcher.module.css'


type LangType={
    code:string,
    label:string,
}

interface LangSwitcherProps {
    i18n: I18nType;
    languages:LangType[]

}

export const LangSwitcher = ({i18n, languages}:LangSwitcherProps) => {

    const activeClass = i18n.language === languages[0].code
        ? s.langOneActive  // 'Py' (на скрине)
        : s.langTwoActive; // 'Ro' (на скрине)


    return (
        <Box className={`${s.langSwitcher} ${activeClass}`}>
            {languages.map(({code, label}, index) => (
                <Box
                    key={code}
                    onClick={()=>i18n.changeLanguage(code)}
                    className={s.langOption}
                >
                    {label}
                </Box>
            ))}
        </Box>
    );
};