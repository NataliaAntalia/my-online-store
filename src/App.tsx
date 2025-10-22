import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

import {AppRoutes} from "@/routes/AppRoutes";
import {Providers} from "@/Providers";

function App() {

    return (
        <Providers>
            <Header />
            <AppRoutes />
            <Footer />
        </Providers>
    );
}

export default App;

