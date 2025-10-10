// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#EAEFF6FF',  // цвет AppBar
            contrastText: 'black',
        },
    },
});

export default theme;
