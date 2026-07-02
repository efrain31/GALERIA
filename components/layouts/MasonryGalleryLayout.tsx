"use client";

import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";
import LightboxModal from "@/components/LightboxModal";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useLightbox } from "@/hooks/useLightbox";
import { useLanguageToggle, translations } from "@/hooks/useLanguageToggle";
import { ImageData } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

interface MasonryGalleryLayoutProps {
  categoria: string;
  title: string;
  number: string;
  description: string;
  images: ImageData[];
  totalImages?: number;
  titleKey?: string;
}

interface ScrollAnimationRefs {
  [key: string]: IntersectionObserver;
}

export default function MasonryGalleryLayout({
  categoria,
  title,
  number,
  description,
  images,
  totalImages = 8,
  titleKey = "fullHavenHellTitle",
}: MasonryGalleryLayoutProps) {
  const imagesPerPage = 6;
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

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {

    // Crear Intersection Observer para scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "translateY(0) scale(1)";
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    // Observar todas las imágenes
    itemRefs.current.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px) scale(0.95)";
      observer.observe(element);
    });

    return () => {
      itemRefs.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [currentPage, currentImages]);

  // Calcular span de columnas y filas para efecto de escalera
  const getGridSpan = (index: number): { colSpan: number; rowSpan: number } => {
    const pattern = [
      { colSpan: 1, rowSpan: 1 }, // 0
      { colSpan: 2, rowSpan: 1 }, // 1
      { colSpan: 1, rowSpan: 1 }, // 2
      { colSpan: 1, rowSpan: 1 }, // 3
      { colSpan: 1, rowSpan: 1 }, // 4
      { colSpan: 1, rowSpan: 1 }, // 5
      { colSpan: 2, rowSpan: 2 }, // 6
      { colSpan: 1, rowSpan: 1 }, // 7
    ];
    return pattern[index % pattern.length];
  };

  return (
    <div suppressHydrationWarning style={{ backgroundColor: "#faf8f5", minHeight: "100vh", padding: "1.5rem 0" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box sx={{ mb: { xs: 8, md: 12 }, p: { xs: 1.5, md: 0 } }}>
          <h2
            style={{
              fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)",
              letterSpacing: "2px",
              color: "#ff0000",
              margin: "0 0 clamp(0.7rem, 2.5vw, 1rem) 0",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {displayTitle}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
              lineHeight: 1.8,
              color: "#2a2a2a",
              margin: 0,
            }}
          >
            {description}
          </p>
        </Box>

        {/* Masonry Grid */}
        <Box
          ref={containerRef}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gridAutoRows: "200px",
            gap: { xs: 1.5, md: 2 },
            gridAutoFlow: "dense",
            mb: { xs: 3, md: 4 },
          }}
        >
          {currentImages.map((image, index) => {
            const span = getGridSpan(index);
            return (
              <Box
                key={image.id}
                ref={(el: HTMLDivElement | null) => {
                  if (el) itemRefs.current.set(image.id, el);
                }}
                onClick={() => lightbox.openLightbox(image.id, image.src)}
                sx={{
                  gridColumn: { xs: "span 1", md: `span ${span.colSpan}` },
                  gridRow: { xs: "span 1", md: `span ${span.rowSpan}` },
                  position: "relative",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  opacity: 0,
                  transform: "translateY(30px) scale(0.95)",
                  "&:hover": {
                    transform: "scale(1.05) translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                  overflow: "hidden",
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
        </Box>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              mt: { xs: 2, md: 3 },
              p: { xs: 1.5, md: 0 },
              mb: { xs: 3, md: 6 },
            }}
          >
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
      </Container>

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

      <ScrollToTopButton />
    </div>
  );
}
