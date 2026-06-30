'use client';

import { Box } from "@mui/material";
import Link from "next/link";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";

export default function Home() {
  const isJapanese = useLanguageToggle();
  const mainTitle = isJapanese ? "アート を求めない" : "NO QUIERO [ARTE =!]";
  const exploreText = isJapanese ? "ギャラリーを探索" : "EXPLORAR GALERÍA";
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: 'url(/images/splash/1.png)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Top Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          pt: { xs: 4, md: 6 },
          px: { xs: 3, md: 8 },
        }}
      >
        {/* Main Title */}
        <h1
          style={{
            fontSize: "clamp(3rem, 12vw, 7rem)",
            fontWeight: 900,
            margin: 0,
            letterSpacing: "-3px",
            lineHeight: 1,
            color: "#ff0000",
            textShadow: "4px 4px 12px rgba(0,0,0,0.7)",
          }}
        >
          {mainTitle}

        </h1>

        {/* Info Section - Left and Right with Line */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box>
            <p style={{ fontSize: "0.8rem", letterSpacing: "2px", margin: 0, color: "#fff" }}>
              OLEOS
            </p>
            <p style={{ fontSize: "0.8rem", letterSpacing: "1px", color: "#bbb", margin: "0.3rem 0 0 0" }}>
             -- DE 2026
            </p>
          </Box>

          {/* Divider Line */}
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "#fff",
              margin: "0 2rem",
            }}
          />

          <Box sx={{ textAlign: "right", whiteSpace: "nowrap" }}>
            <p style={{ fontSize: "0.8rem", letterSpacing: "1px", margin: 0, color: "#fff" }}>
              HDEZ ZUÑIGA
            </p>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section - Call to Action Arrow */}
      <Link href="/about" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            py: { xs: 4, md: 6 },
            px: { xs: 3, md: 8 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#e8e8e8",
            },
          }}
        >
          <Box />
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <p style={{ fontSize: "0.9rem", margin: 0, letterSpacing: "2px", color: "#666" }}>
              {exploreText}
            </p>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <p style={{ fontSize: "2rem", margin: 0, color: "#ff0000", fontWeight: "bold" }}>
              →
            </p>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
