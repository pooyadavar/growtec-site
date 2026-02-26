import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { TourWrapper, VideoBackground, VideoOverlay, ContentContainer } from './VirtualTourStyles';

const videoSources = [
  '/videos/TourPreview02.mp4',
  '/videos/TourPreview02.mp4',
  '/videos/TourPreview02.mp4'
];

const VirtualTour = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleVideoEnd = () => {
    // رفتن به ویدیوی بعدی
    setCurrentIdx((prev) => (prev + 1) % videoSources.length);
  };

  return (
    <TourWrapper>
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
        <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, lineHeight: 1.5 }}>
          تور واقعیت مجازی <br /> اکوسیستم گروتک
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '50px',
            px: 6,
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1.1rem',
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