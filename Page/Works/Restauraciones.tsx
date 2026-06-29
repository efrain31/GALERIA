"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { worksRestauraciones } from "@/data/data";

export default function Restauraciones() {
  return <ImagenGrid images={worksRestauraciones} title="Restauraciones" />;
}
