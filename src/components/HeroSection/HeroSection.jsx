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
import greenhouseImage from "../../assets/svg/ecosystem growtec.png";
import circlePointer from "../../assets/svg/Circle Pointer.svg";

const GROUPED_POINTER_IDS = [1, 2, 4, 5];
const GROUPED_CONTENT = {
  title: "سیستم هوشمند و یکپارچه کنترل اقلیم",
  desc: "سیستم کنترل اقلیم GRC با قابلیت کنترل دما، رطوبت گلخانه و بستر کشت، نور، سرعت و جهت باد، اکسیژن و کربن دی اکسید و کربن مونواکسید و به کار گیری الگوریتم های پیشرفته و مدرن کنترلی، می تواند نگاهبان مناسبی برای شرایط محیطی گلخانه شما باشد. با اتصال این سیستم به برق گلخانه میتوان تمامی عملگرهای گفته شده را با استفاده از الگوریتم های هوشمند و یا به صورت دستی کنترل کرد. این دستگاه را می توان به صورت پکیج در کنار دستگاه کنترل تغذیه و یا به صورت تکی نصب و استفاده کرد.",
};

const HeroSection = () => {
  const pointersData = [
    {
      id: 1,
      position: {
        xs: { top: "32.5%", left: "25.5%" },
        sm: { top: "32.5%", left: "25.5%" },
        md: { top: "32.5%", left: "25.5%" },
      },
      title: "سیستم دوزینگ",
      desc: "تزریق دقیق و زمان‌بندی شده مواد مغذی به سیستم آبیاری با دقت میلی‌لیتر.",
    },
    {
      id: 2,
      position: {
        xs: { top: "32%", left: "61.5%" },
        sm: { top: "32%", left: "61.5%" },
        md: { top: "32%", left: "61.5%" },
      },
      title: "سنسورهای اقلیم",
      desc: "پایش لحظه‌ای دما، رطوبت و میزان CO2 برای ایجاد شرایط ایده‌آل رشد.",
    },
    {
      id: 3,
      position: {
        xs: { top: "66.5%", left: "38%" },
        sm: { top: "66.5%", left: "38%" },
        md: { top: "66.5%", left: "38%" },
      },
      title: "کنترلرهای آبیاری",
      desc: "مدیریت هوشمند شیرهای برقی بر اساس نیاز گیاه و رطوبت بستر کشت.",
    },
    {
      id: 4,
      position: {
        xs: { top: "50%", left: "55.5%" },
        sm: { top: "50%", left: "55.5%" },
        md: { top: "50%", left: "55.5%" },
      },
      title: "سیستم تهویه",
      desc: "فرمان اتوماتیک به فن‌ها و پدها برای جلوگیری از تنش حرارتی گیاهان.",
    },
    {
      id: 5,
      position: {
        xs: { top: "55%", left: "70%" },
        sm: { top: "55%", left: "70%" },
        md: { top: "55%", left: "70%" },
      },
      title: "مخازن استوک",
      desc: "پشتیبانی تا ۱۲ مخزن مجزا برای فرمولاسیون‌های پیچیده کود دهی.",
    },
    {
      id: 6,
      position: {
        xs: { top: "47%", left: "76%" },
        sm: { top: "47%", left: "76%" },
        md: { top: "47%", left: "76%" },
      },
      title: "مخازن استوک",
      desc: "پشتیبانی تا ۱۲ مخزن مجزا برای فرمولاسیون‌های پیچیده کود دهی.",
    },
    {
      id: 7,
      position: {
        xs: { top: "38%", left: "16%" },
        sm: { top: "38%", left: "16%" },
        md: { top: "38%", left: "16%" },
      },
      title: "مخازن استوک",
      desc: "پشتیبانی تا ۱۲ مخزن مجزا برای فرمولاسیون‌های پیچیده کود دهی.",
    },
  ];

  // IDs that represent distinct states for the timer and content
  const cycleIds = [GROUPED_POINTER_IDS[0], 3, 6, 7]; // Use the first grouped ID to represent the group
  const [activeId, setActiveId] = useState(cycleIds[0]); // Initialize with the first ID in the cycle (group)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId((prevActiveId) => {
        const currentIndex = cycleIds.indexOf(prevActiveId);
        const nextIndex = (currentIndex + 1) % cycleIds.length;
        return cycleIds[nextIndex];
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [cycleIds]); // Dependency on cycleIds

  // Helper function to check if an ID is part of the grouped IDs
  const isGroupedPointer = (id) => GROUPED_POINTER_IDS.includes(id);

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
              سیستم گرولاین از شرکت گروتک با آنالیز لحظه‌ای پارامترهای تغذیه و
              اقلیم، امکان شخصی‌سازی کامل متناسب با تجهیزات گلخانه شما را فراهم
              می‌کند. همچنین دارای مکانیزم دوزینگ ماژولار قابل ارتقا تا ۱۲ استوک
              بوده و قابلیت کنترل و مدیریت از راه دور را ارائه می‌دهد.
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
              style={{ scale: "0.9" }}
            />

            {/* ✅ رینگ‌ها با sx برای هر breakpoint */}
            {pointersData.map((pointer) => {
              const isActive = isGroupedPointer(pointer.id)
                ? isGroupedPointer(activeId)
                : pointer.id === activeId;
              return (
                <PointerImage
                  key={pointer.id}
                  src={circlePointer}
                  alt="پوینتر"
                  className={isActive ? "active" : ""}
                  onClick={() =>
                    setActiveId(
                      isGroupedPointer(pointer.id)
                        ? GROUPED_POINTER_IDS[0]
                        : pointer.id
                    )
                  }
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
            <Fade in={true} key={activeId} timeout={800}>
              <FeatureCard>
                <Typography
                  variant="h6"
                  sx={{ color: "#02846A", fontWeight: "bold", mb: 1 }}
                >
                  {isGroupedPointer(activeId)
                    ? GROUPED_CONTENT.title
                    : pointersData.find((p) => p.id === activeId)?.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#E0E0E0", lineHeight: 1.8 }}
                >
                  {isGroupedPointer(activeId)
                    ? GROUPED_CONTENT.desc
                    : pointersData.find((p) => p.id === activeId)?.desc}
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
