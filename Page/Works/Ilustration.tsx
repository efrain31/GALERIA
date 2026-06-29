"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { worksIlustracion } from "@/data/data";

export default function Ilustration() {
  return <ImagenGrid images={worksIlustracion} title="Ilustración" />;
}
