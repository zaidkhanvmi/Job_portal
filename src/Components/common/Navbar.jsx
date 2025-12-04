import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "white",
        color: "black",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar>

        {/* Mobile sidebar toggle */}
        <IconButton edge="start" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>

        <Typography sx={{ flexGrow: 1, fontWeight: 700 }}>
          Dashboard
        </Typography>

        {/* Avatar button */}
        <IconButton onClick={handleOpenMenu}>
          <Avatar src="/profile.jpg" />
        </IconButton>

        {/* Avatar dropdown menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          PaperProps={{
            elevation: 3,
            sx: { mt: 1.5, minWidth: 160 },
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
