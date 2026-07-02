"use client";
import { Box, Container } from "@mui/material";
import LightboxModal from "@/components/LightboxModal";
import { useLightbox } from "@/hooks/useLightbox";
import BackArrow from "@/components/BackArrow";

interface FourImageLayoutProps {
  categoria: string;
  title: string;
  description: string;
}

export default function FourImageLayout({
  title,
  description,
}: FourImageLayoutProps) {
  const lightbox = useLightbox();
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

        {/* Image Grid - 2 rows x 2 columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mb: 6,
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <Box
              key={item}
                onClick={() => lightbox.openLightbox(item)}
              sx={{
                width: "100%",
                paddingBottom: "56.25%",
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

        {/* Description */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#2a2a2a",
            margin: 0,
          }}
        >
          {description}
        </p>
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
