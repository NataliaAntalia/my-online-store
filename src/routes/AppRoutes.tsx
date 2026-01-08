import {Routes, Route} from "react-router-dom";
import HomePage from "@/components/pages/HomePage/HomePage";
import {FunPlaceholder} from "@/components/pages/FunPlaceholder/FunPlaceholder";
import {FunPlaceholderDelivery} from "@/components/pages/FunPlaceholderDelivery/FunPlaceholderDelivery";
import {FunPlaceholderPayment} from "@/components/pages/FunPlaceholderPayment/FunPlaceholderPayment";
import {FunPlaceholderBonuses} from "@/components/pages/FunPlaceholderBonuses/FunPlaceholderBonuses";
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
import {ROUTES} from "@/routes/routePaths";

export function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage/>}/>
            <Route path={ROUTES.DELIVERY} element={<FunPlaceholderDelivery/>}/>
            <Route path={ROUTES.PAYMENT} element={<FunPlaceholderPayment/>}/>
            <Route path={ROUTES.BONUSES} element={<FunPlaceholderBonuses/>}/>
            <Route path={ROUTES.PROMOTION} element={<FunPlaceholder/>}/>
            <Route path={ROUTES.CATEGORY} element={<CategoryPage/>}/>
            <Route path={ROUTES.SUBCATEGORY} element={<SubcategoryPage/>}/>
            <Route path={ROUTES.PROFILE} element={<LoginPage/>}/>
            <Route path={ROUTES.NOT_FOUND} element={<FunPlaceholder/>}/>
            <Route path={ROUTES.CART} element={<CartPage/>}/>
            <Route path={ROUTES.FAVORITES} element={<FavoritesPage/>}/>
            <Route path={ROUTES.COMPARISON} element={<ComparisonPage/>}/>
            <Route path={ROUTES.ABOUT} element={<About/>}/>
            <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
            <Route path={ROUTES.CAREERS} element={<Careers/>}/>
            <Route path={ROUTES.SUPPLIERS} element={<Suppliers/>}/>
            <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy/>}/>
            <Route path={ROUTES.RETURNS} element={<ReturnsAndExchanges/>}/>
            <Route path={ROUTES.CONSUMER_PROTECTION} element={<ConsumerProtection/>}/>
            <Route path={ROUTES.PUBLIC_OFFER} element={<PublicOffer/>}/>
        </Routes>
    );
}
