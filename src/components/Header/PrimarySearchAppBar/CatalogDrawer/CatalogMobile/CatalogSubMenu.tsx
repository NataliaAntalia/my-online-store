import React from 'react';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import s from '../CatalogDrawer.module.css'
import {ReactComponent as RightArrow} from "../../../../../img/arrow_right.svg";


export type CatalogSubMenuProps = {
    isCatalogOpen: boolean;
    setIsCatalogOpen: (isCatalogOpen: boolean) => void;
    sections: any[];
    onClose: () => void;
}

export const CatalogSubMenu: React.FC<CatalogSubMenuProps> = (props) => {
    const {isCatalogOpen, setIsCatalogOpen, sections, onClose} = props;

    return (
        <Drawer
            anchor="left"
            open={isCatalogOpen}
            onClose={() => setIsCatalogOpen(false)}
            className={s.desktopPaper}
            PaperProps={{
                sx: {
                    width: '85%',
                    maxWidth: '85%',
                    backgroundColor: 'var(--mobile-bg-paper)',
                    color:'var(--text-color)',
                }
            }}
        >
            <Box className={s.containerMobile}>
                <IconButton sx={{padding: '4px'}} onClick={() => setIsCatalogOpen(false)} size="large">
                    <RightArrow className={s.mirrorIcon}/>
                </IconButton>

                <Typography variant="h6">{('Каталог')}</Typography>
            </Box>
            <Divider/>

            <List>
                {sections.map((section: any, index: number) => (
                    <ListItem key={section.key || index} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={`/category/${section.key.split('.')[1]}`}
                            onClick={() => {
                                setIsCatalogOpen(false);
                                onClose();
                            }}
                        >
                            <ListItemText primary={`catalog.${section.key.split('.')[1]}`}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    );
};

