import React from 'react';
import {Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container, SvgIconTypeMap} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FooterAppButtons } from "@/components/Footer/FooterAppButtons/FooterAppButtons";
import { FooterSocials } from "@/components/Footer/FooterSocials/FooterSocials";
import { FooterPayments } from "@/components/Footer/FooterPayments/FooterPayments";
import {OverridableComponent} from "@mui/material/OverridableComponent";


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
        <Box component="footer" sx={{ backgroundColor: '#f5f5f5', padding: '20px 0'}}>
            <Container maxWidth="xs" sx={{ padding: '0 16px' }}>

                {footerSections.map((section, index) => (
                    <Accordion key={index} disableGutters sx={{ boxShadow: 'none', borderTop: '1px solid #e0e0e0', '&:last-child': { borderBottom: '1px solid #e0e0e0' } }}>

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{ padding: 0 }}
                        >
                            <Typography variant="subtitle1" fontWeight="bold">
                                {section.title}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ padding: '8px 0 16px 0' }}>
                            <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
                                {section.links.map((linkName, linkIndex) => {
                                    const linkHref = generateSlug(linkName);

                                    return (
                                        <Box component="li" key={linkIndex} sx={{ marginBottom: '8px' }}>
                                            <a href={linkHref} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <Typography variant="body2">{linkName}</Typography>
                                            </a>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}


                <Box sx={{ margin: '20px 0' }}>
                    <a href="tel:ВАШ_НОМЕР" style={{ textDecoration: 'none' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '12px',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                backgroundColor: 'white'
                            }}
                        >
                            <span role="img" aria-label="phone" style={{ marginRight: '8px' }}>📞</span>
                            <Typography fontWeight="bold">Позвонить</Typography>
                        </Box>
                    </a>
                </Box>


                <FooterAppButtons title={"Загрузите наше приложение"} buttons={buttons} />
                <FooterSocials title={"Мы в социальных сетях"} links={socialLinks}  />
                <FooterPayments title={"Принимаем к оплате"} images={images} />


                {/* 4. Копирайт */}
                <Box sx={{ borderTop: '1px solid #e0e0e0', paddingTop: '10px' }}>
                    <Typography sx={{ fontSize: '12px', color: 'text.secondary', textAlign: 'center' }}>
                        © 2002–{new Date().getFullYear()} Интернет-магазин EasyShop | Превратит покупку в удовольствие
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};