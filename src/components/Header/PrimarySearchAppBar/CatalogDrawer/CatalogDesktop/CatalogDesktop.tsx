import React from 'react';
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import s from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogDrawer.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import Popper from "@mui/material/Popper";
import {CatalogDrawerProps} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/types";
import {
    CatalogRightColumn
} from "@/components/Header/PrimarySearchAppBar/CatalogDrawer/CatalogDesktop/CatalogRightColumn";


export const CatalogDesktop: React.FC<CatalogDrawerProps> = (props) => {
    const {
        open,
        onClose,
        anchorEl,
        sections,
        setActiveSection,
    } = props;


    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            transition
            modifiers={[
                {name: 'offset', options: {offset: [0, 8]}},
            ]}
        >
            {({TransitionProps}) => (
                <Fade {...TransitionProps} timeout={150}>
                    <Paper elevation={3} className={s.desktopPaper}>
                        <ClickAwayListener onClickAway={onClose}>
                            <Box className={s.drawerContainer}>
                                <Box className={s.drawerLeftColumn}>
                                    <List>
                                        {sections.map((section: any, index: number) => (
                                            <ListItem key={section.key || index} disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to={`/category/${section.key.split('.')[1]}`}
                                                    onMouseEnter={() => setActiveSection(index)}
                                                    onClick={onClose}
                                                >
                                                    <ListItemText primary={`catalog.${section.key.split('.')[1]}`}/>
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                <CatalogRightColumn {...props}/>
                            </Box>
                        </ClickAwayListener>
                    </Paper>
                </Fade>
            )}
        </Popper>
    );
};

