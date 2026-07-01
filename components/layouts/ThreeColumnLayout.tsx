"use client";

import { Box, Container } from "@mui/material";
import LightboxModal from "@/components/LightboxModal";
import { useLightbox } from "@/hooks/useLightbox";
import BackArrow from "@/components/BackArrow";
import { useLanguageToggle, translations } from "@/hooks/useLanguageToggle";
import { ImageData } from "@/lib/data";

interface ThreeColumnLayoutProps {
  categoria: string;
  title: string;
  number: string;
  description: string;
  images: ImageData[];
  titleKey?: string;
}

export default function ThreeColumnLayout({
  categoria,
  title,
  number,
  description,
  images,
  titleKey = "eventTitle",
}: ThreeColumnLayoutProps) {
  const lightbox = useLightbox();
  const isJapanese = useLanguageToggle();

  const displayTitle = isJapanese ? (translations[titleKey]?.ja || title) : (translations[titleKey]?.en || title);

  return (
    <div suppressHydrationWarning style={{ backgroundColor: "#faf8f5", minHeight: "100vh", padding: "1.5rem 0" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1fr 1fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* Left Column */}
          <Box>
            {images[0] && (
              <Box
                onClick={() => lightbox.openLightbox(images[0].id, images[0].src)}
                sx={{
                  width: "100%",
                  paddingBottom: "120%",
                  position: "relative",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: `url(${images[0].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                  overflow: "hidden",
                  mb: 3,
                }}
              />
            )}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {images.slice(1, 3).map((image) => (
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
          </Box>

          {/* Center Column */}
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 12vw, 5rem)",
                color: "#ff0000",
                margin: "0 0 0.5rem 0",
                fontWeight: 900,
                letterSpacing: "-2px",
                lineHeight: 0.9,
              }}
            >
              {number}
            </h1>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                color: "#ff0000",
                margin: "0 0 2rem 0",
                fontWeight: 900,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              {displayTitle}
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#2a2a2a",
                margin: 0,
              }}
            >
              {description}
            </p>
          </Box>

          {/* Right Column */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {images.slice(3, 5).map((image, index) => (
              <Box
                key={image.id}
                onClick={() => lightbox.openLightbox(image.id, image.src)}
                sx={{
                  width: "100%",
                  paddingBottom: index === 0 ? "80%" : "100%",
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
