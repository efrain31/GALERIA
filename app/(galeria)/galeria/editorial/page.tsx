import SliderImageLayout from "@/components/layouts/SliderImageLayout";
import { categories, editorialImagesData } from "@/lib/data";

export default function EditorialPage() {
  const editorialCategory = categories[5];

  return (
    <SliderImageLayout
      categoria="editorial"
      title={editorialCategory.title}
      description={editorialCategory.description}
      images={editorialImagesData}
      totalImages={editorialCategory.totalImages}
    />
  );
}
