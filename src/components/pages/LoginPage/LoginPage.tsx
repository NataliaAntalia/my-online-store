import {useState} from "react";
import {Box, Typography} from "@mui/material";
import s from './LoginPage.module.css'
import {EmailField} from "@/components/pages/LoginPage/EmailField/EmailField";
import {PasswordField} from "@/components/pages/LoginPage/PasswordField/PasswordField";
import {AuthButtons} from "@/components/pages/LoginPage/AuthButtons/AuthButtons";
import {SocialButtons} from "@/components/pages/LoginPage/SocialButtons/SocialButtons";
import {useTranslation} from "react-i18next";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const isButtonDisabled = email.trim() === "" || password.trim() === "";
    const {t} = useTranslation();

    return (
        <Box className={s.formContainer}>
            <Typography variant="h5" className={s.formTitle}>
                {t("entrance")}
            </Typography>
            <EmailField value={email} onChange={setEmail}/>
            <PasswordField
                password={password}
                onChange={setPassword}
                showPassword={showPassword}
                onClick={setShowPassword}/>
            <AuthButtons disabled={isButtonDisabled}/>
            <SocialButtons/>
        </Box>

    );
}
