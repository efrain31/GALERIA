import SliderCompactLayout from "@/components/layouts/SliderCompactLayout";
import { categories, noemiImagesData } from "@/lib/data";

export default function NoemiPage() {
  const noemiCategory = categories[9];

  return (
    <SliderCompactLayout
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
