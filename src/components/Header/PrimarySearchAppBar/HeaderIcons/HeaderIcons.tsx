import React from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";
import Badge from "@mui/material/Badge";
import {setDrawerOpen} from "@/store/drawerSlice";
import { AppDispatch } from "@/store"; // импорт типа
import { ReactComponent as UserIcon } from '../../../../img/user.svg';
import { ReactComponent as Balance } from '../../../../img/compare.svg';
import { ReactComponent as Like } from '../../../../img/like.svg';
import { ReactComponent as Shop } from '../../../../img/shop.svg';
import s from './HeaderIcons.module.css'


interface HeaderIconsProps  {
    favoritesCount: number;
    cartCount: number;
    dispatch: AppDispatch;
}
interface IconConfig {
    id: string;
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    badgeContent?: number;
    onClick?: () => void;
    link?: string;
}

export const HeaderIcons = ({favoritesCount, cartCount, dispatch}:HeaderIconsProps) => {

    const iconConfigs: IconConfig[] = [
        { id: 'profile', title: 'profile_login', icon: UserIcon, link: '/profile' },
        { id: 'comparison', title: 'comparison', icon: Balance, onClick: () => dispatch(setDrawerOpen({ id: 'comparison', open: true })) },
        { id: 'favorites', title: 'favorites', icon: Like, badgeContent: favoritesCount, onClick: () => dispatch(setDrawerOpen({ id: 'favorites', open: true })) },
        { id: 'cart', title: 'cart', icon: Shop, badgeContent: cartCount, onClick: () => dispatch(setDrawerOpen({ id: 'cart', open: true })) },
    ];

    return (
        <div>
            <Box className={s.iconSection}>
                {iconConfigs.map((config) => (
                    <Tooltip key={config.id} title={(config.title)}>
                        <IconButton
                            size="large"
                            onClick={config.onClick}
                            component={config.link ? Link : 'button'}
                            to={config.link}
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
        </div>
    );
};

