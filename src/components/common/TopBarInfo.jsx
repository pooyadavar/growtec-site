import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const topItems = [
  {
    id: 1,
    title: "آدرس",
    value: "تهران خیابان آزادی خیابان حبیب الله نبش کوچه مجلسی پلاک ۲",
    Icon: LocationOnIcon,
    href: "https://maps.google.com/?q=تهران+خیابان+آزادی+خیابان+حبیب+الله+پلاک+۲",
  },
  {
    id: 2,
    title: "تماس",
    value: "۰۲۱۸۲۸۰۳۸۷۴",
    Icon: PhoneIcon,
    href: "tel:02182803874",
  },
  {
    id: 3,
    title: "ایمیل",
    value: "irgrowtech@gmail.com",
    Icon: EmailIcon,
    href: "mailto:irgrowtech@gmail.com",
  }
];

const TopBarInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#f8faff',
        borderBottom: '1px solid #eee',
        flexWrap: 'wrap',
        gap: { xs: 4, sm: 5, md: 6 }, 
        direction: 'ltr' // تنظیم جهت به چپ‌به‌راست دقیقاً طبق خواسته تو
      }}
    >
      {topItems.map((item) => (
        <Stack
          key={item.id}
          direction="row"
          spacing={2}
          alignItems="center"
          component="a" 
          href={item.href}
          target={item.id === 1 ? "_blank" : "_self"}
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none', 
            color: 'inherit',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          {/* کادر لوزی شکل آیکون - در LTR اولین آیتم سمت چپ است */}
          <Box
            sx={{
              width: { xs: "45px", md: "40px" }, 
              height: { xs: "45px", md: "40px" },
              minWidth: { xs: "45px", md: "40px" }, // جلوگیری از جمع شدن باکس
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              transform: 'rotate(45deg)',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              flexShrink: 0 // جلوگیری از رفتن متن به داخل لوزی
            }}
          >
            <item.Icon
              sx={{
                transform: 'rotate(-45deg)',
                color: '#4caf50',
                fontSize: { xs: '1.4rem', md: '1.2rem' }
              }}
            />
          </Box>

          {/* بخش متن - در LTR سمت راست آیکون قرار می‌گیرد */}
          <Box
            sx={{
              textAlign: 'left', // متن چپ‌چین برای همگامی با LTR
              display: { xs: 'none', md: 'block' }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 800, color: '#333' }}>
              {item.title}
            </Typography>
            <Typography variant="caption" sx={{ color: '#666', display: 'block' }}>
              {item.value}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default TopBarInfo;