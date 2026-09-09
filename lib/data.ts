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

// Portrait Photography Gallery - ONI
export const portraitImagesData: ImageData[] = [
  { id: "portrait-1", src: "/images/galeria/oni/oni5.jpg", alt: "Portrait photograph 1" },
  { id: "portrait-2", src: "/images/galeria/oni/oni6.jpg", alt: "Portrait photograph 2" },
  { id: "portrait-3", src: "/images/galeria/oni/oni7.jpg", alt: "Portrait photograph 3" },
  { id: "portrait-4", src: "/images/galeria/oni/oni8.jpg", alt: "Portrait photograph 4" },
  { id: "portrait-5", src: "/images/galeria/oni/oni9.jpg", alt: "Portrait photograph 5" },
  { id: "portrait-6", src: "/images/galeria/oni/oni1.jpg", alt: "Portrait photograph 6" },
  { id: "portrait-7", src: "/images/galeria/oni/oni2.jpg", alt: "Portrait photograph 7" },
  { id: "portrait-8", src: "/images/galeria/oni/oni3.jpg", alt: "Portrait photograph 8" },
  { id: "portrait-9", src: "/images/galeria/oni/oni4.jpg", alt: "Portrait photograph 9" },
  { id: "portrait-10", src: "/images/galeria/oni/oni5.jpg", alt: "Portrait photograph 10" },
  { id: "portrait-11", src: "/images/galeria/oni/oni6.jpg", alt: "Portrait photograph 11" },
  { id: "portrait-12", src: "/images/galeria/oni/oni7.jpg", alt: "Portrait photograph 12" },
];

// Commercial Photography Gallery - GIRASOLES
export const commercialImagesData: ImageData[] = [
  { id: "commercial-1", src: "/images/galeria/girasoles/girasol1.jpg", alt: "Commercial photograph 1" },
  { id: "commercial-2", src: "/images/galeria/girasoles/girasol2.jpg", alt: "Commercial photograph 2" },
  { id: "commercial-3", src: "/images/galeria/girasoles/girasol3.jpg", alt: "Commercial photograph 3" },
  { id: "commercial-4", src: "/images/galeria/girasoles/girasol4.jpg", alt: "Commercial photograph 4" },
  { id: "commercial-5", src: "/images/galeria/girasoles/girasol5.jpg", alt: "Commercial photograph 5" },
  { id: "commercial-6", src: "/images/galeria/girasoles/girasol6.jpg", alt: "Commercial photograph 6" },
  { id: "commercial-7", src: "/images/galeria/girasoles/girasol9.jpg", alt: "Commercial photograph 7" },
  { id: "commercial-8", src: "/images/galeria/girasoles/girasol10.jpg", alt: "Commercial photograph 8" },
  { id: "commercial-9", src: "/images/galeria/girasoles/girasol2.jpg", alt: "Commercial photograph 9" },
];

// Landscape Photography Gallery - CARBON
export const landscapeImagesData: ImageData[] = [
  { id: "landscape-1", src: "/images/galeria/carbon/boceto1.jpg", alt: "Landscape photograph 1" },
  { id: "landscape-2", src: "/images/galeria/carbon/boceto2.jpg", alt: "Landscape photograph 2" },
  { id: "landscape-3", src: "/images/galeria/carbon/boceto3.jpg", alt: "Landscape photograph 3" },
  { id: "landscape-4", src: "/images/galeria/carbon/boceto4.jpg", alt: "Landscape photograph 4" },
  { id: "landscape-5", src: "/images/galeria/carbon/boceto5.jpg", alt: "Landscape photograph 5" },
  { id: "landscape-6", src: "/images/galeria/carbon/boceto6.jpg", alt: "Landscape photograph 6" },
  { id: "landscape-7", src: "/images/galeria/carbon/boceto7.jpg", alt: "Landscape photograph 7" },
  { id: "landscape-8", src: "/images/galeria/carbon/boceto8.jpg", alt: "Landscape photograph 8" },
 ];

// Event Photography Gallery - CALLEJON
export const eventImagesData: ImageData[] = [
  { id: "event-1", src: "/images/galeria/callejon/callejon1.jpg", alt: "Event photograph 1" },
  { id: "event-2", src: "/images/galeria/callejon/callejon2.jpg", alt: "Event photograph 2" },
  { id: "event-3", src: "/images/galeria/callejon/callejon3.jpg", alt: "Event photograph 3" },
  { id: "event-4", src: "/images/galeria/callejon/callejon4.jpg", alt: "Event photograph 4" },
  { id: "event-5", src: "/images/galeria/callejon/callejon0.jpg", alt: "Event photograph 5" },
  { id: "event-6", src: "/images/galeria/callejon/callejon6.jpg", alt: "Event photograph 6" },
  { id: "event-7", src: "/images/galeria/callejon/callejon7.jpg", alt: "Event photograph 7" },
  { id: "event-8", src: "/images/galeria/callejon/callejon8.jpg", alt: "Event photograph 8" },
  { id: "event-9", src: "/images/galeria/callejon/callejon5.jpg", alt: "Event photograph 9" },
  { id: "event-10", src: "/images/galeria/callejon/callejon1.jpg", alt: "Event photograph 10" },
  { id: "event-11", src: "/images/galeria/callejon/callejon2.jpg", alt: "Event photograph 11" },
  { id: "event-12", src: "/images/galeria/callejon/callejon3.jpg", alt: "Event photograph 12" },
];

