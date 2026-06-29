import { categoryData } from "@/utils/categoryData";
import TwoColumnLayout from "@/components/layouts/TwoColumnLayout";
import CompactLayout from "@/components/layouts/CompactLayout";
import ThreeColumnLayout from "@/components/layouts/ThreeColumnLayout";
import AsymmetricLayout from "@/components/layouts/AsymmetricLayout";

export default function CategoriaGaleria({
  params,
}: {
  params: { categoria: string };
}) {
  const categoria = params.categoria as keyof typeof categoryData;
  const data = categoryData[categoria] || categoryData.portrait;

  if (data.layout === "twoColumn") {
    return (
      <TwoColumnLayout
        categoria={categoria as string}
        title={data.title}
        tagline={data.tagline}
        description={data.description}
      />
    );
  }

  if (data.layout === "compact") {
    return (
      <CompactLayout
        categoria={categoria as string}
        title={data.title}
        description={data.description}
      />
    );
  }

  if (data.layout === "threeColumn") {
    return (
      <ThreeColumnLayout
        categoria={categoria as string}
        title={data.title}
        number={data.number}
        description={data.description}
      />
    );
  }

  if (data.layout === "asymmetric") {
    return (
      <AsymmetricLayout
        categoria={categoria as string}
        title={data.title}
        description={data.description}
      />
    );
  }

  return (
    <TwoColumnLayout
      categoria={categoria as string}
      title={data.title}
      tagline={data.tagline}
      description={data.description}
    />
  );
}
