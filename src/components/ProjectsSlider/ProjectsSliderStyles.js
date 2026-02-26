import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const ProjectsWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: theme.spacing(12, 0),
  background: `
    linear-gradient(to bottom, rgba(26, 26, 26, 1) 0%, rgba(26, 26, 26, 0) 35%, rgba(26, 26, 26, 0) 65%, rgba(26, 26, 26, 1) 100%),
    radial-gradient(circle at 10% 50%, rgba(40, 24, 74, 0.8) 0%, rgba(0, 0, 0, 0) 50%),
    radial-gradient(circle at 90% 50%, rgba(12, 55, 31, 0.8) 0%, rgba(0, 0, 0, 0) 50%),
    rgba(26, 26, 26, 1)
  `,
}));

export const CustomNavButton = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 9999, // لایه رو کاملاً بیار بالا
  cursor: "pointer",
  color: "#ffffff",
  display: "flex", // همیشه نمایش داده بشه برای تست
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  backgroundColor: "rgba(255, 255, 255, 0.05)", // یک پس‌زمینه خیلی محو برای دیده شدن جاش
  borderRadius: "50%",
  padding: "10px",
  "& svg": {
    fontSize: "60px",
    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.9))",
  },
  "&:hover": {
    scale: "1.2",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#4caf50",
  },
});

export const ScrollContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  scrollBehavior: "smooth",
  scrollSnapType: "x mandatory",
  "&::-webkit-scrollbar": { display: "none" },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  width: "100%",
  height: "100%",
});
export const ProjectCard = styled(Paper)(({ theme }) => ({
  minWidth: "100%", // هر کارت کل عرض رو بگیره مثل اسلایدر
  scrollSnapAlign: "center",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  borderRadius: "30px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  height:"100%",
}));