// Fashion Photography Gallery - WOMAN
export const fashionImagesData: ImageData[] = [
  { id: "fashion-1", src: "/images/galeria/woman/woman1.jpg", alt: "Fashion photograph 1" },
  { id: "fashion-2", src: "/images/galeria/woman/woman2.jpg", alt: "Fashion photograph 2" },
  { id: "fashion-3", src: "/images/galeria/woman/woman3.jpg", alt: "Fashion photograph 3" },
  { id: "fashion-4", src: "/images/galeria/woman/woman9.jpg", alt: "Fashion photograph 4" },
  { id: "fashion-5", src: "/images/galeria/woman/woman7.jpg", alt: "Fashion photograph 5" },
  { id: "fashion-6", src: "/images/galeria/woman/woman5.jpg", alt: "Fashion photograph 6" },
  { id: "fashion-7", src: "/images/galeria/woman/woman11.jpg", alt: "Fashion photograph 7" },
  { id: "fashion-8", src: "/images/galeria/woman/woman12.jpg", alt: "Fashion photograph 8" },
  { id: "fashion-9", src: "/images/galeria/woman/woman13.jpg", alt: "Fashion photograph 9" },
];

// Editorial Photography Gallery - IGLESIA
export const editorialImagesData: ImageData[] = [
  { id: "editorial-1", src: "/images/galeria/iglesia/iglesia1.jpg", alt: "Editorial photograph 1" },
  { id: "editorial-2", src: "/images/galeria/iglesia/iglesia2.jpg", alt: "Editorial photograph 2" },
  { id: "editorial-3", src: "/images/galeria/iglesia/iglesia3.jpg", alt: "Editorial photograph 3" },
  { id: "editorial-4", src: "/images/galeria/iglesia/iglesia4.jpg", alt: "Editorial photograph 4" },
  { id: "editorial-5", src: "/images/galeria/iglesia/iglesia5.jpg", alt: "Editorial photograph 5" },
  { id: "editorial-6", src: "/images/galeria/iglesia/iglesia6.jpg", alt: "Editorial photograph 6" },
  { id: "editorial-7", src: "/images/galeria/iglesia/iglesia7.jpg", alt: "Editorial photograph 7" },
  { id: "editorial-8", src: "/images/galeria/iglesia/iglesia8.jpg", alt: "Editorial photograph 8" },
  { id: "editorial-9", src: "/images/galeria/iglesia/iglesia9.jpg", alt: "Editorial photograph 9" },
  { id: "editorial-10", src: "/images/galeria/iglesia/iglesia10.jpg", alt: "Editorial photograph 10" },
  { id: "editorial-11", src: "/images/galeria/iglesia/iglesia11.jpg", alt: "Editorial photograph 11" },
  { id: "editorial-12", src: "/images/galeria/iglesia/iglesia12.jpg", alt: "Editorial photograph 12" },
];

// Shot Hearts Gallery - PERRO
export const shotHeartsImagesData: ImageData[] = [
  { id: "shotHearts-1", src: "/images/galeria/perro/perro1.jpg", alt: "Shot Hearts 1" },
  { id: "shotHearts-2", src: "/images/galeria/perro/perro2.jpg", alt: "Shot Hearts 2" },
  { id: "shotHearts-3", src: "/images/galeria/perro/perro3.jpg", alt: "Shot Hearts 3" },
  { id: "shotHearts-4", src: "/images/galeria/perro/perro4.jpg", alt: "Shot Hearts 4" },
  { id: "shotHearts-5", src: "/images/galeria/perro/perro5.jpg", alt: "Shot Hearts 5" },
  { id: "shotHearts-6", src: "/images/galeria/perro/perro6.jpg", alt: "Shot Hearts 6" },
  { id: "shotHearts-7", src: "/images/galeria/perro/perro8.jpg", alt: "Shot Hearts 7" },
  { id: "shotHearts-8", src: "/images/galeria/perro/perro1.jpg", alt: "Shot Hearts 8" },
];

// Perro Gallery
export const perroImagesData: ImageData[] = [
  { id: "perro-1", src: "/images/galeria/perro/perro1.jpg", alt: "Perro photograph 1" },
  { id: "perro-2", src: "/images/galeria/perro/perro2.jpg", alt: "Perro photograph 2" },
  { id: "perro-3", src: "/images/galeria/perro/perro3.jpg", alt: "Perro photograph 3" },
  { id: "perro-4", src: "/images/galeria/perro/perro4.jpg", alt: "Perro photograph 4" },
  { id: "perro-5", src: "/images/galeria/perro/perro5.jpg", alt: "Perro photograph 5" },
  { id: "perro-6", src: "/images/galeria/perro/perro6.jpg", alt: "Perro photograph 6" },
  { id: "perro-7", src: "/images/galeria/perro/perro7.jpg", alt: "Perro photograph 7" },
  { id: "perro-8", src: "/images/galeria/perro/perro8.jpg", alt: "Perro photograph 8" },
];

