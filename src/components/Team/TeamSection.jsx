import React, { useRef } from "react";
import { Container, Typography, Box } from "@mui/material";
import { TeamWrapper, TeamScrollContainer, MemberCard, StyledAvatar } from "./TeamStyles";

// ایمپورت تصاویر از پوشه assets/images طبق Tree ارسالی
import akbari from "../../assets/images/akbari.jpg";
import javad from "../../assets/images/javad.jpg";
import kakaAli from "../../assets/images/kakaAli.jpg";
import mahdavi from "../../assets/images/mahdavi.jpg";
import nikfarjam from "../../assets/images/nikfarjam.jpg";
import sabokrooh from "../../assets/images/sabokrooh.jpg";
import seyed from "../../assets/images/seyed.jpg";
import shaban from "../../assets/images/shaban.jpg";
import yazdi from "../../assets/images/yazdi.jpg";

const teamMembers = [
  { id: 1, name: " عرفان اکبری", role: "مدیر پشتیبانی", image: akbari },
  { id: 2, name: " جواد صفربیگی", role:" مدیر نصب", image: javad },
  { id: 3, name: "مهدی کاکا علی ", role: "مدیر فروش", image: kakaAli },
  { id: 4, name: "محمد مهدی مهدوی", role: "مدیر منابع انسانی", image: mahdavi },
  { id: 5, name: "ایمان نیک‌فرجام", role: "مدیرعامل", image: nikfarjam },
  { id: 6, name: "محمد سبک‌روح", role: "مدیر برندینگ و تولید محتوا", image: sabokrooh },
  { id: 7, name: " سید مجتبی یزدان پرست", role: "مدیر بخش تحقیق و توسعه", image: seyed },
  { id: 8, name:"محمدرضا شعبانعلی زاده", role: "مدیر تولید", image: shaban },
  { id: 9, name: "محمپ مهدی یزدی زاده", role: "مدیر اجرایی", image: yazdi },
];

const TeamSection = () => {
  const scrollRef = useRef(null);

  return (
    <TeamWrapper>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, textAlign: "center", color: "#fff" }}>
          تیم ما
        </Typography>
        <Typography variant="h6" sx={{ mb: 8, textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
          متخصصین گروتک در کنار شما هستند
        </Typography>

        <TeamScrollContainer ref={scrollRef}>
          {teamMembers.map((member) => (
            <Box key={member.id} sx={{ minWidth: { xs: "280px", md: "auto" } }}>
              <MemberCard>
                <StyledAvatar 
                  src={member.image} 
                  alt={member.name} 
                  sx={{ 
                    objectFit: "cover",
                    // هاله نوری سبز دور آواتار مطابق طرح
                    boxShadow: "0 0 25px rgba(76, 175, 80, 0.3)" 
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography variant="h5" sx={{ color: "#4caf50", fontWeight: 600 }}>
                  {member.role}
                </Typography>
              </MemberCard>
            </Box>
          ))}
        </TeamScrollContainer>
      </Container>
    </TeamWrapper>
  );
};

export default TeamSection;