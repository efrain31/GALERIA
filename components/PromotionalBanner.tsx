'use client';

import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

interface PromotionalBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  linkHref?: string;
}

export default function PromotionalBanner({
  title,
  description,
  imageUrl,
  linkHref = '/galeria/portrait',
}: PromotionalBannerProps) {
  return (
    <Link href={linkHref} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          backgroundColor: '#3b3b3b',
          minHeight: { xs: 'auto', md: '400px' },
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          '&:hover': {
            backgroundColor: '#252525',
            '& img': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: { xs: 3, md: 6 },
            gap: { xs: 2, md: 3 },
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 8vw, 3.5rem)',
              fontWeight: 900,
              color: '#ff0000',
              margin: 0,
              letterSpacing: '-1px',
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.8,
              maxWidth: '500px',
            }}
          >
            {description}
          </p>
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            width: '100%',
            height: { xs: '300px', md: '100%' },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            position: 'relative',
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Box>
      </Box>
    </Link>
  );
}
