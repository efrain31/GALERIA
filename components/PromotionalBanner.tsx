'use client';

import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { keyframes } from '@emotion/react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const doorLeft = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  `;

  const doorRight = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  `;

  return (
    <Link href={linkHref} style={{ textDecoration: 'none' }}>
      <Box
        ref={containerRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          backgroundColor: '#3b3b3b',
          minHeight: { xs: 'auto', md: '400px' },
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          position: 'relative',
          '&:hover': {
            backgroundColor: '#252525',
            '& img': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        {hasAnimated && (
          <>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                backgroundColor: '#000',
                zIndex: 10,
                animation: `${doorLeft} 1.6s ease-in-out forwards`,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                backgroundColor: '#000',
                zIndex: 10,
                animation: `${doorRight} 1.6s ease-in-out forwards`,
              }}
            />
          </>
        )}
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
