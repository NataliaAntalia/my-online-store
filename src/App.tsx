// import React, {useEffect, useState} from 'react';
// import './App.css';
// import MySlider from "./components/Slider/Slider";
// import Header from "./components/Header/Header";
// import {CartProvider} from "./components/Shop/CartContext";
// import {ProductList} from "./components/Shop/ProductList";
// import PopularCategories from "./components/PopularCategories/PopularCategories";
// import './i18n';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';
// import {supabaseAnonKey, supabaseUrl} from "./supabaseClient";
//
//
//
//
//
// // const newProducts = [
// //     { id: "1", image: "img1.jpg", nameKey: "product1", price: 100, cashback: 5 },
// //     { id: "2", image: "img2.jpg", nameKey: "product2", price: 200, cashback: 10 },
// //     { id: "3", image: "img2.jpg", nameKey: "product3", price: 200, cashback: 10 },
// //     { id: "4", image: "img2.jpg", nameKey: "product4", price: 200, cashback: 10 },
// //     { id: "5", image: "img2.jpg", nameKey: "product5", price: 200, cashback: 10 },
// // ];
// //
// // const discountedProducts = [
// //     { id: "7", image: "img3.jpg", nameKey: "product6", price: 80, cashback: 4 },
// //     { id: "8", image: "img4.jpg", nameKey: "product7", price: 150, cashback: 7 },
// //     { id: "9", image: "img4.jpg", nameKey: "product8", price: 150, cashback: 7 },
// //     { id: "10", image: "img4.jpg", nameKey: "product9", price: 150, cashback: 7 },
// //     { id: "11", image: "img4.jpg", nameKey: "product10", price: 150, cashback: 7 },
// // ];
// //
// // const topProducts = [
// //     { id: "13", image: "img3.jpg", nameKey: "product11", price: 80, cashback: 4 },
// //     { id: "14", image: "img4.jpg", nameKey: "product12", price: 150, cashback: 7 },
// //     { id: "15", image: "img4.jpg", nameKey: "product13", price: 150, cashback: 7 },
// //     { id: "16", image: "img4.jpg", nameKey: "product14", price: 150, cashback: 7 },
// //     { id: "17", image: "img4.jpg", nameKey: "product15", price: 150, cashback: 7 },
// // ];
//
//
// function App() {
//
//     const [newProducts, setNewProducts] = useState([]);
//     const [discountedProducts, setDiscountedProducts] = useState([]);
//     const [topProducts, setTopProducts] = useState([]);
//
//     useEffect(() => {
//         const fetchProducts = async () => {
//             const headers = {
//                 'apikey': supabaseAnonKey,
//                 'Authorization': `Bearer ${supabaseAnonKey}`
//             };
//
//             const newRes = await fetch(`${supabaseUrl}/rest/v1/newProducts`, { headers });
//             const newData = await newRes.json();
//             setNewProducts(newData);
//
//             const discountedRes = await fetch(`${supabaseUrl}/rest/v1/discountedProducts`, { headers });
//             const discountedData = await discountedRes.json();
//             setDiscountedProducts(discountedData);
//
//             const topRes = await fetch(`${supabaseUrl}/rest/v1/topProducts`, { headers });
//             const topData = await topRes.json();
//             setTopProducts(topData);
//         };
//
//         fetchProducts();
//     }, []);
//
//
//
//     return (
//         <CartProvider>
//             <I18nextProvider i18n={i18n}>
//             <div className="App">
//                 <Header/>
//                 <MySlider/>
//                 <ProductList titleKey="newProducts" products={newProducts} />
//                 <ProductList titleKey="discountedProducts" products={discountedProducts} />
//                 <ProductList titleKey="topProducts" products={topProducts} />
//
//
//                 <PopularCategories/>
//
//             </div>
//             </I18nextProvider>
//         </CartProvider>
//     );
// }
//
// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import MySlider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import { CartProvider } from "./components/Shop/CartContext";
import { ProductList } from "./components/Shop/ProductList";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { supabaseUrl, supabaseAnonKey } from "./supabaseClient";
import { Box } from "@mui/material";
import {Footer} from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FunPlaceholder } from "./components/pages/FunPlaceholder/FunPlaceholder";
import {FunPlaceholderDelivery} from "./components/pages/FunPlaceholderDelivery/FunPlaceholderDelivery";
import {FunPlaceholderPayment} from "./components/pages/FunPlaceholderPayment/FunPlaceholderPayment";
import {FunPlaceholderBonuses} from "./components/pages/FunPlaceholderBonuses/FunPlaceholderBonuses";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";
import SubcategoryPage from "./components/pages/SubcategoryPage/SubcategoryPage";
import LoginPage from "@/components/pages/LoginPage/LoginPage";

interface Product {
    id: string;
    name: string;
    image_url: string;
    price: number;
    cashback: number;
    currency: string;
    rating: number;
    category: string; // можно использовать для фильтрации new/discounted/top
}

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const headers = {
                'apikey': supabaseAnonKey,
                'Authorization': `Bearer ${supabaseAnonKey}`,
                'Accept': 'application/json',
            };

            try {
                const res = await fetch(`${supabaseUrl}/rest/v1/products`, { headers });
                const data = await res.json();
                console.log("Fetched products:", data); // <-- проверяем здесь
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);


    // фильтруем продукты для разных секций

    const newProducts = products.filter(p => p.category === 'new');
    const discountedProducts = products.filter(p => p.category === 'discounted');
    const topProducts = products.filter(p => p.category === 'top');

    return (
        <CartProvider>
            <I18nextProvider i18n={i18n}>
                <Router>
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
                </Router>
            </I18nextProvider>
        </CartProvider>
    );
}

export default App;

