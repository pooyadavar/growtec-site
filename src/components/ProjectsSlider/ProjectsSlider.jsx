import React, { useState, useRef, useEffect, useCallback } from "react";
import { Typography, Container, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  ProjectsWrapper,
  ProjectCard,
  ScrollContainer,
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

  const handleSlide = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const sign = direction === "next" ? -1 : 1;
    el.scrollBy({ left: sign * el.clientWidth, behavior: "smooth" });
  }, []);

  const goToIndex = useCallback((i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: -i * el.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex >= projects.length - 1) {
        goToIndex(0);
      } else {
        handleSlide("next");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, projects.length, handleSlide, goToIndex]);

  const NavButton = ({ direction, disabled, onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        display: { xs: "none", md: "flex" },
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        ...(direction === "prev" ? { right: "-60px" } : { left: "-60px" }),
        zIndex: 10,
        width: 48,
        height: 48,
        borderRadius: "50%",
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
          transform: "translateY(-50%) scale(1.1)",
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
            mb: { xs: 4, md: 6 },
            textAlign: "center",
            color: "#fff",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            letterSpacing: "-0.5px",
          }}
        >
          آخرین پروژه‌ها
        </Typography>

        <Box sx={{ position: "relative" }}>
          <NavButton direction="prev" disabled={!canScrollPrev} onClick={() => handleSlide("prev")} />
          <NavButton direction="next" disabled={!canScrollNext} onClick={() => handleSlide("next")} />

          <ScrollContainer ref={scrollRef}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ minWidth: "100%", px: { xs: 1, md: 0 } }}>
                <ProjectCard 
                  elevation={0}
                  sx={{
                    padding: "0 !important",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "stretch",
                    height: { xs: "280px", sm: "300px", md: "400px" }, // ارتفاع برای جا شدن متن در موبایل کمی بیشتر شد
                    position: "relative"
                  }}
                >
                  {/* بخش متن دسکتاپ - در موبایل مخفی می‌شود */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      width: "50%",
                      padding: 4,
                      textAlign: "left",
                      direction: "ltr",
                      color: "#fff",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        fontSize: "2.2rem",
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
                        sx={{ fontSize: "1.1rem", mb: 0.5, color: "rgba(255,255,255,0.85)", display: "flex", gap: 1 }}
                      >
                        <Box component="span" sx={{ color: "rgba(255,255,255,0.45)", minWidth: 60 }}>
                          {label}
                        </Box>
                        {value}
                      </Typography>
                    ))}

                    <Typography
                      sx={{ mt: 2, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.95rem", borderTop: "1px solid rgba(255,255,255,0.1)", pt: 2 }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  {/* بخش تصویر */}
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.clientName}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    
                    {/* ✅ نمایش اسم پروژه و جزئیات روی عکس، فقط در موبایل */}
                    <Box
                      sx={{
                        display: { xs: "flex", md: "none" },
                        position: "absolute",
                        bottom: 0, left: 0, right: 0,
                        padding: "30px 16px 16px 16px",
                        background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end", // راست‌چین
                        direction: "rtl", // برای متون فارسی
                      }}
                    >
                      <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
                        {project.clientName}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, width: "100%" }}>
                        {[
                          { label: "استان", value: project.province },
                          { label: "متراژ", value: project.area },
                          { label: "محصول", value: project.product },
                        ].map(({ label, value }) => (
                          <Typography
                            key={label}
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", display: "flex", gap: 1 }}
                          >
                            <Box component="span" sx={{ color: "rgba(255,255,255,0.5)" }}>
                              {label}:
                            </Box>
                            {value}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                </ProjectCard>
              </Box>
            ))}
          </ScrollContainer>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: { xs: 4, md: 4 } }}>
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
              }}
            />
          ))}
        </Box>
      </Container>
    </ProjectsWrapper>
  );
};

export default ProjectsSlider;
