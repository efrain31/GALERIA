import ThreeColumnLayout from "@/components/layouts/ThreeColumnLayout";
import { categories, eventImagesData } from "@/lib/data";

export default function EventPage() {
  const eventCategory = categories[3];

  return (
    <ThreeColumnLayout
      categoria="event"
      title={eventCategory.title}
      number={eventCategory.id}
      description={eventCategory.description}
      images={eventImagesData}
      corriente={eventCategory.corriente}
      tecnica={eventCategory.tecnica}
      materiales={eventCategory.materiales}
    />
  );
}
