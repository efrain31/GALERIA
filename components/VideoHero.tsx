'use client';

import { Box } from '@mui/material';

interface VideoHeroProps {
  videoSrc: string;
  videoAlt?: string;
}

export default function VideoHero({ videoSrc, videoAlt = 'Hero video' }: VideoHeroProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '300px', sm: '400px', md: '600px' },
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        mb: { xs: 6, md: 12 },
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}
