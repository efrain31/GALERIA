'use client';

import { Box, Container } from '@mui/material';
import Image from 'next/image';

interface DualImageSectionProps {
  leftImage: {
    src: string;
    alt: string;
    backgroundColor?: string;
  };
  rightImage: {
    src: string;
    alt: string;
    backgroundColor?: string;
  };
  minHeight?: string;
}

export default function DualImageSection({
  leftImage,
  rightImage,
  minHeight = '500px',
}: DualImageSectionProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        minHeight: { xs: 'auto', md: minHeight },
        gap: { xs: '8px', md: '12px' },
        backgroundColor: '#faf8f5',
        mb: { xs: 6, md: 12 },
      }}
    >
      {/* Left Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingBottom: { xs: '100%', md: 0 },
          height: { xs: 'auto', md: '100%' },
          backgroundColor: leftImage.backgroundColor || '#2a2a2a',
          overflow: 'hidden',
        }}
      >
        <Image
          src={leftImage.src}
          alt={leftImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </Box>

      {/* Right Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingBottom: { xs: '100%', md: 0 },
          height: { xs: 'auto', md: '100%' },
          backgroundColor: rightImage.backgroundColor || '#1a1a1a',
          overflow: 'hidden',
        }}
      >
        <Image
          src={rightImage.src}
          alt={rightImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
}
