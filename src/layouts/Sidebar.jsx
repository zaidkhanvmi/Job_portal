import * as React from "react";
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    IconButton
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";

const drawerWidth = 290;

const Sidebar = ({ open, toggleDrawer }) => {

    const navigate = useNavigate();

    const drawer = (
        <Box sx={{ px: 2.5 }}>
            {/* Logo + Close Button (mobile only) */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 4,
                    mb: 4,
                }}
            >
                <img
                    src="/logo-dark.svg"
                    alt="logo"
                    style={{ width: 200, height: "auto" }}
                />

                <IconButton
                    onClick={toggleDrawer}
                    sx={{ display: { xs: "block", sm: "none" } }}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </Box>

            {/* Sidebar links */}
            <List>
                <ListItemButton sx={{ gap: 2 }} onClick={() => navigate("/")}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItemButton>

                <ListItemButton sx={{ gap: 2 }} onClick={() => navigate("/jobs")}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jobs" />
                </ListItemButton>

                <ListItemButton sx={{ gap: 2 }} onClick={() => navigate("/applicants")}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Applicants" />
                </ListItemButton>

                <ListItemButton sx={{ gap: 2 }} onClick={() => navigate("/category")}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItemButton>

                <ListItemButton sx={{ gap: 2 }} onClick={() => navigate("/tags")}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                        <LocalOfferIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tags" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <>
            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={open}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Sidebar;
