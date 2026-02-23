// src/components/HeroSection/HeroSectionStyles.js
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#1A1A1A", // رنگ پس زمینه Hero Section
  minHeight: "80vh", // حداقل ارتفاع
  display: "flex",
  direction: "ltr", // راست به چپ
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden", // برای اینکه پس زمینه از کادر بیرون نزند
  padding: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(8),
    flexDirection: "row", // در دسکتاپ به صورت ردیفی
    justifyContent: "space-between",

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
      ellipse 20% 70% at center,
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
  color: theme.palette.text.primary,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "cnter",
    width: "45%", // عرض ستون متن
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  marginTop: theme.spacing(0),
  width: "100%",
  scale: 1.15,
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    width: "50%",
  },
  "& img": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    clipPath: "inset(30px 0px 30px 0px)",
    marginTop: "-140px",
    marginBottom: "0px",
  },
}));

export const DescriptionBox = styled(Box)(({ theme }) => ({
  // استفاده از rgba: سه عدد اول کد رنگ (خاکستری تیره) و عدد آخر میزان شفافیت پس‌زمینه (0.3)
  backgroundColor: "rgba(128, 128, 128, 0.3)", 
  padding: theme.spacing(3),
  borderRadius: "20px",
  marginTop: theme.spacing(3),
  // ویژگی زیر را حذف کن یا روی 1 بذار
  opacity: 1, 
  textAlign: "justify",
  color: "#b4b2b2", // متن حالا کاملاً سفید می‌ماند
  backdropFilter: "blur(10px)", // اختیاری: برای ایجاد حالت شیشه‌ای مات و جذاب‌تر
  border: "1px solid rgba(255, 255, 255, 0.01)", // اختیاری: برای لبه‌های ظریف
}));