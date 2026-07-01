import SliderThreeColumnLayout from "@/components/layouts/SliderThreeColumnLayout";
import { categories, landscapeImagesData } from "@/lib/data";

export default function LandscapePage() {
  const landscapeCategory = categories[2];

  return (
    <SliderThreeColumnLayout
      categoria="landscape"
      title={landscapeCategory.title}
      number={landscapeCategory.id}
      description={landscapeCategory.description}
      images={landscapeImagesData}
    />
  );
}
