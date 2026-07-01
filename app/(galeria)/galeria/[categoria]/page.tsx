'use client';

import { Box, Container } from "@mui/material";
import Link from "next/link";
import BackArrow from "@/components/BackArrow";
import LandscapeLayout from "@/components/LandscapeLayout";
import GalleryGrid from "@/components/GalleryGrid";
import { categories } from "@/lib/data";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";

export default function CategoriaGaleria({
  params,
}: {
  params: { categoria: string };
}) {
  const isJapanese = useLanguageToggle();
  const workWithMeText = isJapanese ? "一緒に働きましょう →" : "WORK WITH ME →";
  const categoria = params.categoria;
  const data = categories.find(cat => cat.href === `/galeria/${categoria}`) || categories[0];

  if (categoria === "landscape") {
    return <LandscapeLayout id={data.id} title={data.title} description={data.description} />;
  }

  return (
    <div suppressHydrationWarning style={{ backgroundColor: "#faf8f5", minHeight: "100vh", padding: "2.5rem 0" }}>
      <Container maxWidth="lg">
        {/* Category Header */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start", mb: 2 }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                color: "#2a2a2a",
                margin: 0,
              }}
            >
              {data.id}
            </h1>
            <Box>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#2a2a2a",
                  margin: 0,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {data.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  margin: "0.5rem 0 0 0",
                }}
              >
                {data.description}
              </p>
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid #2a2a2a", mb: 4 }} />

          {/* Back Arrow - Above Contact Link */}
          <Box sx={{ mb: 3, display: "flex", justifyContent: "flex-start" }}>
            <BackArrow href="/galeria" text="_ VOLVER _" color="#ff0000" />
          </Box>

          {/* Contact Link */}
          <Link href="/galeria/contact" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-block",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#ff0000",
                  textDecoration: "none",
                  borderBottom: "2px solid #ff0000",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  margin: 0,
                  paddingBottom: "0.5rem",
                  cursor: "pointer",
                }}
              >
                {workWithMeText}
              </p>
            </Box>
          </Link>
        </Box>

        {/* Gallery Content Area */}
        <GalleryGrid images={data.images as any} columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} />
      </Container>
    </div>
  );
}
