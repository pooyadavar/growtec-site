import { styled } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";

export const TeamWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: theme.spacing(12, 0),
  /* استفاده از همان گرادیانت بنفش و سبز که برای کل سایت ست کردیم */
  background: `
    linear-gradient(to bottom, rgba(26, 26, 26, 1) 0%, rgba(26, 26, 26, 0) 35%, rgba(26, 26, 26, 0) 65%, rgba(26, 26, 26, 1) 100%),
    radial-gradient(circle at 10% 50%, rgba(40, 24, 74, 0.8) 0%, rgba(0, 0, 0, 0) 50%),
    radial-gradient(circle at 90% 50%, rgba(12, 55, 31, 0.8) 0%, rgba(0, 0, 0, 0) 50%),
    rgba(26, 26, 26, 1)
  `,
}));

export const TeamScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  scrollBehavior: "smooth",
  gap: "30px",
  padding: "20px 0",
  "&::-webkit-scrollbar": { display: "none" },
  scrollbarWidth: "none",
  /* تبدیل به گرید در دسکتاپ */
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    overflowX: "visible",
  },
}));

export const MemberCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

export const StyledAvatar = styled(Avatar)({
  width: "190px",
  height: "190px",
  marginBottom: "20px",
  border: "2px solid rgba(255, 255, 255, 0.2)",
});