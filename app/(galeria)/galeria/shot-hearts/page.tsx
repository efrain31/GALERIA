import ShotHeartsLayout from "@/components/layouts/ShotHeartsLayout";
import { categories, shotHeartsImagesData } from "@/lib/data";

export default function ShotHeartsPage() {
  const shotHeartsCategory = categories[6];

  return (
    <ShotHeartsLayout
      categoria="shot-hearts"
      title={shotHeartsCategory.title}
      number={shotHeartsCategory.id}
      description={shotHeartsCategory.description}
      images={shotHeartsImagesData}
      totalImages={shotHeartsCategory.totalImages}
      titleKey="shotHeartsTitle"
      videoSrc="/images/splash/videohome.mp4"
      aboutTitle="ABOUT"
      aboutDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      aboutImage="/images/galeria/oni.jpg"
      aboutQuotes={[
        { text: "Making noise in world of rock.", author: "KEXP" },
        { text: "Artist to know.", author: "BILLBOARD" },
      ]}
      sliderTitle="GALLERY"
      sliderTitleKey="galleryTitle"
      dualImages={{
        left: {
          src: "/images/galeria/shothearts/modelaje/m2.jpeg",
          alt: "Shot Hearts dual image left"
        },
        right: {
          src: "/images/galeria/shothearts/modelaje/m4.jpeg",
          alt: "Shot Hearts dual image right"
        }
      }}
      horizontalSliders={[
        {
          images: shotHeartsImagesData,
          direction: 'right',
          title: 'Featured',
          titleKey: 'featuredTitle'
        },
        {
          images: shotHeartsImagesData,
          direction: 'left',
          title: 'Highlights',
          titleKey: 'highlightsTitle'
        }
      ]}
      corriente={shotHeartsCategory.corriente}
      tecnica={shotHeartsCategory.tecnica}
      materiales={shotHeartsCategory.materiales}
    />
  );
}
