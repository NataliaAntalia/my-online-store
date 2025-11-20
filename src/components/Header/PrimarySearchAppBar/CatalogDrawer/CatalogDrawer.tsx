import React from 'react';
import {CatalogMobile} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogMobile/CatalogMobile";
import {CatalogDesktop} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogDesktop/CatalogDesktop";
import {CatalogDrawerProps} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/types";


export const CatalogDrawer: React.FC<CatalogDrawerProps> = (props) => {


    if (!props.isMobile) {
        return <CatalogDesktop {...props}/>
    }
    return <CatalogMobile {...props}/>
};