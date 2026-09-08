import ThreeColumnLayout from "@/components/layouts/ThreeColumnLayout";
import { categories, perroImagesData } from "@/lib/data";

export default function PerroPage() {
  const perroCategory = categories[8];

  return (
    <ThreeColumnLayout
      categoria="perro"
      title={perroCategory.title}
      number={perroCategory.id}
      description={perroCategory.description}
      images={perroImagesData}
    />
  );
}
