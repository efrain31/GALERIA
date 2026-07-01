'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PanToolIcon from '@mui/icons-material/PanTool';

interface ImageLightboxProps {
  src: string;
  alt: string;
  thumbnail?: string;
}

export default function ImageLightbox({ src, alt, thumbnail }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const MAX_ZOOM = 4;
  const MIN_ZOOM = 1;
  const ZOOM_STEP = 0.2;

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.naturalWidth,
        height: imageRef.current.naturalHeight,
      });
    }
  };

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isOpen) return;
    e.preventDefault();

    const newZoom = e.deltaY > 0
      ? Math.max(MIN_ZOOM, zoom - ZOOM_STEP)
      : Math.min(MAX_ZOOM, zoom + ZOOM_STEP);

    setZoom(newZoom);
  }, [zoom, isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    if (imageRef.current) {
      const maxPanX = (imageRef.current.offsetWidth * zoom - imageRef.current.offsetWidth) / 2;
      const maxPanY = (imageRef.current.offsetHeight * zoom - imageRef.current.offsetHeight) / 2;

      setPan({
        x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
        y: Math.max(-maxPanY, Math.min(maxPanY, newY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(MIN_ZOOM, prev - ZOOM_STEP));
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => window.removeEventListener('wheel', handleWheel);
    }
  }, [isOpen, handleWheel]);

  return (
    <>
      {/* Thumbnail */}
      <Box
        onClick={() => setIsOpen(true)}
        sx={{
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: '2px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <img
          src={thumbnail || src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      {/* Lightbox Modal */}
      {isOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Control Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Tooltip title={`Zoom: ${(zoom * 100).toFixed(0)}%`}>
                <Box sx={{ color: 'white', fontSize: '0.9rem', minWidth: '80px' }}>
                  {(zoom * 100).toFixed(0)}%
                </Box>
              </Tooltip>
              {zoom > 1 && (
                <Tooltip title="Pan mode active - drag to move">
                  <PanToolIcon sx={{ color: '#ff0000', fontSize: '1.2rem' }} />
                </Tooltip>
              )}
            </Box>

            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <Tooltip title="Zoom In (Scroll Up)">
                <span>
                  <IconButton
                    size="small"
                    onClick={zoomIn}
                    disabled={zoom >= MAX_ZOOM}
                    sx={{ color: 'white' }}
                  >
                    <AddIcon />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title="Zoom Out (Scroll Down)">
                <span>
                  <IconButton
                    size="small"
                    onClick={zoomOut}
                    disabled={zoom <= MIN_ZOOM}
                    sx={{ color: 'white' }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title="Reset View">
                <IconButton
                  size="small"
                  onClick={resetView}
                  sx={{ color: 'white' }}
                >
                  <RestartAltIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Close (ESC)">
                <IconButton
                  size="small"
                  onClick={() => {
                    setIsOpen(false);
                    resetView();
                  }}
                  sx={{ color: 'white' }}
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Image Container */}
          <Box
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              cursor: zoom > 1 ? 'grab' : 'default',
              '&:active': {
                cursor: zoom > 1 ? 'grabbing' : 'default',
              },
            }}
          >
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              onLoad={handleImageLoad}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '95vw',
                maxHeight: 'calc(100vh - 70px)',
                objectFit: 'contain',
                userSelect: 'none',
                transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
              }}
            />
          </Box>

          {/* Keyboard hint */}
          <Box
            sx={{
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.85rem',
              textAlign: 'center',
            }}
          >
            Usa scroll para zoom | Arrastra para mover | ESC para cerrar
          </Box>
        </Box>
      )}

      {/* Close on ESC key */}
      {isOpen && (
        <script>{`
          window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
              document.querySelector('[data-close-lightbox]')?.click();
            }
          });
        `}</script>
      )}
    </>
  );
}
