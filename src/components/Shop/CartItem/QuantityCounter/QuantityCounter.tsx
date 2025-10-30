import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import s from "@/components/Shop/CartItem/CartItem.module.css";
import {removeFromCart} from "@/store/cartSlice";
import {Product} from "@/store/types";
import {useDispatch} from "react-redux";


type QuantityCounterProps = {
    product: Product;
}

export const QuantityCounter = ({product}: QuantityCounterProps) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            dispatch(removeFromCart(product.id));
        }
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };
    return (
        <>
            <Box className={s.quantity}>
                <button onClick={handleDecrease}>-</button>
                <Typography>{count}</Typography>
                <button onClick={handleIncrease}>+</button>
            </Box>

            <Typography className={s.price}>
                {product.price * count} {product.currency}
            </Typography>
        </>
    );
};

