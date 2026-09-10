'use client';

import { Box, Container } from '@mui/material';
import BackArrow from '@/components/BackArrow';
import LightboxModal from '@/components/LightboxModal';
import VideoHero from '@/components/VideoHero';
import AboutSection from '@/components/AboutSection';
import TripleSlider from '@/components/TripleSlider';
import DualImageSection from '@/components/DualImageSection';
import HorizontalSlider from '@/components/HorizontalSlider';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useLightbox } from '@/hooks/useLightbox';
import { useLanguageToggle, translations } from '@/hooks/useLanguageToggle';
import { ImageData } from '@/lib/data';
import { useState } from 'react';

interface ShotHeartsLayoutProps {
  categoria: string;
  title: string;
  number: string;
  description: string;
  images: ImageData[];
  totalImages?: number;
  titleKey?: string;
  videoSrc?: string;
  aboutTitle?: string;
  aboutDescription?: string;
  aboutImage?: string;
  aboutQuotes?: Array<{ text: string; author: string }>;
  sliderTitle?: string;
  sliderTitleKey?: string;
  dualImages?: {
    left: { src: string; alt: string };
    right: { src: string; alt: string };
  };
  horizontalSliders?: Array<{
    images: ImageData[];
    title?: string;
    titleKey?: string;
    direction: 'left' | 'right';
  }>;
  corriente?: string;
  tecnica?: string;
  materiales?: string;
}

export default function ShotHeartsLayout({
  categoria,
  title,
  number,
  description,
  images,
  totalImages = 8,
  titleKey = 'shotHeartsTitle',
  videoSrc,
  aboutTitle,
  aboutDescription,
  aboutImage,
  aboutQuotes,
  sliderTitle,
  sliderTitleKey,
  dualImages,
  horizontalSliders,
  corriente,
  tecnica,
  materiales,
}: ShotHeartsLayoutProps) {
  const imagesPerPage = 4;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const lightbox = useLightbox();
  const isJapanese = useLanguageToggle();

  const displayTitle = isJapanese
    ? translations[titleKey]?.ja || title
    : translations[titleKey]?.en || title;

  const displayHorizontalTitle = isJapanese
    ? translations['shotHeartsTitle']?.ja
    : translations['shotHeartsTitle']?.en;

  const startIndex = currentPage * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Prepare slider images (divide images into 3 groups)
  const sliderImages: [ImageData[], ImageData[], ImageData[]] = [
    images.filter((_, i) => i % 3 === 0),
    images.filter((_, i) => i % 3 === 1),
    images.filter((_, i) => i % 3 === 2),
  ];

  return (
    <div
      suppressHydrationWarning
      style={{ backgroundColor: '#faf8f5', minHeight: '100vh', padding: '1.5rem 0' }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box sx={{ mb: { xs: 8, md: 12 }, p: { xs: 1.5, md: 0 } }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              letterSpacing: '2px',
              color: '#ff0000',
              margin: '0 0 0.5rem 0',
              fontWeight: 900,
            }}
          >
            {number}
          </h1>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 5rem)',
              letterSpacing: '2px',
              color: '#ff0000',
              margin: '0 0 clamp(1.5rem, 3vw, 2rem) 0',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 0.9,
            }}
          >
            {displayTitle}
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
              lineHeight: 1.8,
              color: '#2a2a2a',
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
                    fontSize: 'clamp(0.75rem, 2.2vw, 0.85rem)',
                    lineHeight: 1.6,
                    color: '#2a2a2a',
                    margin: '0.3rem 0',
                  }}
                >
                  Corriente: {corriente}
                </p>
              )}
              {tecnica && (
                <p
                  style={{
                    fontSize: 'clamp(0.75rem, 2.2vw, 0.85rem)',
                    lineHeight: 1.6,
                    color: '#2a2a2a',
                    margin: '0.3rem 0',
                  }}
                >
                  Tecnica: {tecnica}
                </p>
              )}
              {materiales && (
                <p
                  style={{
                    fontSize: 'clamp(0.75rem, 2.2vw, 0.85rem)',
                    lineHeight: 1.6,
                    color: '#2a2a2a',
                    margin: '0.3rem 0',
                  }}
                >
                  Materiales: {materiales}
                </p>
              )}
            </Box>
          )}
        </Box>
      </Container>

      {/* Video Hero Section */}
      {videoSrc && (
        <VideoHero videoSrc={videoSrc} />
      )}

      {/* About Section */}
      {aboutTitle && aboutDescription && aboutImage && (
        <AboutSection
          title={aboutTitle}
          description={aboutDescription}
          imageSrc={aboutImage}
          quotes={aboutQuotes}
        />
      )}

      {/* Dual Image Section */}
      {dualImages && (
        <DualImageSection
          leftImage={dualImages.left}
          rightImage={dualImages.right}
        />
      )}

      {/* Triple Slider Section */}
      {sliderImages[0].length > 0 && (
        <TripleSlider
          sliders={sliderImages}
          title={sliderTitle}
          titleKey={sliderTitleKey}
          autoPlaySpeed={5000}
        />
      )}

      {/* Horizontal Sliders Section */}
      {horizontalSliders && horizontalSliders.length > 0 && (
        <>
          <Box sx={{ mb: { xs: 4, md: 6 }, p: { xs: 1.5, md: 0 } }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 12vw, 5rem)',
                fontWeight: 900,
                color: '#ff0000',
                margin: 0,
                letterSpacing: '-2px',
                lineHeight: 0.9,
              }}
            >
              {displayHorizontalTitle}
            </h2>
          </Box>
          {horizontalSliders.map((slider, idx) => (
            <HorizontalSlider
              key={idx}
              images={slider.images}
              direction={slider.direction}
              title={slider.title}
              titleKey={slider.titleKey}
              autoPlaySpeed={3000}
            />
          ))}
        </>
      )}

      {/* Main Grid Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 1.5, md: 3 },
            mb: { xs: 3, md: 4 },
            p: { xs: 1.5, md: 0 },
          }}
        >
          {currentImages.map((image) => (
            <Box
              key={image.id}
              onClick={() => lightbox.openLightbox(image.id, image.src)}
              sx={{
                width: '100%',
                paddingBottom: '70%',
                position: 'relative',
                backgroundColor: '#d0d0d0',
                borderRadius: '4px',
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                '&:hover': {
                  transform: 'scale(1.15)',
                },
                overflow: 'hidden',
              }}
            />
          ))}
        </Box>

        {totalPages > 1 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              mt: { xs: 2, md: 3 },
              p: { xs: 1.5, md: 0 },
              mb: { xs: 3, md: 6 },
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 'clamp(1.2rem, 5vw, 2rem)',
                color: '#ff0000',
                cursor: 'pointer',
                fontWeight: 'bold',
                padding: 'clamp(0.3rem, 1vw, 1rem) clamp(0.5rem, 2vw, 1rem)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ←
            </button>

            <p
              style={{
                fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)',
                color: '#2a2a2a',
                margin: 0,
                fontWeight: 600,
                letterSpacing: '2px',
              }}
            >
              {currentPage + 1} / {totalPages}
            </p>

            <button
              onClick={handleNext}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 'clamp(1.2rem, 5vw, 2rem)',
                color: '#ff0000',
                cursor: 'pointer',
                fontWeight: 'bold',
                padding: 'clamp(0.3rem, 1vw, 1rem) clamp(0.5rem, 2vw, 1rem)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              →
            </button>
          </Box>
        )}
      </Container>

      <LightboxModal
        isOpen={lightbox.lightboxOpen}
        imageUrl={lightbox.imageSrc || ''}
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
