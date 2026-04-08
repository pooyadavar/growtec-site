// src/components/HeroSection/HeroSectionStyles.js
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

// تعریف انیمیشن شناوری
const floatingAnimation = keyframes`
  0%, 100% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(10px, -12px);
  }
  50% {
    transform: translate(-10px, -20px);
  }
  75% {
    transform: translate(10px, -12px);
  }
`;

export const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#1A1A1A",
  minHeight: "calc(100vh - 80px)",
  display: "flex",
  direction: "ltr",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    minHeight: "80vh",
    marginTop: theme.spacing(1),
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
    width: "45%",
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
    maxHeight: "70vh",
    objectFit: "contain",
    display: "block",
    animation: `${floatingAnimation} 12s ease-in-out infinite`,
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
  backgroundColor: "rgba(128, 128, 128, 0.3)", 
  padding: theme.spacing(2),
  borderRadius: "16px",
  marginTop: theme.spacing(2),
  opacity: 1, 
  textAlign: "center",
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
