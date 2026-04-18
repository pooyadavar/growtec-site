import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StatsWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: theme.spacing(6, 0),
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: `
    linear-gradient(
      to bottom,
      rgba(26, 26, 26, 1) 0%,
      rgba(26, 26, 26, 0) 65%,
      rgba(26, 26, 26, 0) 65%,
      rgba(26, 26, 26, 1) 95%
    ),
    radial-gradient(
      circle at 10% 50%,
      rgba(40, 24, 74, 0.8) 0%,
      rgba(0, 0, 0, 0) 50%
    ),
    radial-gradient(
      circle at 90% 50%,
      rgba(12, 55, 31, 0.8) 0%,
      rgba(0, 0, 0, 0) 50%
    ),
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

export const IconWrapper = styled(Box)(({ theme }) => ({
  // ابعاد بهینه شده برای موبایل در حالت دوتایی (2x2)
  width: "80px", 
  height: "70px", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "8px", 
  
  [theme.breakpoints.up("sm")]: {
    width: "120px", 
    height: "100px", 
  },
  
  [theme.breakpoints.up("md")]: { 
    width: "160px", 
    height: "140px", 
    marginBottom: "15px",
  },
  
  "& img": {
    width: "60px", // سایز عکس بهینه شده برای موبایل
    height: "60px",
    objectFit: "contain",
    filter: "drop-shadow(0 0 15px rgba(255,255,255,0.2))",
    transform: "scale(1.2)", // انتقال استایل scale از کامپوننت به اینجا
    
    [theme.breakpoints.up("sm")]: {
      width: "90px", 
      height: "90px",
    },
    
    [theme.breakpoints.up("md")]: { 
      width: "120px", 
      height: "120px",
    },
  },
}));
