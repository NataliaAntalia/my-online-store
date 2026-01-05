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
import {FOOTER_ROUTES} from "@/components/Footer/routes";
import {useTranslation} from "react-i18next";



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

export const FooterMobile: React.FC<FooterMobileProps> = ({ footerSections, buttons, socialLinks, images }) => {

    const {t} = useTranslation();
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
                                {t(section.title)}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails className={s.accordionDetails}>
                            <Box component="ul" className={s.boxListUl}>
                                {section.links.map((linkName, linkIndex) => {
                                    return (
                                        <Box component="li" key={linkIndex} className={s.boxListLi}>
                                            <Link to={FOOTER_ROUTES[linkName]}>
                                            <Typography variant="body2">{t(linkName)}</Typography>
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
                            <Typography className={s.typography}>{t('call')}</Typography>
                        </Box>
                    </a>
                </Box>

                <Box className={s.container}>
                    <Box>
                        <FooterAppButtons title={t("download_app")} buttons={buttons}/>
                        <FooterSocials title={t("socials")} links={socialLinks}/>
                    </Box>
                    <Box className={s.footerPayments}>
                        <FooterPayments title={t("accept_payment")} images={images} />
                    </Box>
                </Box>

                <Box className={s.boxCopyright}>
                    <Typography className={s.textCopyright}>
                        © 2002–{new Date().getFullYear()} {t("footer_copyright")}
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};