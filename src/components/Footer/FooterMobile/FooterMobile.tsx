import React from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    SvgIconTypeMap,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FooterAppButtons } from "@/components/Footer/FooterAppButtons/FooterAppButtons";
import { FooterSocials } from "@/components/Footer/FooterSocials/FooterSocials";
import { FooterPayments } from "@/components/Footer/FooterPayments/FooterPayments";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {ReactComponent as PhoneIcon} from 'img/phone.svg';
import Button from "@mui/material/Button";
import s from './FooterMobile.module.css'
import { Link } from 'react-router-dom';



export interface SimpleLinkSection {
    title: string;
    links: string[];
}

export interface SocialLink {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    url: string;
    hoverColor: string;
}

export interface AppButton {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    link: string;
    subText: string;
    mainText: string;
}

export interface PaymentImage {
    link: string;
    alt: string;
}

export interface FooterMobileProps {
    footerSections: SimpleLinkSection[];
    buttons: AppButton[];
    socialLinks: SocialLink[];
    images: PaymentImage[];
}


const generateSlug = (text: string): string => {
    return `/${text.toLowerCase().replace(/[^a-zа-яё0-9]+/g, '-').replace(/^-|-$/g, '')}`;
};

export const FooterMobile: React.FC<FooterMobileProps> = ({ footerSections, buttons, socialLinks, images }) => {
    return (
        <Box className={s.container}>
            <Container >
                {footerSections.map((section, index) => (
                    <Accordion key={index} disableGutters className={s.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'var(--icon-color)' }}/>}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            className={s.accordionSummary}
                        >
                            <Typography variant="subtitle1" fontWeight="bold" className={s.title}>
                                {section.title}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails className={s.accordionDetails}>
                            <Box component="ul" className={s.boxListUl}>
                                {section.links.map((linkName, linkIndex) => {
                                    const footerLinkMap: Record<string, string> = {
                                        'Акции': '/promotion',
                                        'Доставка': '/delivery',
                                        'Оплата': '/payment',
                                        'Бонусы': '/bonuses',
                                        'О нас': '/about',
                                        'Контакты': '/contacts',
                                        'Вакансии': '/careers',
                                        'Поставщикам': '/suppliers',
                                        'Политика конфиденциальности': '/privacy-policy',
                                        'Обмен и возврат товара':'/exchange-and-return-of-goods',
                                        'Защита прав потребителей': '/consumer-protection',
                                        'Публичная оферта':'/public-offer'


                                    };

                                    return (
                                        <Box component="li" key={linkIndex} className={s.boxListLi}>
                                            <Link to={footerLinkMap[linkName]}>
                                            <Typography variant="body2">{linkName}</Typography>
                                            </Link>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}


                <Box className={s.containerButton}>
                    <a href="tel:000000000" style={{ textDecoration: 'none' }}>
                        <Box className={s.boxButton}>
                            <Button><PhoneIcon/></Button>
                            <Typography className={s.typography}>Позвонить</Typography>
                        </Box>
                    </a>
                </Box>

                <Box className={s.container}>
                    <Box>
                        <FooterAppButtons title={"Загрузите наше приложение"} buttons={buttons} />
                        <FooterSocials title={"Мы в социальных сетях"} links={socialLinks}  />
                    </Box>
                    <Box className={s.footerPayments}>
                        <FooterPayments title={"Принимаем к оплате"} images={images} />
                    </Box>
                </Box>

                <Box className={s.boxCopyright}>
                    <Typography className={s.textCopyright}>
                        © 2002–{new Date().getFullYear()} Интернет-магазин EasyShop | Превратит покупку в удовольствие
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};