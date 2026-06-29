"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { worksPublicidad } from "@/data/data";

export default function Publicidad() {
  return <ImagenGrid images={worksPublicidad} title="Publicidad" />;
}
