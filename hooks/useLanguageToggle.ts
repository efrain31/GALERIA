import { useState, useEffect } from 'react';

export const useLanguageToggle = () => {
  const [isJapanese, setIsJapanese] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJapanese((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return isJapanese;
};

// Translation keys and their corresponding translations
export const translations: Record<string, { en: string; ja: string }> = {
  portraitTitle: {
    en: "ONI-OOH PHOTOGRAPHY",
    ja: "ポートレート写真",
  },
  portraitTagline: {
    en: "THE BEAUTY OF IMPERFECTION",
    ja: "不完全さの美しさ",
  },
  commercialTitle: {
    en: "THE MAURICE",
    ja: "商業写真",
  },
  eventTitle: {
    en: "EL LUGAR DONDE NOS CONOCIMOS",
    ja: "イベント写真",
  },
  fashionTitle: {
    en: "LAS HERMANAS DEL DESTINO - LAQUESIS",
    ja: "ファッション写真",
  },
  editorialTitle: {
    en: "JESUS CORRIENDO A LOS COMERCIANTES DE TU TEMPLO",
    ja: "編集写真",
  },
  landscapeTitle: {
    en: "LAS HERMANAS DEL DESTINO - CLOTO",
    ja: "風景写真",
  },
  shotHeartsTitle: {
    en: "PHOTOGRAPHY OF SHOT HEARTS",
    ja: "ショットハーツ",
  },
  galleryTitle: {
    en: "GALLERY",
    ja: "ギャラリー",
  },
  featuredTitle: {
    en: "FEATURED",
    ja: "フィーチャー",
  },
  highlightsTitle: {
    en: "HIGHLIGHTS",
    ja: "ハイライト",
  },
  landscapeNumber: {
    en: "03",
    ja: "03",
  },
  portraitNumber: {
    en: "01",
    ja: "01",
  },
  commercialNumber: {
    en: "02",
    ja: "02",
  },
  eventNumber: {
    en: "04",
    ja: "04",
  },
  fashionNumber: {
    en: "05",
    ja: "05",
  },
  editorialNumber: {
    en: "06",
    ja: "06",
  },
  workWithMe: {
    en: "WORK WITH ME →",
    ja: "一緒に働きましょう →",
  },
  workWithMeSimple: {
    en: "WORK WITH ME",
    ja: "一緒に働きましょう",
  },
};
