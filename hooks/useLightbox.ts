import { useState, useRef, useCallback, useEffect } from 'react';

const MAX_ZOOM = 4;
const MIN_ZOOM = 1;
const ZOOM_STEP = 0.2;

export const useLightbox = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const openLightbox = (imageNum: number | string) => {
    setSelectedImage(imageNum.toString());
    setLightboxOpen(true);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!lightboxOpen) return;
      e.preventDefault();

      const newZoom = e.deltaY > 0
        ? Math.max(MIN_ZOOM, zoom - ZOOM_STEP)
        : Math.min(MAX_ZOOM, zoom + ZOOM_STEP);

      setZoom(newZoom);
    },
    [zoom, lightboxOpen]
  );

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
    setZoom((prev) => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(MIN_ZOOM, prev - ZOOM_STEP));
  };

  useEffect(() => {
    if (lightboxOpen) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [lightboxOpen, handleWheel]);

  return {
    lightboxOpen,
    selectedImage,
    zoom,
    pan,
    isDragging,
    containerRef,
    imageRef,
    openLightbox,
    closeLightbox,
    resetView,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    zoomIn,
    zoomOut,
    MAX_ZOOM,
    MIN_ZOOM,
  };
};
