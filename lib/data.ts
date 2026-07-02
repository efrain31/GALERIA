export interface ImageData {
  id: string;
  src: string;
  title?: string;
  description?: string;
  alt?: string;
  thumbnail?: string;
}

export interface CategoryData {
  id: string;
  title: string;
  titleKey: string;
  tagline: string;
  taglineKey: string;
  description: string;
  descriptionKey: string;
  href: string;
  images: ImageData[];
  totalImages: number;
}

// Portrait Photography Gallery
export const portraitImagesData: ImageData[] = [
  { id: "portrait-1", src: "/images/galeria/2.png", alt: "Portrait photograph 1" },
  { id: "portrait-2", src: "/images/galeria/3.png", alt: "Portrait photograph 2" },
  { id: "portrait-3", src: "/images/galeria/4.png", alt: "Portrait photograph 3" },
  { id: "portrait-4", src: "/images/galeria/5.png", alt: "Portrait photograph 4" },
  { id: "portrait-5", src: "/images/galeria/3.png", alt: "Portrait photograph 5" },
  { id: "portrait-6", src: "/images/galeria/4.png", alt: "Portrait photograph 6" },
  { id: "portrait-7", src: "/images/galeria/5.png", alt: "Portrait photograph 7" },
  { id: "portrait-8", src: "/images/galeria/3.png", alt: "Portrait photograph 8" },
  { id: "portrait-9", src: "/images/galeria/4.png", alt: "Portrait photograph 9" },
  { id: "portrait-10", src: "/images/galeria/5.png", alt: "Portrait photograph 10" },
  { id: "portrait-11", src: "/images/galeria/3.png", alt: "Portrait photograph 11" },
  { id: "portrait-12", src: "/images/galeria/4.png", alt: "Portrait photograph 12" },
];

// Commercial Photography Gallery
export const commercialImagesData: ImageData[] = [
  { id: "commercial-1", src: "/images/galeria/2.png", alt: "Commercial photograph 1" },
  { id: "commercial-2", src: "/images/galeria/3.png", alt: "Commercial photograph 2" },
  { id: "commercial-3", src: "/images/galeria/4.png", alt: "Commercial photograph 3" },
  { id: "commercial-4", src: "/images/galeria/5.png", alt: "Commercial photograph 4" },
  { id: "commercial-5", src: "/images/galeria/2.png", alt: "Commercial photograph 5" },
  { id: "commercial-6", src: "/images/galeria/3.png", alt: "Commercial photograph 6" },
  { id: "commercial-7", src: "/images/galeria/4.png", alt: "Commercial photograph 7" },
  { id: "commercial-8", src: "/images/galeria/3.png", alt: "Commercial photograph 8" },
  { id: "commercial-9", src: "/images/galeria/4.png", alt: "Commercial photograph 9" },
  { id: "commercial-10", src: "/images/galeria/5.png", alt: "Commercial photograph 10" },
  { id: "commercial-11", src: "/images/galeria/2.png", alt: "Commercial photograph 11" },
  { id: "commercial-12", src: "/images/galeria/3.png", alt: "Commercial photograph 12" },
];

// Landscape Photography Gallery
export const landscapeImagesData: ImageData[] = [
  { id: "landscape-1", src: "/images/galeria/2.png", alt: "Landscape photograph 1" },
  { id: "landscape-2", src: "/images/galeria/3.png", alt: "Landscape photograph 2" },
  { id: "landscape-3", src: "/images/galeria/4.png", alt: "Landscape photograph 3" },
  { id: "landscape-4", src: "/images/galeria/5.png", alt: "Landscape photograph 4" },
  { id: "landscape-5", src: "/images/galeria/2.png", alt: "Landscape photograph 5" },
  { id: "landscape-6", src: "/images/galeria/3.png", alt: "Landscape photograph 6" },
  { id: "landscape-7", src: "/images/galeria/4.png", alt: "Landscape photograph 7" },
  { id: "landscape-8", src: "/images/galeria/5.png", alt: "Landscape photograph 8" },
  { id: "landscape-9", src: "/images/galeria/2.png", alt: "Landscape photograph 9" },
  { id: "landscape-10", src: "/images/galeria/3.png", alt: "Landscape photograph 10" },
  { id: "landscape-11", src: "/images/galeria/4.png", alt: "Landscape photograph 11" },
  { id: "landscape-12", src: "/images/galeria/5.png", alt: "Landscape photograph 12" },
];

