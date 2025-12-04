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
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 290;

const Sidebar = ({ open, toggleDrawer }) => {

    const location = useLocation();
    const navigate = useNavigate();

    // List of menu items
    const menu = [
        { name: "Overview", path: "/", icon: <DashboardIcon /> },
        { name: "Jobs", path: "/jobs", icon: <WorkIcon /> },
        { name: "Applicants", path: "/applicants", icon: <PeopleIcon /> },
        { name: "Categories", path: "/category", icon: <CategoryIcon /> },
        { name: "Tags", path: "/tags", icon: <LocalOfferIcon /> },
    ];

    // Function to check active route
    const isActive = (path) => location.pathname === path;

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
                {menu.map((item) => (
                    <ListItemButton
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        sx={{
                            gap: 2,
                            borderRadius: 2,
                            mt: 0.5,
                            // ⭐ ACTIVE STYLING
                            backgroundColor: isActive(item.path) ? "transparent" : "transparent",
                            paddingY: "10px",
                        }}
                        className={`${isActive(item.path)
                            ? "bg-custom-gradient primary-color"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        <ListItemIcon sx={{ minWidth: 0, color: isActive(item.path) ? "#4d179a" : "", }}>
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText
                            primary={item.name}
                            sx={{
                                "& span": {
                                    fontSize: 14,
                                    fontWeight: isActive(item.path) ? 600 : 400,
                                    color: isActive(item.path) ? "#4d179a" : "#333", // text color
                                },
                            }}
                        />
                    </ListItemButton>
                ))}
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
