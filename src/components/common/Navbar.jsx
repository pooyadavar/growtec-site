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
  { text: "خانه", id: "hero-section" },
  { text: "تور مجازی محصولات", id: "virtual-tour-section", path: "/vt/" },
  { text: "آخرین پروژه‌ها", id: "projects-section" },

  { text: "درباره ما", id: "about-us-section" },
  { text: "تماس با ما", id: "contact-us-section" },
];

const Navbar = ({ onScrollToSection }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavItemClick = (id) => {
    onScrollToSection(id);
    setMobileOpen(false); // Close drawer on mobile after clicking
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
          justifyContent: "space-between", // تغییر به space-between
          alignItems: "center",
          direction: "ltr",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", md: "300px" },
            height: { xs: "130px", md: "180px" },
            overflow: "hidden", // این خط کلید حل مشکل است: هرچه بیرون کادر رفت را مخفی میکند
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start", // اگر سایت راست‌چین است و می‌خواهید سمت راست باشد، این را به flex-end تغییر دهید
          }}
        >
          {/* خود لوگو که داخل کادر زوم می‌شود */}
          <Box
            component="img"
            src={growteclogo}
            alt="سیستم هوشمند گلخانه"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: { xs: "cover", md: "contain" },
              // حالا با خیال راحت زوم کنید، چون بیرون‌زدگی‌ها توسط کانتینر پدر مخفی می‌شوند
              transform: { xs: "scale(1.4)", md: "scale(2.7)" },
              transformOrigin: "center center", // زوم از مرکز انجام شود تا متقارن باشد
            }}
          />
        </Box>

        {/* دکمه همبرگری برای موبایل */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end" // تغییر به end
          onClick={handleDrawerToggle}
          sx={{
            display: { md: "none" },
            color: "#333",
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* منوی دسکتاپ */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, justifyContent: "center" }}>
          {menuItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                  sm: "0.7rem",
                  lg: "1.2rem",
                },
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
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Spacer Box for centering the menu on desktop */}
        <Box sx={{ display: { xs: "none", md: "block" }, width: "300px" }} />
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
            backgroundColor: "#f8faff",
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "right", pt: 4 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "right", py: 2 }}
                  onClick={() => handleNavItemClick(item.id)}
                >
                  <ListItemText
                    primary={item.text}
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
