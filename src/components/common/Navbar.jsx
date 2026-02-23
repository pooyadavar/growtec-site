// src/components/common/Navbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import growteclogo from "../../assets/svg/logo growtec.svg"; // تصویر گلخانه

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={0} // بدون سایه
      sx={{
        backgroundColor: "transparent", // پس زمینه شفاف
        padding: { xs: "0 16px", md: "0 40px" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{ justifyContent: "space-between", direction: "ltr" }}
      >
        {/* لوگو */}
        <img
          src={growteclogo}
          alt="سیستم هوشمند گلخانه"
          style={{
            width: "400px", // عرض نهایی
            height: "180px", // ارتفاع نهایی
            objectFit: "cover", // مشابه کراپ کردن عمل می‌کند
            objectPosition: "center", // تعیین مرکز کراپ (مثلاً 'top' یا 'bottom')
          }}
        />

        {/* منو */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {[
            "آخرین پروژه‌ها",
            "تور مجازی",
            "خدمات و محصولات",
            "درباره ما",
            "تماس با ما",
          ].map((item) => (
            <Button
              key={item}
              sx={{
                fontSize:20,
                color: theme.palette.text.primary,
                mx: 1,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 600,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
