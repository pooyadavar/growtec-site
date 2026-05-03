import React, { useRef } from "react";
import { Container, Typography, Box } from "@mui/material";
import { TeamWrapper, TeamScrollContainer, MemberCard, StyledAvatar } from "./TeamStyles";

// ایمپورت تصاویر
import akbari from "../../assets/images/akbari.jpg";
import javad from "../../assets/images/javad.jpg";
import kakaAli from "../../assets/images/kakaAli.jpg";
import mahdavi from "../../assets/images/mahdavi.jpg";
import nikfarjam from "../../assets/images/nikfarjam.jpg";
import sabokrooh from "../../assets/images/sabokrooh.jpg";
import seyed from "../../assets/images/seyed.jpg";
import shaban from "../../assets/images/shaban.jpg";
import yazdi from "../../assets/images/yazdi.jpg";
import bayani from "../../assets/images/bayani.jpg"

// چیدمان دقیق گرید ۴ ستونه (چپ به راست در کد، اما چون سایت راست‌چین است از راست چیده می‌شود)
const teamMembers = [
  // --- ردیف اول (۴ نفر کامل) ---
  { id: 5, name: "ایمان نیک‌فرجام", role: "مدیرعامل", image: nikfarjam },
  { id: 9, name: "محمد مهدی یزدی زاده", role: "مدیر اجرایی", image: yazdi },
  { id: 4, name: "محمد مهدی مهدوی", role: "مدیر منابع انسانی", image: mahdavi },
  { id: 7, name: "سید مجتبی یزدان پرست", role: "مدیر بخش تحقیق و توسعه", image: seyed },

  // --- ردیف دوم (۳ نفر + ۱ جای خالی) ---
  { id: 2, name: "جواد صفربیگی", role: "مدیر نصب", image: javad },
  { id: "empty-1", empty: true }, // فضای خالی زیر مدیر اجرایی
  { id: 3, name: "مهدی کاکاعلی", role: "مدیر فروش", image: kakaAli },
  { id: 6, name: "محمد سبک‌روح", role: "مدیر برندینگ و تولید محتوا", image: sabokrooh },

  // --- ردیف سوم (۳ نفر + ۱ جای خالی در ابتدا) ---
  { id: "empty-2", empty: true }, // فضای خالی زیر مدیر نصب
  { id: 1, name: "عرفان اکبری", role: "مدیر پشتیبانی", image: akbari },
  { id: 10, name: " محمدحسین بیانی", role: "کارشناس نصب و پشتیبانی", image: bayani }, 
  { id: 8, name: "محمدرضا شعبانعلی زاده", role: "مدیر تولید", image: shaban },
];

const TeamSection = ({ id }) => {
  const scrollRef = useRef(null);

  return (
    <TeamWrapper id={id}>
      <Container maxWidth="lg" >
        <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, mb: 1, textAlign: "center", color: "#fff" }}>
          تیم ما
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mb: { xs: 4, md: 8 }, textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
          متخصصین گروتک در کنار شما هستند
        </Typography>

        <TeamScrollContainer ref={scrollRef}>
          {teamMembers.map((member) => {
            // اگر آیتم از نوع "جای خالی" بود:
            // در دسکتاپ یک باکس خالی می‌سازد تا چیدمان حفظ شود، اما در موبایل مخفی می‌شود تا اسکرول افقی را زشت نکند.
            if (member.empty) {
              return <Box key={member.id} sx={{ display: { xs: "none", md: "block" } }} />;
            }

            return (
              <Box key={member.id} sx={{ minWidth: { xs: "170px", sm: "220px", md: "auto" } }}>
                <MemberCard>
                  <StyledAvatar 
                    src={member.image} 
                    alt={member.name} 
                    sx={{ 
                      objectFit: "cover",
                      boxShadow: "0 0 25px rgba(76, 175, 80, 0.3)" 
                    }}
                  />
                  <Typography variant="h5" sx={{ fontSize: { xs: "1.1rem", md: "1.2rem" }, fontWeight: 800, mb: 0.5, textAlign:"center" }}>
                    {member.name}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: { xs: "0.85rem", md: "1rem" }, color: "#4caf50", fontWeight: 600, textAlign:"center" }}>
                    {member.role}
                  </Typography>
                </MemberCard>
              </Box>
            );
          })}
        </TeamScrollContainer>
      </Container>
    </TeamWrapper>
  );
};

export default TeamSection;
