import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

export const TeamWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  // پدینگ در موبایل کمتر و در دسکتاپ بیشتر
  padding: theme.spacing(6, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 0),
  },
  background: `
    linear-gradient(to bottom, rgba(26, 26, 26, 1) 0%, rgba(26, 26, 26, 0) 35%, rgba(237, 127, 235, 0.2) 65%, rgba(26, 26, 26, 0.87) 100%),
    radial-gradient(circle at 10% 50%, rgba(78, 48, 143, 0.64) 0%, rgba(0, 0, 0, 0) 50%),
    radial-gradient(circle at 90% 50%, rgba(136, 0, 146, 0.8) 0%, rgba(0, 0, 0, 0) 50%),
    rgb(0, 0, 0)
  `,
  direction:"ltr"
}));

export const TeamScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  scrollBehavior: "smooth",
  gap: "20px", // فاصله در موبایل کمتر
  padding: "10px 0",
  "&::-webkit-scrollbar": { display: "none" },
  scrollbarWidth: "none",

  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    overflowX: "visible",
    justifyContent: "space-around",
    gap: "30px",
  },
}));

export const MemberCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  // سایز آواتار برای موبایل
  width: "120px", 
  height: "120px",
  marginBottom: "15px",
  border: "2px solid rgba(255, 255, 255, 0.2)",
  
  // سایز آواتار برای دسکتاپ (همان اندازه قبلی)
  [theme.breakpoints.up("md")]: {
    width: "190px",
    height: "190px",
    marginBottom: "20px",
  },
}));
