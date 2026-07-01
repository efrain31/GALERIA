'use client';

import { Box } from "@mui/material";
import Link from "next/link";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";
import { aboutInfo } from "@/lib/data";

export default function About() {
  const isJapanese = useLanguageToggle();
  const galleryText = isJapanese ? "ギャラリーへ" : "IR _ ALERÍA";
  const bioText = isJapanese ? aboutInfo.bioJa : aboutInfo.bio;
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: aboutInfo.backgroundColor }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: "100vh",
        }}
      >
        {/* Left Section - Dark Background with Photo */}
        <Box
          sx={{
            backgroundColor: aboutInfo.profileBackgroundColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, md: 0 },
            minHeight: { xs: "400px", md: "auto" },
          }}
        >
          <Box
            sx={{
              width: { xs: "220px", md: "300px" },
              height: { xs: "220px", md: "300px" },
              borderRadius: "50%",
              backgroundColor: "#b0b0b0",
              backgroundImage: `url(${aboutInfo.profileImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            }}
          />
        </Box>

        {/* Right Section - Content */}
        <Box
          sx={{
            backgroundColor: aboutInfo.backgroundColor,
            p: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            position: "relative",
          }}
        >
          {/* Arrow Link - Top Right */}
          <Link href="/galeria" style={{ textDecoration: "none", position: "absolute", top: "2rem", right: "2rem" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer" }}>
              <p style={{ fontSize: "0.75rem", margin: 0, letterSpacing: "1px", color: "#ff0000", fontWeight: 600 }}>
                {galleryText}
              </p>
              <p style={{ fontSize: "1.5rem", margin: 0, color: "#ff0000", fontWeight: "bold" }}>
                →
              </p>
            </Box>
          </Link>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(1.8rem, 7vw, 3.8rem)",
              color: "#ff0000",
              margin: "0 0 0.2rem 0",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            {aboutInfo.name}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                marginLeft: "0.3em",
              }}
            >
              {aboutInfo.nameItalic}
            </span>
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "clamp(0.75rem, 3vw, 0.85rem)",
              letterSpacing: "3px",
              color: "#666",
              margin: "0 0 1.5rem 0",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {aboutInfo.title}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.85rem, 4vw, 0.95rem)",
              lineHeight: 1.8,
              color: "#2a2a2a",
              margin: "0 0 1.5rem 0",
              maxWidth: "500px",
            }}
          >
            {bioText}
          </p>

          {/* Divider Line */}
          <Box sx={{ borderBottom: "1.5px solid #2a2a2a", my: 2 }} />

          {/* Contact Info */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, md: 5 },
              mt: 2,
            }}
          >
            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                📞
              </Box>
              <a href={`tel:${aboutInfo.phone.replace(/\s+/g, "")}`} style={{ margin: 0, fontSize: "0.9rem", color: "#2a2a2a", textDecoration: "none" }}>
                {aboutInfo.phone}
              </a>
            </Box>

            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                ✉️
              </Box>
              <a href={`mailto:${aboutInfo.email}`} style={{ margin: 0, fontSize: "0.9rem", color: "#2a2a2a", textDecoration: "none" }}>
                {aboutInfo.email}
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
