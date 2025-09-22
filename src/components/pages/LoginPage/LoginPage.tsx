import { useState } from "react";
import { Box, TextField, Button, Typography, Divider, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const isButtonDisabled = email.trim() === "" || password.trim() === "";


    return (
        <Box
            sx={{
                width: 535,
                mx: "auto",
                mt: 10,
                p: 4,
            }}
        >
            <Typography variant="h5"  textAlign="left" sx={{fontWeight: "bold"}}>
                Вход
            </Typography>

            <TextField
                label="Ваш E-mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: 46,
                        padding: 0,
                        '& .MuiOutlinedInput-input': {
                            padding: '12px 14px',
                            boxSizing: 'border-box',
                            color: '#555', // текст всегда серый
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fb3578', // розовый бордер при фокусе
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#555',           // лейбл серый
                        '&.Mui-focused': {
                            color: '#555',         // лейбл серый при фокусе
                        },
                    },
                }}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                type={showPassword ? "text" : "password"}
                label="Пароль"
                variant="outlined"
                fullWidth
                value={password}
                margin="normal"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: 46,
                        paddingRight: 0, // убираем лишний отступ справа
                        '& .MuiOutlinedInput-input': {
                            padding: '12px 14px',
                            color: '#555',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fb3578',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#555',
                        '&.Mui-focused': {
                            color: '#555',
                        },
                    },
                }}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ mr: 0.5 }}>
                            <IconButton
                                onClick={() => setShowPassword((prev) => !prev)}
                                edge="end"
                                size="small" // глазок станет компактнее
                            >
                                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />



            <Box sx={{ display: "flex", flexDirection:"column", alignItems:"flex-end", mb: 2 }}>
                <Button variant="text" size="small"  sx={{
                    color: "gray",
                    fontSize: 12,
                    textTransform: "none",
                    backgroundColor: "transparent", // убираем фон
                    boxShadow: "none",              // убираем тень
                    '&:hover': {
                        backgroundColor: "transparent", // фон не меняется
                        color: "#fb3578",                  // цвет текста при наведении
                    },
                }}>
                    Забыли пароль?
                </Button>
                <Button variant="text" size="small"  sx={{
                    color: "gray",
                    fontSize: 12,
                    textTransform: "none",
                    backgroundColor: "transparent", // убираем фон
                    boxShadow: "none",              // убираем тень
                    '&:hover': {
                        backgroundColor: "transparent", // фон не меняется
                        color: "#fb3578",                  // цвет текста при наведении
                    },
                }}>
                    Регистрация
                </Button>
            </Box>

            <Button disabled={isButtonDisabled}  variant="contained" fullWidth sx={{ mb: 2, height: 45 }}>
                Войти
            </Button>

            <Divider sx={{ mb: 2 }}>Вход через соц. сети</Divider>

            <Box sx={{display:"block", gap:"4px" }}>
                <Button variant="contained" color="primary" sx={{backgroundColor: "#3b5898", width: 175, height: 60, minWidth: 0, padding: 1, mr: 0.5 }}>
                    <img
                        src="/icons/facebook.svg"
                        alt="facebook-icon"
                        style={{ width: '24px', height: '24px' }}
                    />
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#4184f2", width: 175, height: 60, minWidth: 0, padding: 1, mr: 0.5 }}>
                    <img
                        src="/icons/google.svg"
                        alt="google-icon"
                        style={{ width: '24px', height: '24px' }}
                    />
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#5a78a5", width: 175, height: 60, minWidth: 0, padding: 1}}>
                    <img
                        src="/icons/vk.svg"
                        alt="vk-icon"
                        style={{ width: '24px', height: '24px' }}
                    />
                </Button>
            </Box>
        </Box>
    );
}
