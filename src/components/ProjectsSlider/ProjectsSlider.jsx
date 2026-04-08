import React, { useState, useRef, useEffect, useCallback } from "react";
import { Typography, Container, Box } from "@mui/material";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const index = Math.round(scrollLeft / el.clientWidth);
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < maxScroll - 10);
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, projects]);

  const handleSlide = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const sign = direction === "next" ? -1 : 1;
    el.scrollBy({ left: sign * el.clientWidth, behavior: "smooth" });
  };

  const goToIndex = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: -i * el.clientWidth, behavior: "smooth" });
  };

  const NavButton = ({ direction, disabled, onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: { xs: "auto", md: "50%" }, // <--- تنظیم فلش‌ها وسط ارتفاع کارت
        transform: { xs: "none", md: "translateY(-50%)" },
        bottom: { xs: "-60px", md: "auto" },
        ...(direction === "prev"
          ? { right: { xs: "calc(50% - 60px)", md: "-60px" } }
          : { left: { xs: "calc(50% - 60px)", md: "-60px" } }),
        zIndex: 10,
        width: 48,
        height: 48,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.2 : 1,
        transition: "all 0.3s ease",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "#fff",
        "&:hover": !disabled && {
          background: "rgba(255,255,255,0.18)",
          transform: { xs: "scale(1.1)", md: "translateY(-50%) scale(1.1)" },
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        },
      }}
    >
      {direction === "prev" ? (
        <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
      ) : (
        <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
      )}
    </Box>
  );

  return (
    <ProjectsWrapper>
      <Container maxWidth="lg" sx={{ position: "relative", overflow: "visible" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 6,
            textAlign: "center",
            color: "#fff",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            letterSpacing: "-0.5px",
          }}
        >
          آخرین پروژه‌ها
        </Typography>

        <Box sx={{ position: "relative" }}>
          <NavButton
            direction="prev"
            disabled={!canScrollPrev}
            onClick={() => handleSlide("prev")}
          />
          <NavButton
            direction="next"
            disabled={!canScrollNext}
            onClick={() => handleSlide("next")}
          />

          <ScrollContainer ref={scrollRef}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ minWidth: "100%", px: { xs: 2, md: 0 } }}>
                <ProjectCard 
                  elevation={0}
                  sx={{
                    padding: "0 !important",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "stretch",
                    height: { xs: "auto", md: "400px" } // <--- ارتفاع کنترل و محدود شد (می‌توانید عدد 400 را بسته به سلیقه تغییر دهید)
                  }}
                >

                  {/* Text Section - 50% */}
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      padding: { xs: 3, md: 4 },
                      textAlign: "left",
                      direction: "ltr",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        mb: { xs: 2, md: 3 },
                        fontSize: { xs: "1.5rem", md: "2.2rem" },
                        background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {project.clientName}
                    </Typography>

                    {[
                      { label: "استان", value: project.province },
                      { label: "متراژ", value: project.area },
                      { label: "محصول", value: project.product },
                    ].map(({ label, value }) => (
                      <Typography
                        key={label}
                        variant="h5"
                        sx={{
                          fontSize: { xs: "0.95rem", md: "1.1rem" },
                          mb: 0.5,
                          color: "rgba(255,255,255,0.85)",
                          display: "flex",
                          gap: 1,
                        }}
                      >
                        <Box component="span" sx={{ color: "rgba(255,255,255,0.45)", minWidth: 60 }}>
                          {label}
                        </Box>
                        {value}
                      </Typography>
                    ))}

                    <Typography
                      sx={{
                        mt: 2,
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.8,
                        fontSize: { xs: "0.875rem", md: "0.95rem" },
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        pt: 2,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                  {/* Image Section - 50% */}
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: { xs: "250px", md: "100%" }, // در موبایل 250px و در دسکتاپ تمام ارتفاع
                      position: "relative",
                      overflow: "hidden",
                      "&:hover img": {
                        transform: "scale(1.08)",
                      },
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.clientName}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.6s ease",
                      }}
                    />
                  </Box>

                </ProjectCard>
              </Box>
            ))}
          </ScrollContainer>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: { xs: 8, md: 4 } }}>
          {projects.map((_, i) => (
            <Box
              key={i}
              onClick={() => goToIndex(i)}
              sx={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === activeIndex ? "#fff" : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": { background: "rgba(255,255,255,0.7)" },
              }}
            />
          ))}
        </Box>
      </Container>
    </ProjectsWrapper>
  );
};

export default ProjectsSlider;
