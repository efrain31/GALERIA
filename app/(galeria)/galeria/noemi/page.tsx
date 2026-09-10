import NoemiLayout from "@/components/layouts/NoemiLayout";
import { categories, noemiImagesData } from "@/lib/data";

export default function NoemiPage() {
  const noemiCategory = categories[9]; // Categoría 10 - Le vie en rose

  return (
    <NoemiLayout
      categoria="noemi"
      title={noemiCategory.title}
      number={noemiCategory.id}
      description={noemiCategory.description}
      images={noemiImagesData}
      totalImages={noemiCategory.totalImages}
      corriente={noemiCategory.corriente}
      tecnica={noemiCategory.tecnica}
      materiales={noemiCategory.materiales}
    />
  );
}
