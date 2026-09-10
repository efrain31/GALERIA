"use client";

import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";
import LightboxModal from "@/components/LightboxModal";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useLightbox } from "@/hooks/useLightbox";
import { useLanguageToggle, translations } from "@/hooks/useLanguageToggle";
import { ImageData } from "@/lib/data";
import { useState } from "react";

interface NoemiLayoutProps {
  categoria: string;
  title: string;
  number: string;
  description: string;
  images: ImageData[];
  totalImages?: number;
  titleKey?: string;
  corriente?: string;
  tecnica?: string;
  materiales?: string;
}

export default function NoemiLayout({
  categoria,
  title,
  number,
  description,
  images,
  totalImages = 8,
  titleKey = "noemiTitle",
  corriente,
  tecnica,
  materiales,
}: NoemiLayoutProps) {
  const imagesPerPage = 2;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const lightbox = useLightbox();
  const isJapanese = useLanguageToggle();

  const displayTitle = isJapanese ? (translations[titleKey]?.ja || title) : (translations[titleKey]?.en || title);

  const startIndex = currentPage * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div suppressHydrationWarning style={{ backgroundColor: "#faf8f5", minHeight: "100vh", padding: "1.5rem 0" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box sx={{ mb: { xs: 8, md: 12 }, p: { xs: 1.5, md: 0 } }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 4rem)",
              letterSpacing: "2px",
              color: "#ff0000",
              margin: "0 0 0.5rem 0",
              fontWeight: 900,
            }}
          >
            {number}
          </h1>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 12vw, 5rem)",
              letterSpacing: "2px",
              color: "#ff0000",
              margin: "0 0 clamp(1.5rem, 3vw, 2rem) 0",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.9,
            }}
          >
            {displayTitle}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.85rem, 4vw, 0.95rem)",
              lineHeight: 1.8,
              color: "#2a2a2a",
              margin: 0,
            }}
          >
            {description}
          </p>

          {(corriente || tecnica || materiales) && (
            <Box sx={{ mt: 2 }}>
              {corriente && (
                <p
                  style={{
                    fontSize: "clamp(0.75rem, 2.2vw, 0.85rem)",
                    lineHeight: 1.6,
                    color: "#2a2a2a",
                    margin: "0.3rem 0",
                  }}
                >
                  Corriente: {corriente}
                </p>
              )}
              {tecnica && (
                <p
                  style={{
                    fontSize: "clamp(0.75rem, 2.2vw, 0.85rem)",
                    lineHeight: 1.6,
                    color: "#2a2a2a",
                    margin: "0.3rem 0",
                  }}
                >
                  Tecnica: {tecnica}
                </p>
              )}
              {materiales && (
                <p
                  style={{
                    fontSize: "clamp(0.75rem, 2.2vw, 0.85rem)",
                    lineHeight: 1.6,
                    color: "#2a2a2a",
                    margin: "0.3rem 0",
                  }}
                >
                  Materiales: {materiales}
                </p>
              )}
            </Box>
          )}
        </Box>

        {/* Large Images Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2, md: 3 },
            mb: { xs: 4, md: 4 },
          }}
        >
          {currentImages.map((image) => (
            <Box
              key={image.id}
              onClick={() => lightbox.openLightbox(image.id, image.src)}
              sx={{
                width: "100%",
                paddingBottom: "70%",
                position: "relative",
                backgroundColor: "#d0d0d0",
                borderRadius: "4px",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "&:hover": {
                  transform: "scale(1.15)",
                },
                overflow: "hidden",
              }}
            />
          ))}
        </Box>

        {/* Navigation Controls */}
        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: { xs: 4, md: 8 },
              px: { xs: 2, md: 0 },
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                backgroundColor: "transparent",
                border: "2px solid #ff0000",
                color: "#ff0000",
                padding: "0.75rem 1.5rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ff0000";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ff0000";
              }}
            >
              ← PREV
            </button>

            <span style={{ color: "#2a2a2a", fontSize: "0.9rem", fontWeight: 600 }}>
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              style={{
                backgroundColor: "transparent",
                border: "2px solid #ff0000",
                color: "#ff0000",
                padding: "0.75rem 1.5rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ff0000";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ff0000";
              }}
            >
              NEXT →
            </button>
          </Box>
        )}

        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <ScrollToTopButton />
        </Box>
      </Container>

      <LightboxModal lightbox={lightbox} />
    </div>
  );
}
