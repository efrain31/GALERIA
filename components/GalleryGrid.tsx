'use client';

import { Box } from '@mui/material';
import ImageLightbox from './ImageLightbox';

interface GalleryImage {
  id: string;
  title: string;
  src: string;
  thumbnail?: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: { xs: number; sm: number; md: number; lg: number };
}

export default function GalleryGrid({
  images,
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
}: GalleryGridProps) {
  const getWidth = (cols: number) => `${100 / cols}%`;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: `repeat(${columns.xs}, 1fr)`,
          sm: `repeat(${columns.sm}, 1fr)`,
          md: `repeat(${columns.md}, 1fr)`,
          lg: `repeat(${columns.lg}, 1fr)`,
        },
        gap: 3,
      }}
    >
      {images.map((image) => (
        <Box
          key={image.id}
          sx={{
            width: '100%',
            paddingBottom: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <ImageLightbox src={image.src} alt={image.alt} thumbnail={image.thumbnail} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
