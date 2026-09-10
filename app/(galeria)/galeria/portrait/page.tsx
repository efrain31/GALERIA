import SliderTwoColumnLayout from "@/components/layouts/SliderTwoColumnLayout";
import { categories, portraitImagesData } from "@/lib/data";

export default function PortraitPage() {
  const portraitCategory = categories[0];

  return (
    <SliderTwoColumnLayout
      categoria="portrait"
      title={portraitCategory.title}
      number={portraitCategory.id}
      tagline={portraitCategory.tagline}
      description={portraitCategory.description}
      images={portraitImagesData}
      totalImages={portraitCategory.totalImages}
      titleKey={portraitCategory.titleKey}
      taglineKey={portraitCategory.taglineKey}
      corriente={portraitCategory.corriente}
      tecnica={portraitCategory.tecnica}
      materiales={portraitCategory.materiales}
    />
  );
}
