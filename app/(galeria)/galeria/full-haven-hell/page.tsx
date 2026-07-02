import SliderImageGridLayout from "@/components/layouts/SliderImageGridLayout";
import { categories, fullHavenHellImagesData } from "@/lib/data";

export default function FullHavenHellPage() {
  const havenHellCategory = categories[7] as any;

  return (
    <SliderImageGridLayout
      categoria="full-haven-hell"
      title={havenHellCategory.title}
      description={havenHellCategory.description}
      images={fullHavenHellImagesData}
      totalImages={havenHellCategory.totalImages}
      number={havenHellCategory.id}
      titleKey="fullHavenHellTitle"
    />
  );
}
