'use client';

import { Grid, Box } from '@mui/material';
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
  return (
    <Grid container spacing={3}>
      {images.map((image) => (
        <Grid item xs={columns.xs} sm={columns.sm} md={columns.md} lg={columns.lg} key={image.id}>
          <Box
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
        </Grid>
      ))}
    </Grid>
  );
}
