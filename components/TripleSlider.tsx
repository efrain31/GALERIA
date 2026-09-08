'use client';

import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { keyframes } from '@emotion/react';
import { useLanguageToggle, translations } from '@/hooks/useLanguageToggle';

interface SliderImage {
  id: string | number;
  src: string;
  alt?: string;
}

interface TripleSliderProps {
  sliders: [SliderImage[], SliderImage[], SliderImage[]];
  autoPlaySpeed?: number;
  title?: string;
  titleKey?: string;
}

export default function TripleSlider({
  sliders,
  autoPlaySpeed = 5000,
  title,
  titleKey,
}: TripleSliderProps) {
  const [currentIndexes, setCurrentIndexes] = useState<[number, number, number]>([0, 0, 0]);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const isJapanese = useLanguageToggle();

  const displayTitle = titleKey
    ? isJapanese
      ? translations[titleKey]?.ja || title
      : translations[titleKey]?.en || title
    : title;

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndexes((prev) => [
        (prev[0] + 1) % sliders[0].length,
        (prev[1] - 1 + sliders[1].length) % sliders[1].length,
        (prev[2] + 1) % sliders[2].length,
      ]);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [isAutoPlay, autoPlaySpeed, sliders]);

  const handlePrev = (sliderIndex: number) => {
    setIsAutoPlay(false);
    setCurrentIndexes((prev) => {
      const newIndexes: [number, number, number] = [...prev] as [number, number, number];
      newIndexes[sliderIndex] = (newIndexes[sliderIndex] - 1 + sliders[sliderIndex].length) % sliders[sliderIndex].length;
      return newIndexes;
    });
  };

  const handleNext = (sliderIndex: number) => {
    setIsAutoPlay(false);
    setCurrentIndexes((prev) => {
      const newIndexes: [number, number, number] = [...prev] as [number, number, number];
      newIndexes[sliderIndex] = (newIndexes[sliderIndex] + 1) % sliders[sliderIndex].length;
      return newIndexes;
    });
  };

  const handleAutoPlayToggle = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const renderSlider = (sliderIndex: number, direction: 'left' | 'right') => {
    const images = sliders[sliderIndex];
    const currentIndex = currentIndexes[sliderIndex];
    const currentImage = images[currentIndex];

    return (
      <Box key={sliderIndex} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Image Container */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            backgroundColor: '#d0d0d0',
            borderRadius: '4px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt || 'Gallery image'}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transition: 'opacity 0.6s ease-in-out',
            }}
          />
        </Box>

        {/* Controls */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <button
            onClick={() => handlePrev(sliderIndex)}
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

          <p
            style={{
              fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
              color: '#2a2a2a',
              margin: 0,
              fontWeight: 600,
              letterSpacing: '1px',
            }}
          >
            {currentIndex + 1} / {images.length}
          </p>

          <button
            onClick={() => handleNext(sliderIndex)}
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
  };

  return (
    <Box
      sx={{
        backgroundColor: '#faf8f5',
        py: { xs: 6, md: 10 },
        mb: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {displayTitle && (
          <Box sx={{ mb: { xs: 6, md: 8 }, p: { xs: 1.5, md: 0 } }}>
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
              {displayTitle}
            </h2>
          </Box>
        )}

        {/* Sliders Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 4 },
            mb: { xs: 3, md: 4 },
          }}
        >
          {renderSlider(0, 'right')}
          {renderSlider(1, 'left')}
          {renderSlider(2, 'right')}
        </Box>

        {/* Auto Play Toggle */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleAutoPlayToggle}
            style={{
              background: isAutoPlay ? '#ff0000' : '#ccc',
              color: '#fff',
              border: 'none',
              padding: '0.8rem 1.5rem',
              fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
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
        </Box>
      </Container>
    </Box>
  );
}
