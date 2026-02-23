// src/theme/index.js
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import palette from './palette';
import typography from './typography';

// ایجاد cache برای RTL
export const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl', // مهم برای راست چین کردن
  palette,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        /* اینجا میتونی استایل های گلوبال دیگه ای بنویسی */
        body {
          direction: rtl; /* مطمئن میشیم که بادی هم rtl هست */
        }
      `,
    },
  },
});

export default theme;