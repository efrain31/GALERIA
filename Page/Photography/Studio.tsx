"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { fotografiaStudio } from "@/data/data";

export default function Studio() {
  return <ImagenGrid images={fotografiaStudio} title="Estudio" />;
}
