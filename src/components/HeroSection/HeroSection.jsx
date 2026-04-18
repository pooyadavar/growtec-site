// src/components/HeroSection/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { Typography, Fade, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  HeroWrapper,
  BackgroundGradient,
  ContentBox,
  ImageBox,
  DescriptionBox,
  FloatingContainer,
  RelativeWrapper,
  PointerImage,
  FeatureCard,
} from "./HeroSectionStyles";
import greenhouseImage from "../../assets/svg/ecosystem growtec.svg";
import circlePointer from "../../assets/svg/Circle Pointer.svg";

const HeroSection = () => {
  const pointersData = [
    {
      id: 1,
      position: {
        xs: { top: "40%", left: "29%" },
        sm: { top: "40%", left: "29%" },
        md: { top: "40%", left: "29%" },
      },
      title: "سیستم دوزینگ",
      desc: "تزریق دقیق و زمان‌بندی شده مواد مغذی به سیستم آبیاری با دقت میلی‌لیتر.",
    },
    {
      id: 2,
      position: {
        xs: { top: "39%", left: "63%" },
        sm: { top: "39%", left: "63%" },
        md: { top: "39%", left: "63%" },
      },
      title: "سنسورهای اقلیم",
      desc: "پایش لحظه‌ای دما، رطوبت و میزان CO2 برای ایجاد شرایط ایده‌آل رشد.",
    },
    {
      id: 3,
      position: {
        xs: { top: "59.5%", left: "40.5%" },
        sm: { top: "59.5%", left: "40.5%" },
        md: { top: "59.5%", left: "40.5%" },
      },
      title: "کنترلرهای آبیاری",
      desc: "مدیریت هوشمند شیرهای برقی بر اساس نیاز گیاه و رطوبت بستر کشت.",
    },
    {
      id: 4,
      position: {
        xs: { top: "50%", left: "57%" },
        sm: { top: "50%", left: "57%" },
        md: { top: "50%", left: "57%" },
      },
      title: "سیستم تهویه",
      desc: "فرمان اتوماتیک به فن‌ها و پدها برای جلوگیری از تنش حرارتی گیاهان.",
    },
    {
      id: 5,
      position: {
        xs: { top: "53%", left: "71%" },
        sm: { top: "53%", left: "71%" },
        md: { top: "53%", left: "71%" },
      },
      title: "مخازن استوک",
      desc: "پشتیبانی تا ۱۲ مخزن مجزا برای فرمولاسیون‌های پیچیده کود دهی.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % pointersData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [pointersData.length]);

  return (
    <HeroWrapper>
      <BackgroundGradient />

      <ContentBox>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            // 🟢 سایزها کمی فشرده‌تر شدند
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
        >
          سیستم هوشمند
          <br />
          تغذیه و کنترل اقلیم
        </Typography>
        {!isMobile && (
          <DescriptionBox>
            <Typography
              variant="h6"
              sx={{
                lineHeight: { xs: 1.5, md: 1.75 },
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
              }}
            >
              سیستم گرولاین از شرکت گروتک با آنالیز لحظه‌ای پارامترهای تغذیه و اقلیم، امکان شخصی‌سازی کامل متناسب با تجهیزات گلخانه شما را فراهم می‌کند. همچنین دارای مکانیزم دوزینگ ماژولار قابل ارتقا تا ۱۲ استوک بوده و قابلیت کنترل و مدیریت از راه دور را ارائه می‌دهد.
            </Typography>
          </DescriptionBox>
        )}
      </ContentBox>

      <ImageBox>
        <FloatingContainer>
          <RelativeWrapper>
            <img
              src={greenhouseImage}
              alt="سیستم هوشمند گلخانه"
              className="main-image"
            />

            {/* ✅ رینگ‌ها با sx برای هر breakpoint */}
            {pointersData.map((pointer, index) => {
              const isActive = index === activeIndex;
              return (
                <PointerImage
                  key={pointer.id}
                  src={circlePointer}
                  alt="پوینتر"
                  className={isActive ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    top: {
                      xs: pointer.position.xs.top,
                      sm: pointer.position.sm.top,
                      md: pointer.position.md.top,
                    },
                    left: {
                      xs: pointer.position.xs.left,
                      sm: pointer.position.sm.left,
                      md: pointer.position.md.left,
                    },
                  }}
                />
              );
            })}

            {/* ✅ کارت توضیحات */}
            <Fade in={true} key={activeIndex} timeout={800}>
              <FeatureCard>
                <Typography
                  variant="h6"
                  sx={{ color: "#02846A", fontWeight: "bold", mb: 1 }}
                >
                  {pointersData[activeIndex].title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#E0E0E0", lineHeight: 1.8 }}
                >
                  {pointersData[activeIndex].desc}
                </Typography>
              </FeatureCard>
            </Fade>
          </RelativeWrapper>
        </FloatingContainer>
      </ImageBox>
    </HeroWrapper>
  );
};

export default HeroSection;
