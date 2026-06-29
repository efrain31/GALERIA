"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { modelingPortfolio } from "@/data/data";

export default function Modeling() {
  return <ImagenGrid images={modelingPortfolio} title="Portfolio de Modelado" />;
}
