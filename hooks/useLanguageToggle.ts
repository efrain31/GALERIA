import { useState, useEffect } from 'react';

export const useLanguageToggle = () => {
  const [isJapanese, setIsJapanese] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const interval = setInterval(() => {
      setIsJapanese((prev) => !prev);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return isMounted ? isJapanese : true;
};

export const translations: Record<string, { en: string; ja: string }> = {
  portraitTitle: {
    en: "PORTRAIT PHOTOGRAPHY",
    ja: "ポートレート写真",
  },
  portraitTagline: {
    en: "THE BEAUTY OF IMPERFECTION",
    ja: "不完全さの美しさ",
  },
  commercialTitle: {
    en: "COMMERCIAL PHOTOGRAPHY",
    ja: "商業写真",
  },
  eventTitle: {
    en: "EVENT PHOTOGRAPHY",
    ja: "イベント写真",
  },
  fashionTitle: {
    en: "FASHION PHOTOGRAPHY",
    ja: "ファッション写真",
  },
  editorialTitle: {
    en: "EDITORIAL PHOTOGRAPHY",
    ja: "編集写真",
  },
  landscapeTitle: {
    en: "LANDSCAPE PHOTOGRAPHY",
    ja: "風景写真",
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
