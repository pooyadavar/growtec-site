// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { Typography } from '@mui/material';
import { HeroWrapper, BackgroundGradient, ContentBox, ImageBox, DescriptionBox } from './HeroSectionStyles';
import greenhouseImage from '../../assets/svg/ecosystem growtec.svg'; // تصویر گلخانه

const HeroSection = () => {
  return (
    <HeroWrapper>
      <BackgroundGradient /> {/* پس زمینه گرادیانت */}

      <ContentBox>
        <Typography variant="h2" gutterBottom>
          سیستم هوشمند
          <br />
          تغذیه و کنترل اقلیم
        </Typography>
        <DescriptionBox>
          <Typography variant="h6">
            سیستم گرولاین از شرکت گروتک با آنالیز لحظه‌ای پارامترهای تغذیه و اقلیم، امکان شخصی‌سازی کامل متناسب با تجهیزات گلخانه شما را فراهم می‌کند. همچنین دارای مکانیزم دوزینگ ماژولار قابل ارتقا تا ۱۲ استوک بوده و قابلیت کنترل و مدیریت از راه دور را ارائه می‌دهد.
          </Typography>
        </DescriptionBox>
      </ContentBox>

      <ImageBox>
        <img src={greenhouseImage} alt="سیستم هوشمند گلخانه" />
      </ImageBox>


      
    </HeroWrapper>
  );
};

export default HeroSection;