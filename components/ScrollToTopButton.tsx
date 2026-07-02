'use client';

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    setIsVisible(scrollTop > windowHeight * 0.25);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease-in-out',
        zIndex: 999,
      }}
    >
      <button
        onClick={scrollToTop}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: '#ff0000',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: '#ffffff',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#cc0000';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ff0000';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        ↑
      </button>
    </Box>
  );
}
