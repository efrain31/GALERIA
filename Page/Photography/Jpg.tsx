"use client";

import ImagenGrid from "@/components/galerias/ImagenGrid";
import { fotografiaJpg } from "@/data/data";

export default function Jpg() {
  return <ImagenGrid images={fotografiaJpg} title="JPG" />;
}