// Event Photography Gallery
export const eventImagesData: ImageData[] = [
  { id: "event-1", src: "/images/galeria/2.png", alt: "Event photograph 1" },
  { id: "event-2", src: "/images/galeria/3.png", alt: "Event photograph 2" },
  { id: "event-3", src: "/images/galeria/4.png", alt: "Event photograph 3" },
  { id: "event-4", src: "/images/galeria/5.png", alt: "Event photograph 4" },
  { id: "event-5", src: "/images/galeria/2.png", alt: "Event photograph 5" },
  { id: "event-6", src: "/images/galeria/3.png", alt: "Event photograph 6" },
  { id: "event-7", src: "/images/galeria/4.png", alt: "Event photograph 7" },
  { id: "event-8", src: "/images/galeria/5.png", alt: "Event photograph 8" },
  { id: "event-9", src: "/images/galeria/2.png", alt: "Event photograph 9" },
  { id: "event-10", src: "/images/galeria/3.png", alt: "Event photograph 10" },
  { id: "event-11", src: "/images/galeria/4.png", alt: "Event photograph 11" },
  { id: "event-12", src: "/images/galeria/5.png", alt: "Event photograph 12" },
];

// Fashion Photography Gallery
export const fashionImagesData: ImageData[] = [
  { id: "fashion-1", src: "/images/galeria/2.png", alt: "Fashion photograph 1" },
  { id: "fashion-2", src: "/images/galeria/3.png", alt: "Fashion photograph 2" },
  { id: "fashion-3", src: "/images/galeria/4.png", alt: "Fashion photograph 3" },
  { id: "fashion-4", src: "/images/galeria/5.png", alt: "Fashion photograph 4" },
  { id: "fashion-5", src: "/images/galeria/5.png", alt: "Fashion photograph 5" },
  { id: "fashion-6", src: "/images/galeria/5.png", alt: "Fashion photograph 6" },
  { id: "fashion-7", src: "/images/galeria/5.png", alt: "Fashion photograph 7" },
  { id: "fashion-8", src: "/images/galeria/2.png", alt: "Fashion photograph 8" },
  { id: "fashion-9", src: "/images/galeria/3.png", alt: "Fashion photograph 9" },
  ];

// Editorial Photography Gallery
export const editorialImagesData: ImageData[] = [
  { id: "editorial-1", src: "/images/galeria/2.png", alt: "Editorial photograph 1" },
  { id: "editorial-2", src: "/images/galeria/3.png", alt: "Editorial photograph 2" },
  { id: "editorial-3", src: "/images/galeria/4.png", alt: "Editorial photograph 3" },
  { id: "editorial-4", src: "/images/galeria/5.png", alt: "Editorial photograph 4" },
  { id: "editorial-5", src: "/images/galeria/2.png", alt: "Editorial photograph 5" },
  { id: "editorial-6", src: "/images/galeria/3.png", alt: "Editorial photograph 6" },
  { id: "editorial-7", src: "/images/galeria/4.png", alt: "Editorial photograph 7" },
  { id: "editorial-8", src: "/images/galeria/5.png", alt: "Editorial photograph 8" },
  { id: "editorial-9", src: "/images/galeria/2.png", alt: "Editorial photograph 9" },
  { id: "editorial-10", src: "/images/galeria/3.png", alt: "Editorial photograph 10" },
  { id: "editorial-11", src: "/images/galeria/4.png", alt: "Editorial photograph 11" },
  { id: "editorial-12", src: "/images/galeria/5.png", alt: "Editorial photograph 12" },
];

// Shot Hearts Gallery
export const shotHeartsImagesData: ImageData[] = [
  { id: "shotHearts-1", src: "/images/galeria/2.png", alt: "Shot Hearts 1" },
  { id: "shotHearts-2", src: "/images/galeria/3.png", alt: "Shot Hearts 2" },
  { id: "shotHearts-3", src: "/images/galeria/4.png", alt: "Shot Hearts 3" },
  { id: "shotHearts-4", src: "/images/galeria/5.png", alt: "Shot Hearts 4" },
  { id: "shotHearts-5", src: "/images/galeria/5.png", alt: "Shot Hearts 5" },
  { id: "shotHearts-6", src: "/images/galeria/3.png", alt: "Shot Hearts 6" },
  { id: "shotHearts-7", src: "/images/galeria/4.png", alt: "Shot Hearts 7" },
  { id: "shotHearts-8", src: "/images/galeria/2.png", alt: "Shot Hearts 8" },
];

