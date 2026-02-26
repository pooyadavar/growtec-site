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
  { id: 1, title: "پروژه های در دست اجرا", value: 15, icon: icon3 },
  { id: 2, title: "پروژه های تکمیل شده", value: 79, icon: icon4 },
  { id: 3, title: "استان های پیاده شده", value: 20, icon: icon2 },
  { id: 4, title: "ثبت اختراع", value: 5, icon: icon1 },
];

const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const StatsSection = () => {
  // استفاده از این هوک برای تشخیص اینکه کاربر به این بخش رسیده یا نه
  const { ref, inView } = useInView({
    triggerOnce: true, // فقط یک بار انیمیشن اجرا شود
    threshold: 0.2, // وقتی ۲۰ درصد بخش دیده شد شروع کن
  });

  return (
    <StatsWrapper ref={ref}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-around">
          {statData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <StatItem>
                <IconWrapper>
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ scale: "1.2" }}
                  />
                </IconWrapper>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      formattingFn={(value) => `+${e2p(value)}`} // تبدیل عدد به فارسی و اضافه کردن پلاس
                      useEasing={true}
                    />
                  ) : (
                    `+${e2p(item.value)}`
                  )}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, opacity: 0.9 }}
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
