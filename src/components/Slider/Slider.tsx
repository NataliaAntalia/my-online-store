import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const MySlider = () => {
    const { i18n } = useTranslation();
    const [slides, setSlides] = useState<string[]>([]);

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const totalSlides = 16;

    useEffect(() => {
        const newSlides = Array.from({ length: totalSlides }, (_, i) => {
            const number = String(i + 1).padStart(2, "0");
            return `/img/slides/${i18n.language}/slide_summer-sale_2025-${number}.webp`;
        });
        setSlides(newSlides);
    }, [i18n.language]);

    return (
        <div style={{ marginTop: "30px" }}>
            <Slider {...settings}>
                {slides.map((src, i) => (
                    <div key={i}>
                        <img src={src} alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default MySlider;
