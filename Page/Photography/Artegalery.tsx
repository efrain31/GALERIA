"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { fotografiaArtegalery } from "@/data/data";

export default function Artegalery() {
  return <ImagenGrid images={fotografiaArtegalery} title="Arte Galería" />;
}
