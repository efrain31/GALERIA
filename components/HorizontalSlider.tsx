'use client';

import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useLanguageToggle, translations } from '@/hooks/useLanguageToggle';

interface SliderImage {
  id: string | number;
  src: string;
  alt?: string;
}

interface HorizontalSliderProps {
  images: SliderImage[];
  direction?: 'left' | 'right';
  autoPlaySpeed?: number;
  imageHeight?: string;
  title?: string;
  titleKey?: string;
}

export default function HorizontalSlider({
  images,
  direction = 'left',
  autoPlaySpeed = 3000,
  imageHeight = '300px',
  title,
  titleKey,
}: HorizontalSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isJapanese = useLanguageToggle();

  const displayTitle = titleKey
    ? isJapanese
      ? translations[titleKey]?.ja || title
      : translations[titleKey]?.en || title
    : title;

  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === 'left') {
          return (prev + 1) % images.length;
        } else {
          return (prev - 1 + images.length) % images.length;
        }
      });
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [isAutoPlay, autoPlaySpeed, images.length, direction]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Display multiple images at once - create a continuous scroll effect
  const displayedImages = [];
  for (let i = 0; i < 5; i++) {
    displayedImages.push(images[(currentIndex + i) % images.length]);
  }

  return (
    <Box
      sx={{
        backgroundColor: '#faf8f5',
        py: 0,
        mb: { xs: 4, md: 6 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
        gap: { xs: 2, md: 4 },
        alignItems: 'center',
      }}
    >
      {/* Title */}
      {displayTitle && (
        <Box
          sx={{
            order: { xs: -1, md: 1 },
            gridColumn: { xs: '1', md: 'auto' },
            gridRow: { xs: 'auto', md: '1 / -1' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pr: { md: 2 },
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              fontWeight: 700,
              color: '#2a2a2a',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
          >
            {displayTitle}
          </h3>
        </Box>
      )}

      {/* Slider Container */}
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollBehavior: 'smooth',
          gap: 0,
          px: 0,
          gridColumn: { xs: '1', md: '1' },
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {displayedImages.map((image, idx) => (
          <Box
            key={`${currentIndex}-${idx}`}
            sx={{
              flex: '0 0 auto',
              width: { xs: '300px', sm: '350px', md: '400px' },
              height: imageHeight,
              position: 'relative',
              backgroundColor: '#d0d0d0',
              borderRadius: 0,
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || 'Gallery image'}
              fill
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          py: 3,
          backgroundColor: '#faf8f5',
          gridColumn: { xs: '1', md: '1 / -1' },
        }}
      >
          <button
            onClick={handlePrev}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
              color: '#ff0000',
              cursor: 'pointer',
              fontWeight: 'bold',
              padding: '0.5rem 1rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            ←
          </button>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            style={{
              background: isAutoPlay ? '#ff0000' : '#666',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              fontWeight: 600,
              borderRadius: '4px',
              cursor: 'pointer',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isAutoPlay ? 'PAUSE' : 'PLAY'}
          </button>

          <button
            onClick={handleNext}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
              color: '#ff0000',
              cursor: 'pointer',
              fontWeight: 'bold',
              padding: '0.5rem 1rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            →
          </button>
      </Box>
    </Box>
  );
}
