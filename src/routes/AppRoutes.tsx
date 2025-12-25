import { Routes, Route } from "react-router-dom";
import HomePage from "@/components/pages/HomePage/HomePage";
import { FunPlaceholder } from "@/components/pages/FunPlaceholder/FunPlaceholder";
import { FunPlaceholderDelivery } from "@/components/pages/FunPlaceholderDelivery/FunPlaceholderDelivery";
import { FunPlaceholderPayment } from "@/components/pages/FunPlaceholderPayment/FunPlaceholderPayment";
import { FunPlaceholderBonuses } from "@/components/pages/FunPlaceholderBonuses/FunPlaceholderBonuses";
import CategoryPage from "@/components/pages/CategoryPage/CategoryPage";
import SubcategoryPage from "@/components/pages/ElementPage/ElementPage";
import LoginPage from "@/components/pages/LoginPage/LoginPage";
import {CartPage} from "@/components/pages/CartPage/CartPage";
import {FavoritesPage} from "@/components/pages/FavoritesPage/FavoritesPage";
import {ComparisonPage} from "@/components/pages/ComparisonPage/ComparisonPage";
import {About} from "@/components/Footer/pages/About";
import {Contacts} from "@/components/Footer/pages/Contacts";
import {Careers} from "@/components/Footer/pages/Careers";
import {Suppliers} from "@/components/Footer/pages/Suppliers";
import {PrivacyPolicy} from "@/components/Footer/pages/PrivacyPolicy";
import {ReturnsAndExchanges} from "@/components/Footer/pages/ReturnsAndExchanges";
import {ConsumerProtection} from "@/components/Footer/pages/ConsumerProtection";
import {PublicOffer} from "@/components/Footer/pages/PublicOffer";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/delivery" element={<FunPlaceholderDelivery />} />
            <Route path="/payment" element={<FunPlaceholderPayment />} />
            <Route path="/bonuses" element={<FunPlaceholderBonuses />} />
            <Route path="/promotion" element={<FunPlaceholder title="Акции" />} />
            <Route path="/category/:categoryKey" element={<CategoryPage />} />
            <Route path="/subcategory/:subcategoryName" element={<SubcategoryPage />} />
            <Route path="/profile" element={<LoginPage />} />
            <Route path="*" element={<FunPlaceholder />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/exchange-and-return-of-goods" element={<ReturnsAndExchanges/>} />
            <Route path="/consumer-protection" element={<ConsumerProtection/>} />
            <Route path="/public-offer" element={<PublicOffer/>} />
        </Routes>
    );
}
