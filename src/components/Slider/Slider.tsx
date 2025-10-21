import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";
import {Box} from "@mui/material";
import s from './Slider.module.css'
import {sliderSettings} from "@/components/Slider/sliderSettings";
import {BANNERS_BASE_URL, TOTAL_SLIDES} from "@/components/Slider/constants";

export const MySlider = () => {
    const {i18n} = useTranslation();
    const [slides, setSlides] = useState<string[]>([]);

    const getSlideUrls = (language: string, total: number): string[] => {
        const baseUrl = BANNERS_BASE_URL;
        return Array.from({length: total}, (_, i) => {
            const number = String(i + 1).padStart(2, "0");
            return `${baseUrl}/${language}/slide_summer-sale_2025-${number}.webp`;
        });
    };

    useEffect(() => {
        setSlides(getSlideUrls(i18n.language, TOTAL_SLIDES));
    }, [i18n.language]);

    return (
        <Box className={s.sliderWrapper}>
            <Slider {...sliderSettings}>
                {slides.map((src, i) => (
                    <Box key={i}>
                        <img
                            src={src}
                            alt={`Slide ${i + 1}`}
                            className={s.slideImage}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
