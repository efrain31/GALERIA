'use client';

import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { icon: <HomeIcon />, label: 'Home', href: '/' },
  { icon: <span style={{ fontSize: '1.5rem' }}>力</span>, label: 'Galería', href: '/galeria' },
  { icon: <FavoriteIcon />, label: 'Shot Hearts', href: '/galeria/shot-hearts' },
  { icon: <StarIcon />, label: 'Full Heaven/Hell', href: '/galeria/full-haven-hell' },
  { icon: <ContactMailIcon />, label: 'Contacto', href: '/galeria/contact' },
];

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowMessage(true);
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 30 },
        left: { xs: 20, md: 30 },
        zIndex: 40,
      }}
    >
      {/* Menu Items */}
      {isOpen && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 80,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mb: 2,
            animation: 'slideUp 0.3s ease-out',
            '@keyframes slideUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#4a4a4a',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1.5rem',
                  '&:hover': {
                    backgroundColor: '#333',
                    transform: 'scale(1.1)',
                  },
                  '& svg': {
                    width: 24,
                    height: 24,
                  },
                }}
              >
                {item.icon}
              </Box>
            </Link>
          ))}
        </Box>
      )}

      {/* Message Animation */}
      {showMessage && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: 0,
            animation: 'messagePulse 3s ease-in-out',
            '@keyframes messagePulse': {
              '0%': {
                opacity: 0,
                transform: 'translateY(0) scale(0.8)',
              },
              '20%': {
                opacity: 1,
                transform: 'translateY(-70px) scale(1)',
              },
              '80%': {
                opacity: 1,
                transform: 'translateY(-70px) scale(1)',
              },
              '100%': {
                opacity: 0,
                transform: 'translateY(0) scale(0.8)',
              },
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: '#3a3a3a',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '0',
              fontSize: '0.85rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            MENU DE NAVEGACION
          </Box>
        </Box>
      )}

      {/* Main Button */}
      <Box
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: '#3a3a3a',
          color: '#fff',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          '&:hover': {
            backgroundColor: '#2a2a2a',
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
          },
          '& svg': {
            width: 28,
            height: 28,
          },
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    </Box>
  );
}
