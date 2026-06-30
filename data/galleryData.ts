export interface GalleryImage {
  id: string;
  title: string;
  src: string;
  thumbnail?: string;
  alt: string;
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export const galleryCategories: Record<string, CategoryData> = {
  portrait: {
    id: '01',
    title: 'PORTRAIT PHOTOGRAPHY',
    description: 'Capturing the essence and emotion of individuals through portraiture',
    images: [
      {
        id: 'portrait-1',
        title: 'Portrait Series I',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
        alt: 'Portrait photograph 1',
      },
      {
        id: 'portrait-2',
        title: 'Portrait Series II',
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&h=800&fit=crop',
        alt: 'Portrait photograph 2',
      },
      {
        id: 'portrait-3',
        title: 'Portrait Series III',
        src: 'https://images.unsplash.com/photo-1517256673042-f03519d46b00?w=1200&h=800&fit=crop',
        alt: 'Portrait photograph 3',
      },
      {
        id: 'portrait-4',
        title: 'Portrait Series IV',
        src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=800&fit=crop',
        alt: 'Portrait photograph 4',
      },
    ],
  },
  commercial: {
    id: '02',
    title: 'COMMERCIAL PHOTOGRAPHY',
    description: 'Professional commercial and product photography',
    images: [
      {
        id: 'commercial-1',
        title: 'Commercial Series I',
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
        alt: 'Commercial photograph 1',
      },
      {
        id: 'commercial-2',
        title: 'Commercial Series II',
        src: 'https://images.unsplash.com/photo-1611532736000-81e1d835e2fb?w=1200&h=800&fit=crop',
        alt: 'Commercial photograph 2',
      },
      {
        id: 'commercial-3',
        title: 'Commercial Series III',
        src: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=1200&h=800&fit=crop',
        alt: 'Commercial photograph 3',
      },
    ],
  },
  landscape: {
    id: '03',
    title: 'LANDSCAPE PHOTOGRAPHY',
    description: 'Stunning landscape and nature photography',
    images: [
      {
        id: 'landscape-1',
        title: 'Landscape Series I',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        alt: 'Landscape photograph 1',
      },
      {
        id: 'landscape-2',
        title: 'Landscape Series II',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        alt: 'Landscape photograph 2',
      },
      {
        id: 'landscape-3',
        title: 'Landscape Series III',
        src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop',
        alt: 'Landscape photograph 3',
      },
    ],
  },
  event: {
    id: '04',
    title: 'EVENT PHOTOGRAPHY',
    description: 'Capturing moments from events and celebrations',
    images: [
      {
        id: 'event-1',
        title: 'Event Series I',
        src: 'https://images.unsplash.com/photo-1519671482677-504be0271101?w=1200&h=800&fit=crop',
        alt: 'Event photograph 1',
      },
      {
        id: 'event-2',
        title: 'Event Series II',
        src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop',
        alt: 'Event photograph 2',
      },
      {
        id: 'event-3',
        title: 'Event Series III',
        src: 'https://images.unsplash.com/photo-1516183097202-b5a66de36a22?w=1200&h=800&fit=crop',
        alt: 'Event photograph 3',
      },
    ],
  },
  fashion: {
    id: '05',
    title: 'FASHION PHOTOGRAPHY',
    description: 'High-fashion and style photography',
    images: [
      {
        id: 'fashion-1',
        title: 'Fashion Series I',
        src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=800&fit=crop',
        alt: 'Fashion photograph 1',
      },
      {
        id: 'fashion-2',
        title: 'Fashion Series II',
        src: 'https://images.unsplash.com/photo-1505252585461-04db1921b40f?w=1200&h=800&fit=crop',
        alt: 'Fashion photograph 2',
      },
      {
        id: 'fashion-3',
        title: 'Fashion Series III',
        src: 'https://images.unsplash.com/photo-1502176551833-b8bc14e5c3c9?w=1200&h=800&fit=crop',
        alt: 'Fashion photograph 3',
      },
    ],
  },
  editorial: {
    id: '06',
    title: 'EDITORIAL PHOTOGRAPHY',
    description: 'Editorial and creative storytelling photography',
    images: [
      {
        id: 'editorial-1',
        title: 'Editorial Series I',
        src: 'https://images.unsplash.com/photo-1549887534-7e9a2cf4e319?w=1200&h=800&fit=crop',
        alt: 'Editorial photograph 1',
      },
      {
        id: 'editorial-2',
        title: 'Editorial Series II',
        src: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=1200&h=800&fit=crop',
        alt: 'Editorial photograph 2',
      },
      {
        id: 'editorial-3',
        title: 'Editorial Series III',
        src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop',
        alt: 'Editorial photograph 3',
      },
    ],
  },
};
