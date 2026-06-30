"use client";

import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";
import LightboxModal from "@/components/LightboxModal";
import { useLightbox } from "@/hooks/useLightbox";

interface TwoColumnLayoutProps {
  title: string;
  tagline: string;
  description: string;
}

export default function TwoColumnLayout({
  title,
  tagline,
  description,
}: TwoColumnLayoutProps) {
  const lightbox = useLightbox();

  return (
    <Box sx={{ backgroundColor: "#faf8f5", minHeight: "100vh", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "start",
          }}
        >
          {/* Left Column - Title and Description */}
          <Box>
            <h2
              style={{
                fontSize: "0.85rem",
                letterSpacing: "2px",
                color: "#ff0000",
                margin: "0 0 2rem 0",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {title}
            </h2>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                color: "#ff0000",
                margin: "0 0 2rem 0",
                fontWeight: 900,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
              }}
            >
              {tagline}
            </h1>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#2a2a2a",
                margin: 0,
                maxWidth: "500px",
              }}
            >
              {description}
            </p>
          </Box>

          {/* Right Column - Images */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            {[1, 2, 3, 4].map((item) => (
              <Box
                key={item}
                onClick={() => lightbox.openLightbox(item)}
                sx={{
                  width: "100%",
                  paddingBottom: "100%",
                  position: "relative",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: `url(/images/galeria/${item}.png)`,
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
