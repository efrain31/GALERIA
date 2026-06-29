"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { fotografiaPhotoshoot } from "@/data/data";

export default function Photoshoot() {
  return <ImagenGrid images={fotografiaPhotoshoot} title="Sesión Fotográfica" />;
}
