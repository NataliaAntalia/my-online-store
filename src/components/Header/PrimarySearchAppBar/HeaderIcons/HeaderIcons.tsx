import React from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { AppDispatch } from "@/store";
import { ReactComponent as UserIcon } from '../../../../img/user.svg';
import { ReactComponent as Balance } from '../../../../img/compare_header.svg';
import { ReactComponent as Like } from '../../../../img/like_header.svg';
import { ReactComponent as Shop } from '../../../../img/shop.svg';
import s from './HeaderIcons.module.css';

interface HeaderIconsProps {
    favoritesCount: number;
    cartCount: number;
    comparisonCount:number;
    dispatch: AppDispatch;
    isMobile: boolean;
}

interface IconConfig {
    id: string;
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    badgeContent?: number;
    link?: string;
}

export const HeaderIcons = ({ favoritesCount, cartCount, comparisonCount,isMobile }: HeaderIconsProps) => {
    const allIconConfigs: IconConfig[] = [
        { id: 'profile', title: 'profile_login', icon: UserIcon, link: '/profile' },
        { id: 'comparison', title: 'comparison', icon: Balance, badgeContent:comparisonCount, link: '/comparison' },
        { id: 'favorites', title: 'favorites', icon: Like, badgeContent: favoritesCount, link: '/favorites' },
        { id: 'cart', title: 'cart', icon: Shop, badgeContent: cartCount, link: '/cart' },
    ];

    const iconConfigs = isMobile
        ? allIconConfigs.filter(config => config.id === 'cart')
        : allIconConfigs;

    return (
        <Box className={s.iconSection}>
            {iconConfigs.map((config) => (
                <Tooltip key={config.id} title={config.title}>
                    <IconButton
                        size="large"
                        component={Link}
                        to={config.link || '#'}
                    >
                        {config.badgeContent !== undefined ? (
                            <Badge
                                badgeContent={config.badgeContent}
                                sx={{ '& .MuiBadge-badge': { backgroundColor: '#fd3579', color: 'white' } }}
                            >
                                <config.icon className={s.iconSvg} />
                            </Badge>
                        ) : (
                            <config.icon className={s.iconSvg} />
                        )}
                    </IconButton>
                </Tooltip>
            ))}
        </Box>
    );
};
