'use client';

import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { useLanguageToggle } from '@/hooks/useLanguageToggle';

interface AboutSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  quotes?: Array<{
    text: string;
    author: string;
  }>;
}

export default function AboutSection({
  title,
  description,
  imageSrc,
  imageAlt = 'About image',
  quotes = [],
}: AboutSectionProps) {
  const isJapanese = useLanguageToggle();

  return (
    <Box
      sx={{
        backgroundColor: '#faf8f5',
        py: { xs: 6, md: 10 },
        mb: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 3, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Left - Image */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingBottom: '100%',
              backgroundColor: '#d0d0d0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
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

          {/* Right - Content */}
          <Box sx={{ p: { xs: 1.5, md: 0 } }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                fontWeight: 700,
                color: '#2a2a2a',
                margin: '0 0 1.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                lineHeight: 1.8,
                color: '#555',
                margin: '0 0 2rem 0',
                fontWeight: 500,
              }}
            >
              {description}
            </p>

            {quotes.length > 0 && (
              <Box sx={{ mt: 3, space: 2 }}>
                {quotes.map((quote, idx) => (
                  <Box key={idx} sx={{ mb: 2 }}>
                    <p
                      style={{
                        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                        color: '#777',
                        margin: '0 0 0.5rem 0',
                        fontStyle: 'italic',
                      }}
                    >
                      "{quote.text}"
                    </p>
                    <p
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                        color: '#999',
                        margin: 0,
                        fontWeight: 600,
                      }}
                    >
                      - {quote.author}
                    </p>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
