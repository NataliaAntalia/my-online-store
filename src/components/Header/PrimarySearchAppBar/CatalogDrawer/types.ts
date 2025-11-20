import React from "react";
import {TFunction} from "i18next";

export interface CatalogDrawerProps {
    open: boolean;
    onClose: () => void;
    sections: any[];
    activeSection: number;
    setActiveSection: (index: number) => void;
    expandedSubcategories: { [key: string]: boolean };
    setExpandedSubcategories: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    t: TFunction;
    anchorEl: HTMLElement | null;
    isMobile: boolean;
    navPages: Array<{ path: string; labelKey: string }>;
    mainNumber: string;
    logoPath: string;
    languages: Array<{ code: string; label: string }>;
    cartData: {
        favorites: any[];
        comparison: any[];
        cart: any[];
    };
}