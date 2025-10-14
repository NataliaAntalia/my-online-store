import React from 'react';
import {Box, Typography} from "@mui/material";
import stile from "@/components/Footer/Footer.module.css";
import s from "./FooterPayments.module.css";


type ImgType = {
    link: string,
    alt: string,

}

type FooterPaymentsType = {
    title: string,
    images: ImgType[]
}

export const FooterPayments = ({title, images}: FooterPaymentsType) => {
    return (
        <Box>
            <Typography gutterBottom className={stile.footerTitle}>
                {title}
            </Typography>
            <Box className={s.footerPayments}>
                <Box className={s.footerPaymentIcons}>
                    {images.map((img: ImgType, i: number) => (
                        <img
                            key={i}
                            alt={img.alt}
                            src={img.link}
                            className={s.footerPaymentIcon}/>
                    ))}

                </Box>
            </Box>
        </Box>
    );
};

