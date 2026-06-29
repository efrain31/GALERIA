"use client";

import { Box, Container, Grid2 } from "@mui/material";
import { ImageData } from "@/data/data";
import ImagenCard from "./ImagenCard";

interface ImagenGridProps {
  images: ImageData[];
  title?: string;
}

export default function ImagenGrid({ images, title }: ImagenGridProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {title && (
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", margin: 0, fontWeight: "bold" }}>{title}</h1>
        </Box>
      )}

      <Grid2 container spacing={2}>
        {images.map((image) => (
          <Grid2 key={image.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ImagenCard image={image} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
