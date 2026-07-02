import SliderImageGridLayout from "@/components/layouts/SliderImageGridLayout";
import { categories, shotHeartsImagesData } from "@/lib/data";

export default function ShotHeartsPage() {
  const shotHeartsCategory = categories[6];

  return (
    <SliderImageGridLayout
      categoria="shot-hearts"
      title={shotHeartsCategory.title}
      number={shotHeartsCategory.id}
      description={shotHeartsCategory.description}
      images={shotHeartsImagesData}
      totalImages={shotHeartsCategory.totalImages}
      titleKey="shotHeartsTitle"
    />
  );
}
