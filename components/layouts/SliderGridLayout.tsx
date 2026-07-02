"use client";

import { Box, Container } from "@mui/material";
import LightboxModal from "@/components/LightboxModal";
import { useLightbox } from "@/hooks/useLightbox";
import BackArrow from "@/components/BackArrow";
import { useState } from "react";

interface SliderGridLayoutProps {
  categoria: string;
  title: string;
  description: string;
  totalImages?: number;
  columnsPerRow?: number;
}

export default function SliderGridLayout({
  categoria,
  title,
  description,
  totalImages = 9,
  columnsPerRow = 3,
}: SliderGridLayoutProps) {
  const imagesPerPage = columnsPerRow * columnsPerRow;
  const totalPages = Math.ceil(totalImages / imagesPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const lightbox = useLightbox();

  const startIndex = currentPage * imagesPerPage;
  const currentImages = Array.from({ length: imagesPerPage }, (_, i) => startIndex + i + 1).filter(
    (num) => num <= totalImages
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <Box sx={{ backgroundColor: "#faf8f5", minHeight: "100vh", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        {/* Header with Title */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 6 }}>
          <h2
            style={{
              fontSize: "0.85rem",
              letterSpacing: "2px",
              color: "#ff0000",
              margin: 0,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {title}
          </h2>
        </Box>

        {/* Image Grid with Controls */}
        <Box sx={{ position: "relative", mb: 4 }}>
          {/* Image Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: `repeat(${columnsPerRow}, 1fr)` },
              gap: 3,
              mb: 4,
            }}
          >
            {currentImages.map((imageNum) => (
              <Box
                key={imageNum}
                onClick={() => lightbox.openLightbox(imageNum)}
                sx={{
                  width: "100%",
                  paddingBottom: "100%",
                  position: "relative",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: `url(/images/galeria/${imageNum}.png)`,
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
                gap: 4,
              }}
            >
              <button
                onClick={handlePrev}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  color: "#ff0000",
                  cursor: "pointer",
                  fontWeight: "bold",
                  padding: "0.5rem 1rem",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                ←
              </button>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#2a2a2a",
                  margin: 0,
                  fontWeight: 600,
                  letterSpacing: "2px",
                }}
              >
                {currentPage + 1} / {totalPages}
              </p>

              <button
                onClick={handleNext}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  color: "#ff0000",
                  cursor: "pointer",
                  fontWeight: "bold",
                  padding: "0.5rem 1rem",
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
      </Container>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.lightboxOpen}
        imageUrl={`/images/galeria/${lightbox.selectedImage}.png`}
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
    </Box>
  );
}
