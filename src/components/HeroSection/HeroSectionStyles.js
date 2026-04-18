import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const floatingAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  25% { transform: translateY(-8px); }
  50% { transform: translateY(-15px); }
  75% { transform: translateY(-8px); }
`;

const pulseAnimation = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.85; }
  50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.85; }
`;

const ringExpandAnimation = keyframes`
  0% { transform: translate(-50%, -50%) scale(1.7); filter: brightness(3.5) saturate(1.8) drop-shadow(0px 0px 14px rgba(2,132,106,1)); }
  50% { transform: translate(-50%, -50%) scale(1.9); filter: brightness(4) saturate(2) drop-shadow(0px 0px 24px rgba(2,132,106,1)); }
  100% { transform: translate(-50%, -50%) scale(1.7); filter: brightness(3.5) saturate(1.8) drop-shadow(0px 0px 14px rgba(2,132,106,1)); }
`;

export const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#1A1A1A",
  // ✅ اصلاح: حذف فاصله اضافی و استفاده از 100vh یا مقدار مناسب
  minHeight: "70vh", 
  display: "flex",
  direction: "ltr",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: theme.spacing(2),
  marginTop: 0, // ✅ اطمینان از عدم وجود فاصله از بالا
  [theme.breakpoints.up("md")]: {
    minHeight: "60vh", // یا هر مقداری که مناسب دیزاین شماست
    marginTop: 0, // ✅ حذف مارجین بالا
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

export const BackgroundGradient = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `
    linear-gradient(to bottom, rgba(26, 26, 26, 1) 0%, rgba(26, 26, 26, 0) 35%, rgba(26, 26, 26, 0) 65%, rgba(26, 26, 26, 1) 100%),
    radial-gradient(circle at 10% 90%, rgba(2, 132, 106, 0.8) 0%, rgba(0, 0, 0, 0) 50%),
    radial-gradient(circle at 85% 50%, rgba(10, 54, 30, 0.8) 0%, rgba(0, 0, 0, 0) 50%),
    rgba(26, 26, 26, 1)
  `,
  zIndex: 0,
});

export const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  direction: "ltr",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.primary,
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    alignItems: "center",
    width: "40%", // 🟢 عرض متن را از 45 به 40 کم کردیم
  },
}));

export const DescriptionBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(128,128,128,0.3)",
  padding: theme.spacing(2),
  borderRadius: "16px",
  marginTop: theme.spacing(2),
  textAlign: "center",
  color: "#b4b2b2",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.01)",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
    borderRadius: "20px",
    marginTop: theme.spacing(3),
    textAlign: "justify",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  marginTop: theme.spacing(2),
  width: "90%", // 🟢 در موبایل عرض عکس کمی کمتر شود تا ارتفاع هم کم شود
  maxWidth: "500px", // 🟢 جلوگیری از بزرگ شدن بیش از حد در تبلت
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    width: "45%", // 🟢 عرض عکس در دسکتاپ را از 50 به 45 کم کردیم تا ارتفاعش کمتر شود
    maxWidth: "800px",
  },
}));

export const FloatingContainer = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "1000px",
  animation: `${floatingAnimation} 12s ease-in-out infinite`,
});

export const RelativeWrapper = styled(Box)({
  position: "relative", 
  display: "block",
  width: "100%",
  lineHeight: 0, 

  "& .main-image": {
    display: "block",
    width: "100%",
    height: "auto", 
    filter: "brightness(0.75) contrast(1.1) grayscale(10%)",
    transition: "all 0.8s ease-in-out",
  },
});

export const PointerImage = styled("img")(({ theme }) => ({
  position: "absolute",
  height: "auto",
  transform: "translate(-50%, -50%) scale(1)",
  zIndex: 10,
  cursor: "pointer",
  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  filter: "brightness(1.3) opacity(0.85)",

  width: "clamp(50px, 13%, 100px)",

  [theme.breakpoints.up("sm")]: {
    width: "clamp(70px, 16%, 170px)",
  },

  [theme.breakpoints.up("md")]: {
    width: "clamp(115px, 20%, 280px)",
  },

  animation: `${pulseAnimation} 3s ease-in-out infinite`,

  "&.active": {
    animation: `${ringExpandAnimation} 1.5s ease-in-out infinite`,
    filter:
      "brightness(3.5) saturate(1.8) drop-shadow(0px 0px 16px rgba(2,132,106,1))",
    zIndex: 20,
  },

  "&:hover": {
    transform: "translate(-50%, -50%) scale(1.3)",
    filter:
      "brightness(2.5) saturate(1.5) drop-shadow(0px 0px 8px rgba(2,132,106,0.8))",
    animation: "none",
  },
}));

export const FeatureCard = styled(Box)(({ theme }) => ({
  position: "absolute", 
  bottom: "12%",
  right: "2%",
  width: "38%", 
  backgroundColor: "rgba(20,20,20,0.75)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(2,132,106,0.3)",
  borderRadius: "16px",
  padding: theme.spacing(1.5),
  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
  direction: "ltr",
  textAlign: "left",
  zIndex: 30,
  [theme.breakpoints.down("sm")]: {
    width: "45%",
    padding: theme.spacing(1),
  },
}));
