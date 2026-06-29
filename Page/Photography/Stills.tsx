"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { fotografiaStills } from "@/data/data";

export default function Stills() {
  return <ImagenGrid images={fotografiaStills} title="Stills" />;
}
