'use client';

import { Box, IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PanToolIcon from '@mui/icons-material/PanTool';
import React from 'react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  imageAlt: string;
  zoom: number;
  pan: { x: number; y: number };
  isDragging: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  imageRef: React.RefObject<HTMLImageElement | null>;
  onClose: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  MAX_ZOOM: number;
  MIN_ZOOM: number;
}

export default function LightboxModal({
  isOpen,
  imageUrl,
  imageAlt,
  zoom,
  pan,
  isDragging,
  containerRef,
  imageRef,
  onClose,
  onZoomIn,
  onZoomOut,
  onReset,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
  MAX_ZOOM,
  MIN_ZOOM,
}: LightboxModalProps) {
  if (!isOpen) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.98)',
        backdropFilter: 'blur(5px)',
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      {/* Top Control Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Left - Zoom Info */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Tooltip title={`Zoom: ${(zoom * 100).toFixed(0)}%`}>
            <Box
              sx={{
                color: '#ff0000',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '1px',
                minWidth: '100px',
              }}
            >
              {(zoom * 100).toFixed(0)}%
            </Box>
          </Tooltip>
          {zoom > 1 && (
            <Tooltip title="Modo pan activo - arrastra para mover">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: '#ff0000',
                  fontSize: '0.85rem',
                  opacity: 0.8,
                }}
              >
                <PanToolIcon sx={{ fontSize: '1rem' }} />
                PAN ACTIVO
              </Box>
            </Tooltip>
          )}
        </Box>

        {/* Center - Title */}
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              fontSize: '0.9rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Imagen ampliada
          </p>
        </Box>

        {/* Right - Control Buttons */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Tooltip title="Ampliar (Rueda arriba)">
            <IconButton
              size="small"
              onClick={onZoomIn}
              disabled={zoom >= MAX_ZOOM}
              sx={{
                color: zoom >= MAX_ZOOM ? 'rgba(255, 255, 255, 0.3)' : '#ff0000',
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reducir (Rueda abajo)">
            <IconButton
              size="small"
              onClick={onZoomOut}
              disabled={zoom <= MIN_ZOOM}
              sx={{
                color: zoom <= MIN_ZOOM ? 'rgba(255, 255, 255, 0.3)' : '#ff0000',
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <RemoveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reiniciar vista">
            <IconButton
              size="small"
              onClick={onReset}
              sx={{
                color: '#ff0000',
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <RestartAltIcon />
            </IconButton>
          </Tooltip>
          <Box sx={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.1)', mx: 0.5 }} />
          <Tooltip title="Cerrar (ESC)">
            <IconButton
              size="small"
              onClick={onClose}
              sx={{
                color: '#ff0000',
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Image Container */}
      <Box
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          cursor: zoom > 1 ? 'grab' : 'default',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:active': {
            cursor: zoom > 1 ? 'grabbing' : 'default',
          },
        }}
      >
        <img
          ref={imageRef}
          src={imageUrl}
          alt={imageAlt}
          style={{
            maxWidth: '90vw',
            maxHeight: 'calc(100vh - 140px)',
            userSelect: 'none',
            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
            borderRadius: '2px',
          }}
        />
      </Box>

      {/* Bottom Info Bar */}
      <Box
        sx={{
          padding: '1.5rem 2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.85rem',
            display: 'flex',
            gap: 3,
          }}
        >
          <span>📜 Scroll para zoom</span>
          <span>🖱️ Arrastra para mover</span>
          <span>⌨️ ESC para cerrar</span>
        </Box>
        <Box sx={{ color: '#ff0000', fontSize: '0.9rem', fontWeight: 600 }}>
          {zoom > 1 ? 'Modo PAN' : 'Modo VISTA'}
        </Box>
      </Box>
    </Box>
  );
}
