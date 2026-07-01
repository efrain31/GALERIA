import SliderImageGridLayout from "@/components/layouts/SliderImageGridLayout";
import { categories, fashionImagesData } from "@/lib/data";

export default function FashionPage() {
  const fashionCategory = categories[4];

  return (
    <SliderImageGridLayout
      categoria="fashion"
      title={fashionCategory.title}
      number={fashionCategory.id}
      description={fashionCategory.description}
      images={fashionImagesData}
      totalImages={fashionCategory.totalImages}
    />
  );
}
