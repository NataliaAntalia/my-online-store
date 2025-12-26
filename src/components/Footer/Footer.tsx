import React from "react";
import {Box, Container, Typography, Grid, useTheme, useMediaQuery} from "@mui/material";
import s from '../Footer/Footer.module.css'
import {FooterColumn} from "@/components/Footer/FooterColumn/FooterColumn";
import {FooterAppButtons} from "@/components/Footer/FooterAppButtons/FooterAppButtons";
import {FooterSocials} from "@/components/Footer/FooterSocials/FooterSocials";
import {FooterPayments} from "@/components/Footer/FooterPayments/FooterPayments";
import {buttons, footerSections, images, socialLinks} from "@/components/Footer/constants";
import {FooterMobile} from "@/components/Footer/FooterMobile/FooterMobile";
import {useTranslation} from "react-i18next";


export const Footer: React.FC = () => {

const {t}= useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(778));
if (isMobile) {
    return <FooterMobile
            footerSections={footerSections}
            buttons={buttons}
            socialLinks={socialLinks}
            images={images}
        />;

}
    return (
        <Box className='headerWrapper'>
            <Box className='globalContainer' sx={{marginTop: '50px'}}>
        <Box component="footer" className={s.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={11}>
                    {footerSections.map(section => (
                        <FooterColumn title={section.title} links={section.links}/>
                    ))}

                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <FooterAppButtons title={t("download_app")} buttons={buttons}/>
                        <FooterSocials  title={t("socials")} links={socialLinks}/>
                        <FooterPayments title={t("accept_payment")} images={images}/>
                    </Grid>
                </Grid>

                <Box className={s.footerCopyright}>
                    <Typography className={s.title}>
                        © 2002–{new Date().getFullYear()} {t("footer_copyright")}
                    </Typography>
                </Box>
            </Container>
        </Box>
            </Box>
        </Box>
    );
};