// Full Heaven/Hell Gallery
export const fullHavenHellImagesData: ImageData[] = [
  { id: "haven-1", src: "/images/galeria/2.png", alt: "Full Haven/Hell 1" },
  { id: "haven-2", src: "/images/galeria/3.png", alt: "Full Haven/Hell 2" },
  { id: "haven-3", src: "/images/galeria/4.png", alt: "Full Haven/Hell 3" },
  { id: "haven-4", src: "/images/galeria/5.png", alt: "Full Haven/Hell 4" },
  { id: "haven-5", src: "/images/galeria/2.png", alt: "Full Haven/Hell 5" },
  { id: "haven-6", src: "/images/galeria/3.png", alt: "Full Haven/Hell 6" },
  { id: "haven-7", src: "/images/galeria/4.png", alt: "Full Haven/Hell 7" },
  { id: "haven-8", src: "/images/galeria/5.png", alt: "Full Haven/Hell 8" },
];

// Categories Data
export const categories: CategoryData[] = [
  {
    id: "01",
    title: "PORTRAIT PHOTOGRAPHY",
    titleKey: "portraitTitle",
    tagline: "THE BEAUTY OF IMPERFECTION",
    taglineKey: "portraitTagline",
    description: "Capturing the essence and personality of individuals through intimate and expressive portraits.",
    descriptionKey: "portraitDescription",
    href: "/galeria/portrait",
    images: portraitImagesData,
    totalImages: portraitImagesData.length,
  },
  {
    id: "02",
    title: "COMMERCIAL PHOTOGRAPHY",
    titleKey: "commercialTitle",
    tagline: "PRODUCT EXCELLENCE",
    taglineKey: "commercialTagline",
    description: "Professional commercial and product photography that showcases your brand.",
    descriptionKey: "commercialDescription",
    href: "/galeria/commercial",
    images: commercialImagesData,
    totalImages: commercialImagesData.length,
  },
  {
    id: "03",
    title: "LANDSCAPE PHOTOGRAPHY",
    titleKey: "landscapeTitle",
    tagline: "NATURE'S GRANDEUR",
    taglineKey: "landscapeTagline",
    description: "Breathtaking landscape and nature photography from around the world.",
    descriptionKey: "landscapeDescription",
    href: "/galeria/landscape",
    images: landscapeImagesData,
    totalImages: landscapeImagesData.length,
  },
  {
    id: "04",
    title: "EVENT PHOTOGRAPHY",
    titleKey: "eventTitle",
    tagline: "MOMENTS CAPTURED",
    taglineKey: "eventTagline",
    description: "Dynamic event coverage that captures the energy and emotion of your special occasions.",
    descriptionKey: "eventDescription",
    href: "/galeria/event",
    images: eventImagesData,
    totalImages: eventImagesData.length,
  },
  {
    id: "05",
    title: "FASHION PHOTOGRAPHY",
    titleKey: "fashionTitle",
    tagline: "STYLE IN MOTION",
    taglineKey: "fashionTagline",
    description: "High-fashion photography that brings style and elegance to life.",
    descriptionKey: "fashionDescription",
    href: "/galeria/fashion",
    images: fashionImagesData,
    totalImages: fashionImagesData.length,
  },
  {
    id: "06",
    title: "EDITORIAL PHOTOGRAPHY",
    titleKey: "editorialTitle",
    tagline: "VISUAL STORYTELLING",
    taglineKey: "editorialTagline",
    description: "Editorial and artistic photography that tells compelling visual stories.",
    descriptionKey: "editorialDescription",
    href: "/galeria/editorial",
    images: editorialImagesData,
    totalImages: editorialImagesData.length,
  },
  {
    id: "07",
    title: "SHOT HEARTS",
    titleKey: "shotHeartsTitle",
    tagline: "EMOTIONAL PORTRAITS",
    taglineKey: "shotHeartsTagline",
    description: "Capturing raw emotions and intimate moments through striking portraiture.",
    descriptionKey: "shotHeartsDescription",
    href: "/galeria/shot-hearts",
    images: shotHeartsImagesData,
    totalImages: shotHeartsImagesData.length,
  },
  {
    id: "08",
    title: "FULL HEAVEN/HELL",
    titleKey: "fullHavenHellTitle",
    tagline: "DUALITY IN LIGHT",
    taglineKey: "fullHavenHellTagline",
    description: "Exploring the contrast between light and shadow, beauty and chaos.",
    descriptionKey: "fullHavenHellDescription",
    href: "/galeria/full-haven-hell",
    images: fullHavenHellImagesData,
    totalImages: fullHavenHellImagesData.length,
  },
];

