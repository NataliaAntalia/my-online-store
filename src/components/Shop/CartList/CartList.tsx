import React, {useState} from "react";
import {Box, Typography, Button, FormControlLabel, Checkbox} from "@mui/material";
import {CartItem} from "@/components/Shop/CartItem/CartItem";
import {useCart} from "@/hooks/useCart";
import s from "../../../../src/components/pages/ProductsPage/ProductsPage.module.css";
import stiles from 'components/Shop/CartItem/CartItem.module.css'
import {styled} from "@mui/material/styles";
import {CartSummary} from "@/components/Shop/CartItem/CartSummary/CartSummary";
import {EmptyCart} from "@/components/Shop/CartList/EmptyCart/EmptyCart";


export const PinkCheckbox = styled(Checkbox)({
    '&.Mui-checked': {
        color: '#fb3578',
        borderRadius: 4,
    },
});

export const CartList = () => {
    const {cart} = useCart();
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const handleToggleSelect = (productId: string) => {
        setSelectedIds((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const handleSelectAll = () => {
        if (selectedIds.length === cart.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(cart.map((item) => item.id));
        }
    };

    const isAllSelected = selectedIds.length === cart.length && cart.length > 0;
    const handleMasterCheckbox = () => {
        handleSelectAll();
    };
    if (cart.length === 0) {
        return <EmptyCart/>;
    }


    return (
        <Box className={s.box}>
            <Typography variant="h6" className={s.title}>Корзина</Typography>
            <Box className={s.productContainer}>
            <Box className={s.container}>
                <Box className={stiles.checkboxContainer}>
                    <FormControlLabel
                        control={
                            <PinkCheckbox
                                checked={isAllSelected}
                                onChange={handleMasterCheckbox}
                                sx={{color: 'var(--icon-color)'}}
                            />

                        }
                        label=""
                    />
                    <Button onClick={handleSelectAll} className={s.button}>
                        {selectedIds.length === cart.length ? "Снять выделение" : "Выбрать всё"}
                    </Button>
                </Box>
                <Box className={s.containerCheckbox} >
                    {cart.length === 0 ? (
                        <Typography className={s.emptyText}>Корзина пуста</Typography>
                    ) : (
                        cart.map((product) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                checked={selectedIds.includes(product.id)}
                                onToggleSelect={() => handleToggleSelect(product.id)}
                            />
                        ))
                    )}
                </Box>
            </Box>
            {cart.length > 0 && (
                <Box className={s.cartSummaryBox}>
                    <CartSummary products={cart} checkedItems={selectedIds} />
                </Box>
            )}
            </Box>
        </Box>
    );
}