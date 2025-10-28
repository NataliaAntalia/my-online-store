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
        </Routes>
    );
}
