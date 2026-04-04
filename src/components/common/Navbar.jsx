// src/components/common/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import growteclogo from "../../assets/svg/logo growtec.svg";

const menuItems = [
  "آخرین پروژه‌ها",
  "تور مجازی",
  "خدمات و محصولات",
  "درباره ما",
  "تماس با ما",
];

const Navbar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        padding: { xs: "0 16px", md: "0 40px" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{ 
          justifyContent: "space-between", 
          direction: "ltr" 
        }}
      >
        {/* لوگو - با ابعاد و استایل دقیق خودت، اما محافظت شده برای موبایل */}
        <Box
          component="img"
          src={growteclogo}
          alt="سیستم هوشمند گلخانه"
          sx={{
            width: { xs: "70%", sm: "300px", md: "400px" }, 
            height: { xs: "auto", md: "180px" },
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* دکمه همبرگری برای موبایل */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            display: { md: "none" }, 
            color: "#333",
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* منوی دسکتاپ */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button
              key={item}
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" , sm: "0.7rem" , lg: "1.2rem"},
                color: theme.palette.text.primary,
                mx: 1,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#028c75",
                  transform: "scale(1.05)",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* منوی کشویی (Drawer) برای موبایل */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: 250, 
            direction: "rtl", 
            backgroundColor: "#f8faff"
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "right", pt: 4 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "right", py: 2 }}>
                  <ListItemText 
                    primary={item} 
                    primaryTypographyProps={{
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 600,
                      color: "#333",
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;