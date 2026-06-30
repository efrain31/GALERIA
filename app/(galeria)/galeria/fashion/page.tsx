import SliderImageGridLayout from "@/components/layouts/SliderImageGridLayout";

export default function FashionPage() {
  return (
    <SliderImageGridLayout
      categoria="fashion"
      title="FASHION PHOTOGRAPHY"
      number="05"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor congue nulla, id condimentum eros mattis ac. Sed vulputate justo justo, eget ullamcorper metus rhoncus sed. Sed at consequat odio."
      totalImages={9}
    />
  );
}
