import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { TourWrapper, VideoBackground, VideoOverlay, ContentContainer } from './VirtualTourStyles';

const videoSources = [
  '/videos/TourPreview02.mp4',
  '/videos/TourPreview02.mp4',
  '/videos/TourPreview02.mp4'
];

const VirtualTour = ({ id }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleVideoEnd = () => {
    // رفتن به ویدیوی بعدی
    setCurrentIdx((prev) => (prev + 1) % videoSources.length);
  };

  return (
    <TourWrapper id={id}>
      <VideoBackground 
        key={currentIdx} // این خط باعث می‌شه با تغییر ویدیو، المان رفرش بشه
        autoPlay 
        muted 
        onEnded={handleVideoEnd} 
        playsInline
      >
        <source src={videoSources[currentIdx]} type="video/mp4" />
      </VideoBackground>

      <VideoOverlay />

      <ContentContainer>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 900, 
            mb: { xs: 2, sm: 3, md: 4 }, // فاصله کمتر در موبایل
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }, // خطوط جمع‌وجورتر در موبایل
            fontSize: { xs: '1.4rem', sm: '2.2rem', md: '3rem' } // سایز مناسب برای موبایل
          }}
        >
          تور واقعیت مجازی <br /> اکوسیستم گروتک
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '50px',
            px: { xs: 4, md: 6 }, // پدینگ کمتر در موبایل
            py: { xs: 1, md: 1.5 },
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', md: '1.1rem' }, // فونت دکمه متناسب با موبایل
            '&:hover': { backgroundColor: '#f0f0f0' }
          }}
        >
          ورود به تور
        </Button>
      </ContentContainer>
    </TourWrapper>
  );
};

export default VirtualTour;
