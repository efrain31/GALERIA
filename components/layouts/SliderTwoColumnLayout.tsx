"use client";

import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";
import LightboxModal from "@/components/LightboxModal";
import { useLightbox } from "@/hooks/useLightbox";
import { useLanguageToggle, translations } from "@/hooks/useLanguageToggle";
import { ImageData } from "@/lib/data";
import { useState } from "react";

interface SliderTwoColumnLayoutProps {
  categoria: string;
  title: string;
  tagline: string;
  description: string;
  images: ImageData[];
  totalImages?: number;
  titleKey?: string;
  taglineKey?: string;
}

export default function SliderTwoColumnLayout({
  categoria,
  title,
  tagline,
  description,
  images,
  totalImages = 12,
  titleKey = "portraitTitle",
  taglineKey = "portraitTagline",
}: SliderTwoColumnLayoutProps) {
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const lightbox = useLightbox();
  const isJapanese = useLanguageToggle();

  const displayTitle = isJapanese ? (translations[titleKey]?.ja || title) : (translations[titleKey]?.en || title);
  const displayTagline = isJapanese ? (translations[taglineKey]?.ja || tagline) : (translations[taglineKey]?.en || tagline);

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
        <Box sx={{ mb: 6 }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2, md: 8 },
            alignItems: "start",
            p: { xs: 1.5, md: 0 },
          }}
        >
          {/* Left Column - Title and Description */}
          <Box sx={{ pr: { xs: 0, md: 2 } }}>
            <h2
              style={{
                fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)",
                letterSpacing: "2px",
                color: "#ff0000",
                margin: "0 0 clamp(1rem, 4vw, 2rem) 0",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {displayTitle}
            </h2>

            <h1
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                color: "#ff0000",
                margin: "0 0 clamp(1rem, 4vw, 2rem) 0",
                fontWeight: 900,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
              }}
            >
              {displayTagline}
            </h1>

            <p
              style={{
                fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
                lineHeight: 1.8,
                color: "#2a2a2a",
                margin: 0,
                maxWidth: "500px",
              }}
            >
              {description}
            </p>
          </Box>

          {/* Right Column - Gallery Grid with Slider */}
          <Box sx={{ px: { xs: 0, md: 0 } }}>
            {/* Image Grid - 3x2 */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                gap: { xs: 1.5, md: 2 },
                mb: { xs: 3, md: 4 },
              }}
            >
              {currentImages.map((image) => (
                <Box
                  key={image.id}
                  onClick={() => lightbox.openLightbox(image.id, image.src)}
                  sx={{
                    width: "100%",
                    paddingBottom: "100%",
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
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 2, md: 4 },
                  mt: { xs: 2, md: 3 },
                }}
              >
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "clamp(1.2rem, 5vw, 2rem)",
                    color: "#ff0000",
                    cursor: "pointer",
                    fontWeight: "bold",
                    padding: "clamp(0.3rem, 1vw, 1rem) clamp(0.5rem, 2vw, 1rem)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  ←
                </button>

                {/* Page Indicator */}
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 2.5vw, 1.1rem)",
                    color: "#2a2a2a",
                    margin: 0,
                    fontWeight: 600,
                    letterSpacing: "2px",
                  }}
                >
                  {currentPage + 1} / {totalPages}
                </p>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "clamp(1.2rem, 5vw, 2rem)",
                    color: "#ff0000",
                    cursor: "pointer",
                    fontWeight: "bold",
                    padding: "clamp(0.3rem, 1vw, 1rem) clamp(0.5rem, 2vw, 1rem)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  →
                </button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.lightboxOpen}
        imageUrl={lightbox.imageSrc || ""}
        imageAlt={`Imagen ${lightbox.selectedImage}`}
        zoom={lightbox.zoom}
        pan={lightbox.pan}
        isDragging={lightbox.isDragging}
        containerRef={lightbox.containerRef}
        imageRef={lightbox.imageRef}
        onClose={lightbox.closeLightbox}
        onZoomIn={lightbox.zoomIn}
        onZoomOut={lightbox.zoomOut}
        onReset={lightbox.resetView}
        onMouseDown={lightbox.handleMouseDown}
        onMouseMove={lightbox.handleMouseMove}
        onMouseUp={lightbox.handleMouseUp}
        onMouseLeave={lightbox.handleMouseUp}
        MAX_ZOOM={lightbox.MAX_ZOOM}
        MIN_ZOOM={lightbox.MIN_ZOOM}
      />
    </div>
  );
}
