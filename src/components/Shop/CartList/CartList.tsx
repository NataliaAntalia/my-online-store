import React, {useState} from "react";
import {Box, Typography, Button, FormControlLabel, Checkbox} from "@mui/material";
import {CartItem} from "@/components/Shop/CartItem/CartItem";
import {useCart} from "@/hooks/useCart";
import s from "../../../../src/components/pages/ProductsPage/ProductsPage.module.css";
import stiles from 'components/Shop/CartItem/CartItem.module.css'
import {styled} from "@mui/material/styles";
import {CartSummary} from "@/components/Shop/CartItem/CartSummary/CartSummary";


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

    return (
        <Box>
            <Typography variant="h6" className={s.title}>Корзина</Typography>
            <Box className={stiles.checkboxContainer}>
                <FormControlLabel
                    control={
                        <PinkCheckbox
                            checked={isAllSelected}
                            onChange={handleMasterCheckbox}
                        />
                    }
                    label=""
                />
                <Button onClick={handleSelectAll} className={s.button}>
                    {selectedIds.length === cart.length ? "Снять выделение" : "Выбрать всё"}
                </Button>
            </Box>
            <Box className={s.container}>


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

                {cart.length > 0 && (
                    <Box mt={4}>
                        <CartSummary products={cart} checkedItems={selectedIds} />
                    </Box>
                )}
            </Box>
        </Box>
            );
            }
