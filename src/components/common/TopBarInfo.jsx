import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const TopItem = ({ title, value, Icon }) => (
  <Stack  direction="row"  spacing={2} gap={2} alignItems="center" sx={{ direction: 'rtl' }}>
    <Box sx={{ textAlign: 'left' }} >
      <Typography variant="body1" sx={{ fontWeight: 800, color: '#333' }}>
        {title}
      </Typography>
      <Typography variant="caption" sx={{ color: '#666', display: 'block' }}>
        {value}
      </Typography>
    </Box>
    {/* آیکون لوزی شکل */}
    <Box
      sx={{
        width: 38,
        height: 38,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        transform: 'rotate(45deg)', // چرخاندن باکس برای ایجاد شکل لوزی
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
      }}
    >
      <Icon 
        sx={{ 
          transform: 'rotate(-45deg)', // برگرداندن آیکون به حالت عمودی
          color: '#4caf50', 
          fontSize: '1.2rem' 
        }} 
      />
    </Box>
  </Stack>
);

const TopBarInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
        px: 4,
        backgroundColor: '#f8faff', // رنگ پس‌زمینه متمایل به آبی بسیار روشن مطابق عکس
        borderBottom: '1px solid #eee',
        flexWrap: 'wrap',
        gap: 6,
        direction: 'ltr' // تنظیم جهت راست به چپ برای کل باکس
      }}
    >
      <TopItem 
        title="آدرس" 
        value="تهران خیابان آزادی خیابان حبیب الله نبش کوچه مجلسی پلاک ۲" 
        Icon={LocationOnIcon} 
      />
      <TopItem 
        title="با ما تماس بگیرید" 
        value="۰۲۱۸۲۸۰۳۸۷۴" 
        Icon={PhoneIcon} 
      />
      <TopItem 
        title="آدرس ایمیل" 
        value="irgrowtech@gmail.com" 
        Icon={EmailIcon} 
      />
    </Box>
  );
};

export default TopBarInfo;