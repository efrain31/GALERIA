import FilterableGalleryLayout from "@/components/layouts/FilterableGalleryLayout";
import { categories, fullHavenHellImagesData } from "@/lib/data";

export default function FullHavenHellPage() {
  const havenHellCategory = categories[7] as any;

  return (
    <FilterableGalleryLayout
      categoria="full-haven-hell"
      title={havenHellCategory.title}
      description={havenHellCategory.description}
      images={fullHavenHellImagesData}
      totalImages={havenHellCategory.totalImages}
      number={havenHellCategory.id}
      titleKey="fullHavenHellTitle"
      corriente={havenHellCategory.corriente}
      tecnica={havenHellCategory.tecnica}
      materiales={havenHellCategory.materiales}
    />
  );
}
