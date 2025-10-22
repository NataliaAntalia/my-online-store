import { Box } from "@mui/material";
import { MySlider } from "@/components/Slider/Slider";
import { ProductList } from "@/components/Shop/ProductList/ProductList";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import { useProducts } from "@/hooks/useProducts";
import s from './HomePage.module.css'

export default function HomePage() {
    const { newProducts, discountedProducts, topProducts } = useProducts();

    return (
        <Box className={s.homeContainer}>
            <MySlider />
            <ProductList titleKey="newProducts" products={newProducts} />
            <ProductList titleKey="discountedProducts" products={discountedProducts} />
            <ProductList titleKey="topProducts" products={topProducts} />
            <PopularCategories />
        </Box>
    );
}