// Main Gallery Page Configuration
export interface MainPageConfig {
  tableOfLabel: string;
  contentsLabel: string;
  tableOfLabelJa: string;
  contentsLabelJa: string;
  sampleImages: {
    leftTop: string;
    rightTop: string;
    leftBottom1: string;
    leftBottom2: string;
    rightTop1: string;
    rightTop2: string;
  };
  workWithMeLink: string;
  backgroundColor: string;
}

export const mainPageConfig: MainPageConfig = {
  tableOfLabel: "TABLE OF",
  contentsLabel: "CONTENTS ; ",
  tableOfLabelJa: "コンテンツ",
  contentsLabelJa: "目次 ; ",
  sampleImages: {
    leftTop: "/images/galeria/2.png",
    rightTop: "/images/galeria/3.png",
    leftBottom1: "/images/galeria/4.png",
    leftBottom2: "/images/galeria/5.png",
    rightTop1: "/images/galeria/3.png",
    rightTop2: "/images/galeria/4.png",
  },
  workWithMeLink: "WORK WITH ME →",
  backgroundColor: "#faf8f5",
};

// Contact Page Configuration
export interface ContactInfo {
  title: string;
  titleJa: string;
  website: string;
  websiteLabel: string;
  email: string;
  emailLabel: string;
  phone: string;
  phoneLabel: string;
  contactImageUrl: string;
  backgroundColor: string;
}

export const contactInfo: ContactInfo = {
  title: "WORK WITH ME",
  titleJa: "一緒に働きましょう",
  website: "https://portafolioefra.vercel.app/",
  websiteLabel: "Website Development",
  email: "ulisesefrain32@gmail.com",
  emailLabel: "E-mail",
  phone: "+52 3327-4093-28",
  phoneLabel: "Telephone",
  contactImageUrl: "/images/galeria/2.png",
  backgroundColor: "#f5f0eb",
};

// About Page Configuration
export interface AboutInfo {
  name: string;
  nameItalic: string;
  title: string;
  titleLabel: string;
  bio: string;
  bioJa: string;
  phone: string;
  email: string;
  profileImageUrl: string;
  profileBackgroundColor: string;
  backgroundColor: string;
}

export const aboutInfo: AboutInfo = {
  name: "EFRAIN",
  nameItalic: "HDEZ",
  title: " ARTIST",
  titleLabel: "PAINTER",
  bio: "Con más de una década de experiencia en artes  profesionales, he dedicado mi carrera a capturar los momentos más significativos de la vida. Desde retratos íntimos hasta piezas experimentales , mi enfoque se centra en la autenticidad y la expresión visual que el mundo y la imaginacion pueda ofrecer. Cada proyecto es una oportunidad para contar historias únicas a través del pincel, combinando técnica artística con una sensibilidad especial hacia la luz, la composición y el detalle. Buscando exponer  en galerías internacionales.",
  bioJa: "プロの写真撮影経験が10年以上あり、私のキャリアは人生の最も重要な瞬間をキャプチャすることに専念しています。親密なポートレートから大規模なファッションセッションまで、私のアプローチは真正性とビジュアル表現に焦点を当てています。各プロジェクトは、レンズを通じてユニークなストーリーを語る機会であり、光、構図、細部への特別な感性と組み合わせた芸術的な技法を結合しています。私の作品は国際的なギャラリーで展示され、世界的に認識されたブランドとのコラボレーションを行っています。",
  phone: "+52 3327-4093-28",
  email: "ulisesefrain32@gmail.com",
  profileImageUrl: "/images/galeria/2.png",
  profileBackgroundColor: "#4a4a4a",
  backgroundColor: "#f5f0eb",
};
