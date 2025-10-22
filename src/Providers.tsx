import {ReactNode} from "react";
import {CartProvider} from "@/components/Shop/CartContext/CartContext";
import {I18nextProvider} from "react-i18next";
import i18n from "@/i18n";
import {HashRouter} from "react-router-dom";

export function Providers({children}: { children: ReactNode }) {
    return (
        <CartProvider>
            <I18nextProvider i18n={i18n}>
                <HashRouter>{children}</HashRouter>
            </I18nextProvider>
        </CartProvider>
    );
}
