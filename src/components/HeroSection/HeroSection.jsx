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
  TabsContainer,
  TabButton,
  ContentCard,
  ContentTitle,
  ContentDescription,
} from "./HeroSectionStyles";
import greenhouseImage from "../../assets/svg/ecosystem growtec.png";
import circlePointer from "../../assets/svg/Circle Pointer.svg";

const GROUPED_POINTER_IDS = [1, 2, 4, 5];
// این آرایه ثابت است، پس باید بیرون از کامپوننت تعریف شود
const cycleIds = [GROUPED_POINTER_IDS[0], 3, 6, 7];

const GROUPED_CONTENT = {
  title: "گرو کامپکت",
  desc: "سیستم تجمیع شده هوشمند کنترل اقلیم و آبیاری گلخانه که با سنجش لحظه‌ای دما، رطوبت، CO2، نور و باد، شرایط بهینه رشد را به‌طور خودکار حفظ می‌کند. این دستگاه ضمن کنترل فن‌ها، هیترها و آبیاری بر اساس نیاز واقعی گیاه، تا ۲۰٪ عملکرد محصول را افزایش و ۳۰٪ مصرف آب را کاهش می‌دهد.",
};

const pointersData = [
  {
    id: 1,
    position: {
      xs: { top: "32.3%", left: "25.8%" },
      sm: { top: "32.3%", left: "25.8%" },
      md: { top: "32.3%", left: "25.8%" },
    },
    title: "سیستم دوزینگ",
    desc: "تزریق دقیق و زمان‌بندی شده مواد مغذی به سیستم آبیاری با دقت میلی‌لیتر.",
  },
  {
    id: 2,
    position: {
      xs: { top: "31.3%", left: "61.8%" },
      sm: { top: "31.3%", left: "61.8%" },
      md: { top: "31.3%", left: "61.8%" },
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
    title: "گروزون",
    desc: "یک سامانه ماژولار و قابل گسترش برای ضدعفونی و بازیافت زه آب گلخانه‌های هیدروپونیک است. این دستگاه با تولید اُزُن محلول و تزریق آن از طریق پمپ ودتکس دوفازی، پاتوژن‌های آب را از بین می‌برد و آب را به چرخه آبیاری بازمی‌گرداند.",
  },
  {
    id: 4,
    position: {
      xs: { top: "49.8%", left: "55.3%" },
      sm: { top: "49.8%", left: "55.3%" },
      md: { top: "49.8%", left: "55.3%" },
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
      xs: { top: "46.5%", left: "76.3%" },
      sm: { top: "46.5%", left: "76.3%" },
      md: { top: "46.5%", left: "76.3%" },
    },
    title: "گرو کامپکت",
    desc: "سیستم تجمیع شده هوشمند کنترل اقلیم و آبیاری گلخانه که با سنجش لحظه‌ای دما، رطوبت، CO2، نور و باد، شرایط بهینه رشد را به‌طور خودکار حفظ می‌کند. این دستگاه ضمن کنترل فن‌ها، هیترها و آبیاری بر اساس نیاز واقعی گیاه، تا ۲۰٪ عملکرد محصول را افزایش و ۳۰٪ مصرف آب را کاهش می‌دهد.",
  },
  {
    id: 7,
    position: {
      xs: { top: "38.5%", left: "16.3%" },
      sm: { top: "38.5%", left: "16.3%" },
      md: { top: "38.5%", left: "16.3%" },
    },
    title: "گرولاین",
    desc: "سیستم کنترل هوشمند هیدروپونیک(گرولاین) محصولی از گروتک است که عملیات تهیه محلول غذایی ایده‌آل برای کشت هیدروپونیک، آبیاری و کنترل اقلیم گلخانه را به صورت کاملا اتوماتیک و بدون نیاز به نیروی انسانی انجام می‌دهد. در این خدمت گروتک از سیستم Batch Dosing استفاده می‌شود. همچنین در این سیستم ماژول‌های پایش، کنترل اقلیم و تغذیه می‌تواند به صورت یکپارچه تحت یک پکیج در اختیار کاربر قرار گیرد.",
  },
];

const HeroSection = ({ id }) => {
  const [activeId, setActiveId] = useState(cycleIds[0]);
  const [isPaused, setIsPaused] = useState(false); // کنترل وضعیت توقف تایمر

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // اگر کاربر در حال Hover است، تایمر اجرا نشود
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveId((prevActiveId) => {
        const currentIndex = cycleIds.indexOf(prevActiveId);
        // اگر آیتم فعلی در چرخه نیست (مثلا کاربر روی آیتمی کلیک کرده که در سیکل نیست)، به آیتم اول برگردد
        if (currentIndex === -1) return cycleIds[0];
        
        const nextIndex = (currentIndex + 1) % cycleIds.length;
        return cycleIds[nextIndex];
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]); // اضافه شدن isPaused به dependency array

  const isGroupedPointer = (pointerId) => GROUPED_POINTER_IDS.includes(pointerId);

  const activePointer = isGroupedPointer(activeId)
    ? GROUPED_CONTENT
    : pointersData.find((p) => p.id === activeId);

  return (
    <HeroWrapper id={id}>
      <BackgroundGradient />

      <ContentBox>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.1rem" },
            fontWeight: "bold",
            lineHeight: 1.2,
            textAlign: "center",
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
                lineHeight: { xs: 1.2, md: 1.5 },
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              سیستم کنترل اقلیم GRC با قابلیت کنترل دما، رطوبت گلخانه و بستر
              کشت، نور، سرعت و جهت باد، اکسیژن و کربن دی‌اکسید و کربن مونواکسید
              و به کارگیری الگوریتم‌های پیشرفته و مدرن کنترلی، می‌تواند نگاهبان
              مناسبی برای شرایط محیطی گلخانه شما باشد. با اتصال این سیستم به برق
              گلخانه می‌توان تمامی عملگرهای گفته شده را با استفاده از
              الگوریتم‌های هوشمند و یا به صورت دستی کنترل کرد. این دستگاه را
              می‌توان به صورت پکیج در کنار دستگاه کنترل تغذیه و یا به صورت تکی
              نصب و استفاده کرد.
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
                  // اضافه شدن رویدادهای ماوس برای توقف و تغییر توضیحات
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveId(
                      isGroupedPointer(pointer.id)
                        ? GROUPED_POINTER_IDS[0]
                        : pointer.id
                    );
                  }}
                  onMouseLeave={() => setIsPaused(false)}
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
          </RelativeWrapper>
        </FloatingContainer>

        <Fade in={true} key={activeId} timeout={600}>
          <ContentCard>
            <ContentTitle variant="h6">{activePointer?.title}</ContentTitle>
            <ContentDescription variant="body1">
              {activePointer?.desc}
            </ContentDescription>
          </ContentCard>
        </Fade>
      </ImageBox>
    </HeroWrapper>
  );
};

export default HeroSection;