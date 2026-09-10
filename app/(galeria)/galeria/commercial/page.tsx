import SliderCompactLayout from "@/components/layouts/SliderCompactLayout";
import { categories, commercialImagesData } from "@/lib/data";

export default function CommercialPage() {
  const commercialCategory = categories[1];

  return (
    <SliderCompactLayout
      categoria="commercial"
      title={commercialCategory.title}
      number={commercialCategory.id}
      description={commercialCategory.description}
      images={commercialImagesData}
      totalImages={commercialCategory.totalImages}
      corriente={commercialCategory.corriente}
      tecnica={commercialCategory.tecnica}
      materiales={commercialCategory.materiales}
    />
  );
}
