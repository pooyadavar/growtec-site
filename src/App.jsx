// src/App.jsx
import React from 'react';
import TopBarInfo from './components/common/TopBarInfo';
import Navbar from './components/common/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <TopBarInfo />
      <Navbar />
      <HeroSection />
      {/* اینجا بقیه صفحات و کامپوننت‌های شما قرار می‌گیرند */}
    </Box>
  );
}

export default App;