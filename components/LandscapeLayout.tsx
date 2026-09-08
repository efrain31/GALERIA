'use client';

import { Box, Container } from "@mui/material";
import Link from "next/link";
import BackArrow from "@/components/BackArrow";
import LightboxModal from "@/components/LightboxModal";
import { useLightbox } from "@/hooks/useLightbox";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";

interface LandscapeLayoutProps {
  id: string;
  title: string;
  description: string;
}

export default function LandscapeLayout({ id, title, description }: LandscapeLayoutProps) {
  const lightbox = useLightbox();
  const isJapanese = useLanguageToggle();
  const workWithMeText = isJapanese ? "一緒に働きましょう →" : "WORK WITH ME →";
  const totalImages = 12;

  return (
    <Box sx={{ backgroundColor: "#2a2a2a", minHeight: "100vh", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Header with Back Arrow */}
        <Box sx={{ mb: 6, display: "flex", justifyContent: "flex-start" }}>
          <BackArrow href="/galeria" text="_ VOLVER _" color="#ff0000" />
        </Box>

        {/* Main Layout Grid - Large Image + Title */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
            mb: 8,
          }}
        >
          {/* Left - Large Image with Lightbox */}
          <Box
            onClick={() => lightbox.openLightbox(1)}
            sx={{
              width: "100%",
              height: { xs: "300px", md: "500px" },
              backgroundColor: "#444",
              borderRadius: "4px",
              backgroundImage: "url(/images/galeria/1.png)",
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

          {/* Right - Content */}
          <Box>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 10vw, 4rem)",
                fontWeight: 900,
                margin: "0 0 1rem 0",
                color: "#ff0000",
                lineHeight: 1.1,
              }}
            >
              {id}
            </h2>

            <h3
              style={{
                fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
                fontWeight: 900,
                margin: "0 0 2rem 0",
                color: "#ff0000",
                letterSpacing: "2px",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#ccc",
                lineHeight: 1.8,
                margin: "0 0 2rem 0",
                fontWeight: 400,
              }}
            >
              {description}
            </p>

            {/* Work With Me Link */}
            <Link href="/galeria/contact" style={{ textDecoration: "none" }}>
              <Box sx={{ display: "inline-block" }}>
                <p
                  style={{
                    fontSize: "3.5rem",
                    color: "#ff0000",
                    textDecoration: "none",
                    borderBottom: "5px solid #ff0000",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    margin: 0,
                    paddingBottom: "1.5rem",
                    cursor: "pointer",
                    lineHeight: 1.2,
                  }}
                >
                  {workWithMeText}
                </p>
              </Box>
            </Link>
          </Box>
        </Box>

        {/* Gallery Grid - Rest of images */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 4,
          }}
        >
          {Array.from({ length: totalImages - 1 }, (_, i) => i + 2).map((imageNum) => (
            <Box
              key={imageNum}
              onClick={() => lightbox.openLightbox(imageNum)}
              sx={{
                width: "100%",
                paddingBottom: "100%",
                position: "relative",
                backgroundColor: "#444",
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
