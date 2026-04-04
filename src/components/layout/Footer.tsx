import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Stack,
  Avatar,
  useTheme,
  alpha,
} from "@mui/material";
import growteclogo from "../../assets/svg/logo growtec.svg"; // تصویر گلخانه

import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { GridLegacy as Grid } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.default,
        color: alpha(theme.palette.common.white, 0.8),
        pt: 10,
        pb: 0,
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        direction: "ltr",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: alpha(theme.palette.primary.main, 0.1),
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8}>
          {/* ستون اول: درباره شرکت و لوگو */}
          <Grid item xs={12} md={5}>
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
          </Grid>

          {/* ستون دوم: اطلاعات تماس */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="white"
              fontWeight="bold"
              gutterBottom
              sx={{
                position: "relative",
                pb: 1,
                mb: 3,
                display: "inline-block",
                fontSize: "1.1rem",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "40%",
                  height: 3,
                  bgcolor: theme.palette.primary.main,
                  borderRadius: 2,
                },
              }}
            >
              دسترسی سریع
            </Typography>
            <Stack spacing={1.5}>
              {[
                "خانه",
                "درباره ما",
                "تماس با ما",
                "پروژه‌ها",
                "بلاگ",
                "فرصت‌های شغلی",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: alpha(theme.palette.common.white, 0.7),
                    transition: "0.3s",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.85rem",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      transform: "translateX(-5px)",
                    },
                    "&::before": {
                      content: '""',
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                      mr: 1,
                      opacity: 0.5,
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* ستون سوم: لینک‌های مفید */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              color="white"
              fontWeight="bold"
              gutterBottom
              sx={{
                position: "relative",
                pb: 1,
                mb: 3,
                display: "inline-block",
                fontSize: "1.1rem",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "40%",
                  height: 3,
                  bgcolor: theme.palette.primary.main,
                  borderRadius: 2,
                },
              }}
            >
              دسترسی سریع
            </Typography>
            <Stack spacing={1.5}>
              {[
                "خانه",
                "درباره ما",
                "تماس با ما",
                "پروژه‌ها",
                "بلاگ",
                "فرصت‌های شغلی",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: alpha(theme.palette.common.white, 0.7),
                    transition: "0.3s",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.85rem",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      transform: "translateX(-5px)",
                    },
                    "&::before": {
                      content: '""',
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                      mr: 1,
                      opacity: 0.5,
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* نوار کپی‌رایت پایین */}
      <Box
        sx={{
          bgcolor: alpha("#000", 0.2),
          py: 3,
          mt: 8,
          position: "relative",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="caption"
              textAlign="center"
              color={alpha(theme.palette.common.white, 0.5)}
              sx={{ fontSize: "0.7rem" }}
            >
              © ۱۴۰۴ کلیه حقوق مادی و معنوی این سایت متعلق به شرکت گروتک 
               می‌باشد.
            </Typography>

            <Stack direction="row" spacing={1}>
              {[
                <InstagramIcon />,
                <TelegramIcon />,
                <WhatsAppIcon />,
                <LinkedInIcon />,
              ].map((icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: alpha(theme.palette.common.white, 0.1),
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Container>

        {/* دکمه اسکرول به بالا */}
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "absolute",
            top: -24,
            left: 40,
            bgcolor: theme.palette.primary.main,
            color: "white",
            boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.4)}`,
            width: 48,
            height: 48,
            transition: "0.3s",
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
              transform: "translateY(-5px)",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
