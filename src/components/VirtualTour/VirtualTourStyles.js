import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const TourWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '99.5vh', // تمام صفحه
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});


export const VideoBackground = styled('video')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'translate(-50%, -50%)',
  zIndex: 0,
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: '#fff',
  padding: theme.spacing(2),
}));


export const VideoOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  /* لایه تاریک با تمرکز روی اضلاع بالا و پایین */
  background: `
    radial-gradient(
      ellipse 40% 45% at center, /* بیضی افقی: عدد دوم (50%) باعث می‌شود بالا و پایین زودتر مشکی شوند */
      rgba(26, 26, 26, 0.5) 20%,     /* مرکز کاملاً شفاف‌تر */
      rgba(26, 26, 26, 0.9) 80%,    /* شروع تدریجی سایه */
      rgba(26, 26, 26, 0.9) 30%,    /* غلظت بالای سایه در نزدیک لبه‌ها */
      rgba(26, 26, 26, 1) 100%               /* مشکی مطلق در تمام اضلاع و گوشه‌ها */
    )
  `,
});