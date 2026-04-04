import React, { useState, useRef, useEffect, useCallback } from "react";
import { Typography, Container, Box, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  ProjectsWrapper,
  ProjectCard,
  ScrollContainer,
  CustomNavButton,
} from "./ProjectsSliderStyles";

const ProjectsSlider = ({ projects }) => {
  const scrollRef = useRef(null);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      const scrollLeft = Math.abs(el.scrollLeft);
      const maxScroll = el.scrollWidth - el.clientWidth;
      setCanScrollPrev(scrollLeft > 10); // با تلورانس ۱۰ پیکسل
      setCanScrollNext(scrollLeft < maxScroll - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll, projects]);

  const handleSlide = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = el.clientWidth; // اسکرول به اندازه عرض کامل کانتینر
      // در حالت RTL اسکرول به چپ منفی است
      const sign = direction === "next" ? -1 : 1;
      el.scrollBy({ left: sign * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <ProjectsWrapper>
      <Container
        maxWidth="lg"
        sx={{ position: "relative", overflow: "visible" }}
      >
        <Typography
          variant="h3"
          sx={{ 
            fontWeight: 900, 
            mb: 6, 
            textAlign: "center", 
            color: "#fff",
            fontSize: { xs: '2rem', md: '3rem' } // Responsive font size
          }}
        >
          آخرین پروژه‌ ها
        </Typography>

        {/* دکمه قبلی (راست در RTL) */}
        <CustomNavButton
          onClick={() => handleSlide("prev")}
          sx={{
            right: { xs: "0px", md: "-80px" },
            opacity: canScrollPrev ? 1 : 0.3,
            top: { xs: "50%", md: "300px" }, // Adjusted for mobile
          }}
        >
          <ArrowBackIosNewIcon />
        </CustomNavButton>

        {/* دکمه بعدی (چپ در RTL) */}
        <CustomNavButton
          onClick={() => handleSlide("next")}
          sx={{
            left: { xs: "0px", md: "-80px" },
            opacity: canScrollNext ? 1 : 0.3,
            top: { xs: "50%", md: "300px" }, // Adjusted for mobile
          }}
        >
          <ArrowForwardIosIcon />
        </CustomNavButton>

        <ScrollContainer ref={scrollRef}>
          {projects.map((project, index) => (
            <Box key={index} sx={{ minWidth: "100%", px: { xs: 2, md: 0 }   }}>
              <ProjectCard elevation={0}>
                <Box
                  sx={{
                    flex: 1,
                    "& img": {
                      width: "100%",
                      borderRadius: "25px",
                      height: { xs: "200px", md: "350px" }, // Responsive image height
                      objectFit: "cover",
                    },
                  }}
                >
                  <img src={project.image} alt={project.clientName} />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    direction: "ltr",
                    color: "#fff",
                    pr: { md: 4 },
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800, 
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '2.5rem' } // Responsive font size
                    }}
                  >
                    {project.clientName}
                  </Typography>
                  <Typography 
                    variant="h5"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} // Responsive font size
                  >
                    استان : {project.province}
                  </Typography>
                  <Typography 
                    variant="h5"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} // Responsive font size
                  >
                    متراژ : {project.area}
                  </Typography>
                  <Typography 
                    variant="h5"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} // Responsive font size
                  >
                    محصول : {project.product}
                  </Typography>
                  <Typography sx={{ mt: 2, color: "#ccc", lineHeight: 1.8, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                    {project.description}
                  </Typography>
                </Box>
              </ProjectCard>
            </Box>
          ))}
        </ScrollContainer>
      </Container>
    </ProjectsWrapper>
  );
};

export default ProjectsSlider;
