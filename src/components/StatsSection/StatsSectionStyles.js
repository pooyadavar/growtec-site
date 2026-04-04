import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StatsWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: theme.spacing(6, 0), // Adjusted padding for mobile
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  /* ترتیب صحیح لایه‌ها (از بالا به پایین) */
  background: `
    /* 1️⃣ گرادیانت محوکننده بالا و پایین - بالاترین لایه */
    linear-gradient(
      to bottom,
      rgba(26, 26, 26, 1) 0%,
      rgba(26, 26, 26, 0) 65%,
      rgba(26, 26, 26, 0) 65%,
      rgba(26, 26, 26, 1) 95%
    ),

    /* 2️⃣ هاله بنفش سمت چپ */
    radial-gradient(
      circle at 10% 50%,
      rgba(40, 24, 74, 0.8) 0%,
      rgba(0, 0, 0, 0) 50%
    ),

    /* 3️⃣ هاله سبز سمت راست */
    radial-gradient(
      circle at 90% 50%,
      rgba(12, 55, 31, 0.8) 0%,
      rgba(0, 0, 0, 0) 50%
    ),

    /* 4️⃣ رنگ پایه */
    rgba(26, 26, 26, 1)
  `,
}));

export const StatItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  color: "#ffffff",
  zIndex: 2,
});

export const IconWrapper = styled(Box)(({ theme }) => ({ // Added theme to access breakpoints
  width: "120px", // Default for mobile
  height: "100px", // Default for mobile
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px", // Reduced margin for mobile
  [theme.breakpoints.up("md")]: { // Larger on desktop
    width: "160px", 
    height: "140px", 
    marginBottom: "15px",
  },
  "& img": {
    width: "90px", // Default for mobile
    height: "90px",
    objectFit: "contain",
    filter: "drop-shadow(0 0 15px rgba(255,255,255,0.2))",
    [theme.breakpoints.up("md")]: { // Larger on desktop
      width: "120px", 
      height: "120px",
    },
  },
}));
