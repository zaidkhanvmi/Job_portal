import * as React from "react";
import {
    Drawer,
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ p: 2 }}>

            {/* Logo + Close Button */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    LOGO
                </Typography>

                {/* Close Sidebar Button (for mobile) */}
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: "block", sm: "none" } }}   // ONLY visible on mobile
                >
                    <ChevronLeftIcon />
                </IconButton>
            </Box>

            <List>
                <ListItemButton>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="Jobs" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Applicants" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon><CategoryIcon /></ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon><LocalOfferIcon /></ListItemIcon>
                    <ListItemText primary="Tags" />
                </ListItemButton>
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: "flex" }}>
            {/* TOPBAR */}
            <AppBar position="fixed" sx={{ zIndex: 1201 }}>
                <Toolbar>
                    {/* Mobile Menu Button */}
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* MOBILE DRAWER */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": { width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/* DESKTOP DRAWER */}
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
                }}
            >
                {drawer}
            </Drawer>

            {/* MAIN CONTENT */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                Your dashboard content goes here.
            </Box>
        </Box>
    );
}

export default Sidebar