import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import { CartProvider } from "./components/Shop/CartContext/CartContext";
import { ProductList } from "./components/Shop/ProductList/ProductList";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Box } from "@mui/material";
import {Footer} from "./components/Footer/Footer";
import {Routes, Route, HashRouter} from "react-router-dom";
import { FunPlaceholder } from "./components/pages/FunPlaceholder/FunPlaceholder";
import {FunPlaceholderDelivery} from "./components/pages/FunPlaceholderDelivery/FunPlaceholderDelivery";
import {FunPlaceholderPayment} from "./components/pages/FunPlaceholderPayment/FunPlaceholderPayment";
import {FunPlaceholderBonuses} from "./components/pages/FunPlaceholderBonuses/FunPlaceholderBonuses";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";
import SubcategoryPage from "@/components/pages/ElementPage/ElementPage";
import LoginPage from "@/components/pages/LoginPage/LoginPage";
import {MySlider} from "@/components/Slider/Slider";
import {fetchProducts, Product} from "@/api/products";

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(err => console.error("Error fetching products:", err));
    }, []);



    const newProducts = products.filter(p => p.category === 'new');
    const discountedProducts = products.filter(p => p.category === 'discounted');
    const topProducts = products.filter(p => p.category === 'top');

    return (
        <CartProvider>
            <I18nextProvider i18n={i18n}>
                <HashRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={
                            <Box sx={{ maxWidth: 1370, mx: "auto", px: 2 }}>
                                <MySlider />
                                <ProductList titleKey="newProducts" products={newProducts} />
                                <ProductList titleKey="discountedProducts" products={discountedProducts} />
                                <ProductList titleKey="topProducts" products={topProducts} />
                                <PopularCategories />
                            </Box>
                        } />
                        <Route path="/delivery" element={<FunPlaceholderDelivery />} />
                        <Route path="/payment" element={<FunPlaceholderPayment />} />
                        <Route path="/bonuses" element={<FunPlaceholderBonuses />} />
                        <Route path="/promotion" element={<FunPlaceholder title="Акции" />} />
                        <Route path="*" element={<FunPlaceholder />} />


                        <Route path="/category/:categoryKey" element={<CategoryPage />} />
                        <Route path="/subcategory/:subcategoryName" element={<SubcategoryPage />} />
                        <Route path="/profile" element={<LoginPage />} />

                    </Routes>
                    <Footer/>
                </HashRouter >
            </I18nextProvider>
        </CartProvider>
    );
}

export default App;
