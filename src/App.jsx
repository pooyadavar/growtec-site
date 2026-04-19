// src/App.jsx
import React from "react";
import TopBarInfo from "./components/common/TopBarInfo";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { Box } from "@mui/material";
import VirtualTour from "./components/VirtualTour/VirtualTour";
import StatsSection from "./components/StatsSection/StatsSection";
import ProjectsSlider from "./components/ProjectsSlider/ProjectsSlider";
import TeamSection from "./components/Team/TeamSection";
import Footer from "./components/layout/Footer";

const myProjects = [
  {
    clientName: "جناب آقای مهندس تهرانی فرد",
    province: "خراسان رضوی شهرستان چناران",
    area: "۴۰۰۰ متر",
    product: "گل رز خوشه ای",
    description: "پیاده سازی سیستم تغذیه و کنترل اقلیم گروتک",
    // عکس دمو با کیفیت بالا برای تست
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop",
  },
  {
    clientName: "پروژه نمونه دوم",
    province: "تهران - دماوند",
    area: "۲۵۰۰ متر",
    product: "توت فرنگی هیدروپونیک",
    description: "سیستم هوشمند پایش خاک و رطوبت",
    image:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    clientName: "پروژه نمونه سوم",
    province: "اصفهان - تیران",
    area: "۵۰۰۰ متر",
    product: "فلفل دلمه رنگی",
    description: "اتوماسیون کامل پنجره‌ها و شیدینگ",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    clientName: "پروژه نمونه چهارم",
    province: "مازندران - ساری",
    area: "۱۰۰۰ متر",
    product: "صیفی‌جات",
    description: "کنترلر مرکزی سری G4",
    image:
      "https://images.unsplash.com/photo-1505235687559-28b5f54645b7?q=80&w=1000&auto=format&fit=crop",
  },
];
function App() {
  const handleScrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <TopBarInfo />
      <Navbar onScrollToSection={handleScrollToSection} />
      <HeroSection id="hero-section" />
      <VirtualTour id="virtual-tour-section" />
      <StatsSection />
      <ProjectsSlider id="projects-section" projects={myProjects} />
      <TeamSection id="about-us-section" />
      <Footer id="contact-us-section" />
      {/* اینجا بقیه صفحات و کامپوننت‌های شما قرار می‌گیرند */}
    </Box>
  );
}

export default App;
