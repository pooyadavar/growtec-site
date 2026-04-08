import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { GridLegacy as Grid } from "@mui/material";
import growteclogo from "../../assets/svg/logo growtec.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "سیستم کنترل اقلیم",
    "ماشین آبیاری و تغذیه",
    "مشاوره ساخت گلخانه",
    "اتوماسیون گلخانه",
  ];

  const contacts = [
    "تهران خیابان آزادی خیابان حبیب الله نبش کوچه مجلسی پلاک ۲",
    "۰۲۱۸۲۸۰۳۸۷۴",
    "irgrowtech@gmail.com",
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.default,
        color: alpha(theme.palette.common.white, 0.8),
        pt: 8,
        pb: 0,
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        direction: "ltr", // تغییر دایرکشن به LTR
      }}
    >
      {/* هاله‌های رنگی بک‌گراند */}
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -100, // در LTR هاله را به چپ آوردم
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: alpha("#4caf50", 0.15),
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: -150, // هاله دوم به راست رفت
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: alpha("#5e239d", 0.08),
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* ستون اول: لوگو (در LTR سمت چپ می‌افتد) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box
              component="img"
              src={growteclogo}
              alt="گروتک"
              sx={{
                width: { xs: "70%", sm: "300px", md: "400px" },
                height: { xs: "auto", md: "180px" },
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Grid>

          {/* ستون دوم: خدمات */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              color="white"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}
            >
              خدمات
            </Typography>
            <Stack
              spacing={1.5}
              sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            >
              {services.map((item, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: alpha(theme.palette.common.white, 0.7),
                    "&::before": {
                      content: '"•"',
                      mr: 1, // در LTR فاصله باید از سمت راست بولت باشد تا به متن نچسبد
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* ستون سوم: تماس */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              color="white"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}
            >
              تماس
            </Typography>
            <Stack
              spacing={1.5}
              sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            >
              {contacts.map((item, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    textAlign: "left", // چپ‌چین شدن متن
                    color: alpha(theme.palette.common.white, 0.7),
                    "&::before": {
                      content: '"•"',
                      mr: 1, // تنظیم فاصله بولت برای LTR
                      fontSize: "1.2rem",
                      lineHeight: 1.2,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* نوار کپی‌رایت و شبکه‌های اجتماعی */}
      <Box
        sx={{
          bgcolor: alpha("#000", 0.3),
          py: 3,
          mt: 8,
          position: "relative",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column-reverse", md: "row" }} // در LTR کپی‌رایت سمت چپ و آیکون‌ها راست می‌افتند
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="caption"
              textAlign="center"
              color={alpha(theme.palette.common.white, 0.5)}
              sx={{ fontSize: "0.7rem", direction: "rtl" }} // این یک خط باید RTL بماند تا متن فارسی به هم نریزد
            >
              © ۱۴۰۴ کلیه حقوق مادی و معنوی این سایت متعلق به شرکت گروتک
              می‌باشد.
            </Typography>

            <Stack direction="row" spacing={1}>
              {[
                <InstagramIcon key="insta" />,
                <TelegramIcon key="tele" />,
                <WhatsAppIcon key="wa" />,
                <LinkedInIcon key="in" />,
              ].map((icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: alpha(theme.palette.common.white, 0.05),
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

        {/* دکمه اسکرول به بالا - در LTR باید سمت راست باشد */}
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "absolute",
            top: -24,
            left: { xs: 16, md: 60 }, // تغییر از left به right
            bgcolor: "#028c75",
            color: "white",
            boxShadow: "0 8px 16px rgba(2, 140, 117, 0.4)",
            width: 48,
            height: 48,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#026e5b",
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