// Full Heaven/Hell Gallery - Mixed Collection (Original)
export const fullHavenHellImagesData: ImageData[] = [
  // 01 - ONI-OOH PHOTOGRAPHY
  { id: "all-1", src: "/images/galeria/oni/oni5.jpg", alt: "All Categories 1 - ONI" },
  { id: "all-2", src: "/images/galeria/oni/oni6.jpg", alt: "All Categories 2 - ONI" },
  // 02 - THE MAURICE
  { id: "all-3", src: "/images/galeria/girasoles/girasol1.jpg", alt: "All Categories 3 - Commercial" },
  { id: "all-4", src: "/images/galeria/girasoles/girasol2.jpg", alt: "All Categories 4 - Commercial" },
  // 03 - LAS HERMANAS DEL DESTINO - CLOTO
  { id: "all-5", src: "/images/galeria/carbon/boceto1.jpg", alt: "All Categories 5 - Landscape" },
  { id: "all-6", src: "/images/galeria/carbon/boceto3.jpg", alt: "All Categories 6 - Landscape" },
  // 04 - EL LUGAR DONDE NOS CONOCIMOS / 3:00:00 - AM
  { id: "all-7", src: "/images/galeria/callejon/callejon1.jpg", alt: "All Categories 7 - Event" },
  { id: "all-8", src: "/images/galeria/callejon/callejon2.jpg", alt: "All Categories 8 - Event" },
  // 05 - LAS HERMANAS DEL DESTINO - LAQUESIS
  { id: "all-9", src: "/images/galeria/woman/woman1.jpg", alt: "All Categories 9 - Fashion" },
  { id: "all-10", src: "/images/galeria/woman/woman2.jpg", alt: "All Categories 10 - Fashion" },
  // 06 - JESUS CORRIENDO A LOS COMERCIANTES DE TU TEMPLO
  { id: "all-11", src: "/images/galeria/iglesia/iglesia8.jpg", alt: "All Categories 11 - Editorial" },
  { id: "all-12", src: "/images/galeria/iglesia/iglesia2.jpg", alt: "All Categories 12 - Editorial" },
  // 07 - PHOTOGRAPHY OF SHOT HEARTS
  { id: "all-13", src: "/images/galeria/perro/perro1.jpg", alt: "All Categories 13 - Shot Hearts" },
  { id: "all-14", src: "/images/galeria/perro/perro2.jpg", alt: "All Categories 14 - Shot Hearts" },
  // 08 - FULL HEAVEN/HELL
  { id: "all-15", src: "/images/galeria/oni/oni2.jpg", alt: "All Categories 15 - Full Heaven/Hell" },
  { id: "all-16", src: "/images/galeria/iglesia/iglesia6.jpg", alt: "All Categories 16 - Full Heaven/Hell" },
  // 09 - PERRO
  { id: "all-17", src: "/images/galeria/perro/perro3.jpg", alt: "All Categories 17 - Perro" },
  { id: "all-18", src: "/images/galeria/perro/perro4.jpg", alt: "All Categories 18 - Perro" },
];


// Categories Data
export const categories: CategoryData[] = [
  {
    id: "01",
    title: "ONI-OOH PHOTOGRAPHY",
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
    title: "THE MAURICE",
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
    title: "LAS HERMANAS DEL DESTINO - CLOTO",
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
    title: "EL LUGAR DONDE NOS CONOCIMOS",
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
    title: "LAS HERMANAS DEL DESTINO - LAQUESIS",
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
    title: "JESUS CORRIENDO A LOS COMERCIANTES DE TU TEMPLO",
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
    title: "PHOTOGRAPHY OF SHOT HEARTS",
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
  {
    id: "09",
    title: "3:00:00 - AM",
    titleKey: "perroTitle",
    tagline: "PET PHOTOGRAPHY",
    taglineKey: "perroTagline",
    description: "Capturin the playful spirit and unique personality of our beloved companions.",
    descriptionKey: "perroDescription",
    href: "/galeria/perro",
    images: perroImagesData,
    totalImages: perroImagesData.length,
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
    rightTop1: "/images/galeria/callejon/callejon1.jpg",
    rightTop2: "/images/galeria/carbon/boceto1.jpg",
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

//CONACT PAGE CONFIGURATION
export const contactInfo: ContactInfo = {
  title: "WORK WITH ME",
  titleJa: "一緒に働きましょう",
  website: "https://portafolioefra.vercel.app/",
  websiteLabel: "Website Development",
  email: "ulisesefrain32@gmail.com",
  emailLabel: "E-mail",
  phone: "+52 3327-4093-28",
  phoneLabel: "Telephone",
  contactImageUrl: "/images/galeria/17.webp",
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

//ABOUT PAGE CONFIGURATION
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
