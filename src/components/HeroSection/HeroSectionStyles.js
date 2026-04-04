// src/components/HeroSection/HeroSectionStyles.js
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#1A1A1A", // رنگ پس زمینه Hero Section
  minHeight: "calc(100vh - 80px)", // تنظیم برای یک صفحه شدن در موبایل (با در نظر گرفتن هدر)
  display: "flex",
  direction: "ltr", // راست به چپ
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // در موبایل وسط چین
  overflow: "hidden", // برای اینکه پس زمینه از کادر بیرون نزند
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    minHeight: "80vh",
    marginTop: theme.spacing(1),
    flexDirection: "row", // در دسکتاپ به صورت ردیفی
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

export const BackgroundGradient = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `
    radial-gradient(
      ellipse 25% 65% at center,
      #004d40 0%,
      #00332b 30%,
      #1A1A1A 70%,
      #1A1A1A 100%
    )
  `,
  zIndex: 0,
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  direction: "ltr",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // در موبایل وسط چین
  color: theme.palette.text.primary,
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    alignItems: "center",
    width: "45%", // عرض ستون متن در دسکتاپ
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  marginTop: theme.spacing(2),
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    width: "50%",
    scale: 1.15,
  },
  "& img": {
    maxWidth: "100%",
    maxHeight: "70vh", // در موبایل ارتفاع تصویر محدود می‌شود تا در یک صفحه جا شود
    objectFit: "contain",
    display: "block",
    [theme.breakpoints.up("md")]: {
      maxHeight: "none",
      clipPath: "inset(30px 0px 30px 0px)",
      marginTop: "-100px",
      marginBottom: "0px",
    },
    [theme.breakpoints.up("xs")]: {
      maxHeight: "none",
      clipPath: "inset(30px 0px 30px 0px)",
      marginTop: "-100px",
      marginBottom: "0px",
    }
  },
}));

export const DescriptionBox = styled(Box)(({ theme }) => ({
  // استفاده از rgba: سه عدد اول کد رنگ (خاکستری تیره) و عدد آخر میزان شفافیت پس‌زمینه (0.3)
  backgroundColor: "rgba(128, 128, 128, 0.3)", 
  padding: theme.spacing(2), // پدینگ کمتر در موبایل
  borderRadius: "16px",
  marginTop: theme.spacing(2),
  opacity: 1, 
  textAlign: "center", // در موبایل وسط چین
  color: "#b4b2b2", 
  backdropFilter: "blur(10px)", 
  border: "1px solid rgba(255, 255, 255, 0.01)", 
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
    borderRadius: "20px",
    marginTop: theme.spacing(3),
    textAlign: "justify",
  }
}));
