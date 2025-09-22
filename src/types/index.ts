// types/index.ts

import './i18n';
export interface Product {
    name: string;
    src: string;
    price: number;
    cashback: number;
}

export interface SlideData {
    src: string;
    alt: string;
}