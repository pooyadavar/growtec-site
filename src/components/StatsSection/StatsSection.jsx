import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { StatsWrapper, StatItem, IconWrapper } from "./StatsSectionStyles";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import icon1 from "../../assets/svg/Icons (4).svg";
import icon2 from "../../assets/svg/Icons (3).svg";
import icon3 from "../../assets/svg/Icons (2).svg";
import icon4 from "../../assets/svg/Icons (1).svg";

const statData = [
  { id: 1, title: "پروژه های در دست اجرا", value: 12, icon: icon3 },
  { id: 2, title: "پروژه های تکمیل شده", value: 106, icon: icon4 },
  { id: 3, title: "استان های پیاده شده", value: 30, icon: icon2 },
  { id: 4, title: "ثبت اختراع", value: 5, icon: icon1 },
];

const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <StatsWrapper ref={ref}>
      <Container maxWidth="lg">
        {/* فاصله را در موبایل کمتر کردیم تا آیتم‌ها بهتر جا شوند */}
        <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="space-around">
          {statData.map((item) => (
            // ✅ تغییر xs={12} به xs={6} برای نمایش دوتایی در موبایل
            <Grid item xs={6} sm={6} md={3} key={item.id}>
              <StatItem>
                <IconWrapper>
                  <img
                    src={item.icon}
                    alt={item.title}
                  />
                </IconWrapper>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 900, 
                    mb: { xs: 0.5, md: 1 }, 
                    // سایز فونت عدد برای موبایل بهینه شد
                    fontSize: { xs: '1.4rem', sm: '2rem', md: '3rem' } 
                  }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      formattingFn={(value) => `+${e2p(value)}`}
                      useEasing={true}
                    />
                  ) : (
                    `+${e2p(item.value)}`
                  )}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontWeight: 500, 
                    opacity: 0.9, 
                    // سایز فونت عنوان برای حالت دوتایی موبایل کوچکتر شد تا دو خطی نشود
                    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.125rem' } 
                  }}
                >
                  {item.title}
                </Typography>
              </StatItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StatsWrapper>
  );
};

export default StatsSection;
