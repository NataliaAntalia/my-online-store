import React from "react";
import {Box, Container, Typography, Grid, useTheme, useMediaQuery} from "@mui/material";
import s from '../Footer/Footer.module.css'
import {FooterColumn} from "@/components/Footer/FooterColumn/FooterColumn";
import {FooterAppButtons} from "@/components/Footer/FooterAppButtons/FooterAppButtons";
import {FooterSocials} from "@/components/Footer/FooterSocials/FooterSocials";
import {FooterPayments} from "@/components/Footer/FooterPayments/FooterPayments";
import {buttons, footerSections, images, socialLinks} from "@/components/Footer/constants";
import {FooterMobile} from "@/components/Footer/FooterMobile/FooterMobile";


export const Footer: React.FC = () => {


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
                        <FooterAppButtons title={"Загрузите наше приложение"} buttons={buttons}/>
                        <FooterSocials  title={"Мы в социальных сетях"} links={socialLinks}/>
                        <FooterPayments title={"Принимаем к оплате"} images={images}/>
                    </Grid>
                </Grid>

                <Box className={s.footerCopyright}>
                    <Typography className={s.title}>
                        © 2002–{new Date().getFullYear()} Интернет-магазин EasyShop | Превратит покупку в удовольствие
                    </Typography>
                </Box>
            </Container>
        </Box>
            </Box>
        </Box>
    );
};
