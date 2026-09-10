import MasonryGalleryLayout from "@/components/layouts/MasonryGalleryLayout";
import { categories, editorialImagesData } from "@/lib/data";

export default function EditorialPage() {
  const editorialCategory = categories[5];

  return (
    <MasonryGalleryLayout
      categoria="editorial"
      title={editorialCategory.title}
      description={editorialCategory.description}
      images={editorialImagesData}
      totalImages={editorialCategory.totalImages}
      number={editorialCategory.id}
      titleKey="editorialTitle"
      corriente={editorialCategory.corriente}
      tecnica={editorialCategory.tecnica}
      materiales={editorialCategory.materiales}
    />
  );
}
