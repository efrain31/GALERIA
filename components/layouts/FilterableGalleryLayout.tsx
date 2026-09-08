'use client';

import { Box, Container } from '@mui/material';
import BackArrow from '@/components/BackArrow';
import LightboxModal from '@/components/LightboxModal';
import { useLightbox } from '@/hooks/useLightbox';
import { useLanguageToggle, translations } from '@/hooks/useLanguageToggle';
import { ImageData } from '@/lib/data';
import { useEffect, useRef, useState } from 'react';

interface FilterableGalleryLayoutProps {
  categoria: string;
  title: string;
  number: string;
  description: string;
  images: ImageData[];
  totalImages?: number;
  titleKey?: string;
}

type LayoutType = 'masonry' | 'grid' | 'tall' | 'double';

export default function FilterableGalleryLayout({
  categoria,
  title,
  number,
  description,
  images,
  totalImages = 8,
  titleKey = 'fullHavenHellTitle',
}: FilterableGalleryLayoutProps) {
  const [layout, setLayout] = useState<LayoutType>('masonry');
  const lightbox = useLightbox();
  const isJapanese = useLanguageToggle();
  const displayTitle = isJapanese
    ? translations[titleKey]?.ja || title
    : translations[titleKey]?.en || title;

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    itemRefs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      itemRefs.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [images, layout]);

  const getGridSpanMasonry = (index: number): { colSpan: number; rowSpan: number } => {
    const pattern = [
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 2, rowSpan: 1 },
      { colSpan: 1, rowSpan: 2 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 2, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
    ];
    return pattern[index % pattern.length];
  };

  const getGridSpanTall = (index: number): { colSpan: number; rowSpan: number } => {
    if (index === 0) return { colSpan: 1, rowSpan: 2 };
    return { colSpan: 1, rowSpan: 1 };
  };

  const getGridConfig = () => {
    switch (layout) {
      case 'grid':
        return {
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gridAutoRows: '250px',
          span: { xs: 1, md: 1 },
        };
      case 'tall':
        return {
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gridAutoRows: '250px',
          span: 'varies',
        };
      case 'double':
        return {
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gridAutoRows: '300px',
          span: { xs: 1, md: 1 },
        };
      default:
        return {
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          gridAutoRows: '200px',
          span: 'varies',
        };
    }
  };

  const config = getGridConfig();

  const navItems: Array<{ label: string; value: LayoutType }> = [
    { label: 'MASONRY', value: 'masonry' },
    { label: 'GRID', value: 'grid' },
    { label: 'TALL', value: 'tall' },
    { label: 'DOUBLE', value: 'double' },
  ];

  return (
    <div suppressHydrationWarning style={{ backgroundColor: '#faf8f5', minHeight: '100vh', padding: '1.5rem 0' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        {/* Title Section */}
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
        </Box>

        {/* Navigation Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 3, md: 6 },
            mb: { xs: 6, md: 8 },
            pb: { xs: 3, md: 4 },
            borderBottom: '1px solid #e0e0e0',
            overflowX: 'auto',
            flexWrap: 'nowrap',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setLayout(item.value)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                letterSpacing: '1px',
                color: layout === item.value ? '#ff0000' : '#999',
                cursor: 'pointer',
                fontWeight: layout === item.value ? 700 : 500,
                textTransform: 'uppercase',
                padding: '0.5rem 0',
                transition: 'all 0.3s ease',
                borderBottom: layout === item.value ? '2px solid #ff0000' : 'none',
                whiteSpace: 'nowrap',
                marginBottom: '-3px',
              }}
              onMouseEnter={(e) => {
                if (layout !== item.value) {
                  e.currentTarget.style.color = '#2a2a2a';
                }
              }}
              onMouseLeave={(e) => {
                if (layout !== item.value) {
                  e.currentTarget.style.color = '#999';
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </Box>

        {/* Gallery Grid */}
        <Box
          ref={containerRef}
          sx={{
            display: 'grid',
            gridTemplateColumns: config.gridTemplateColumns,
            gridAutoRows: config.gridAutoRows,
            gap: { xs: 1.5, md: 2 },
            gridAutoFlow: layout === 'masonry' ? 'dense' : 'row',
            mb: { xs: 3, md: 4 },
            transition: 'all 0.4s ease',
          }}
        >
          {images.map((image, index) => {
            let gridColSpan = 1;
            let gridRowSpan = 1;

            if (layout === 'masonry') {
              const span = getGridSpanMasonry(index);
              gridColSpan = span.colSpan;
              gridRowSpan = span.rowSpan;
            } else if (layout === 'tall') {
              const span = getGridSpanTall(index);
              gridColSpan = span.colSpan;
              gridRowSpan = span.rowSpan;
            }

            return (
              <Box
                key={image.id}
                ref={(el: HTMLDivElement | null) => {
                  if (el) itemRefs.current.set(image.id, el);
                }}
                onClick={() => lightbox.openLightbox(image.id, image.src)}
                sx={{
                  gridColumn: { xs: 'span 1', md: `span ${gridColSpan}` },
                  gridRow: { xs: 'span 1', md: `span ${gridRowSpan}` },
                  position: 'relative',
                  backgroundColor: '#d0d0d0',
                  borderRadius: '4px',
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  opacity: 0,
                  transform: 'translateY(30px) scale(0.95)',
                  '&:hover': {
                    transform: 'scale(1.05) translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  },
                  overflow: 'hidden',
                  willChange: 'transform, opacity',
                }}
              />
            );
          })}
        </Box>

        {/* Info Footer */}
        <Box sx={{ mt: { xs: 6, md: 8 }, p: { xs: 1.5, md: 0 }, textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              color: '#666',
              margin: 0,
              letterSpacing: '1px',
              fontWeight: 500,
            }}
          >
         
          </p>
        </Box>
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
    </div>
  );
}
