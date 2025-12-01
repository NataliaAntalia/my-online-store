import React from 'react';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {AppRoutes} from "@/routes/AppRoutes";
import {Providers} from "@/Providers";
import Box from "@mui/material/Box";
import {Header} from "@/components/Header/Header";

function App() {

    return (
        <Providers>
            <Header />
            <Box className='globalContainer'>
            <AppRoutes />
            </Box>
            <Footer />
        </Providers>
    );
}

export default App;

