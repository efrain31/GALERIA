"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { fotografiaFood } from "@/data/data";

export default function Food() {
  return <ImagenGrid images={fotografiaFood} title="Fotografía de Comida" />;
}
