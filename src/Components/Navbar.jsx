import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import BtnChangeTheme from "./BtnChangeTheme";
import { createTheme } from '@mui/material/styles';
import { ContextTheme } from "../contexts/theme.context"

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const {theme}  = useContext(ContextTheme);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const themeMUI = createTheme({
    palette: {
      primary: {
        main: theme.bgcLayout,
      }
    },
  });

  const navLinkRoutes = ["home", "contact", "favs"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <span>
          <span style={{ color: "red" }}>D</span>H Odonto
        </span>
      </Typography>
      <Divider />

      <List>
        {navLinkRoutes.map((item) => (
          <NavLink key={item} to={`/${item}`}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      <BtnChangeTheme />

      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "20px" }}>
      <AppBar component="nav" color="primary" theme={themeMUI}>
        <div>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <span>
                <span style={{ color: "red" }}>D</span>H Odonto
              </span>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navLinkRoutes.map((item) => (
                <NavLink key={item} to={`/${item}`} >
                  <Button sx={{ color: theme.text }}>
                    {item}
                  </Button>
                </NavLink>
              ))}
              <BtnChangeTheme />
            </Box>
          </Toolbar>
        </div>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >

          {drawer}
        {/* <button>change</button> */}
        </Drawer>

      </Box>

      <Box component="main" sx={{ p: 3 }} />

    </Box>
  );
}


export default DrawerAppBar;
