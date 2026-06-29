"use client";

import { Box, Container } from "@mui/material";

export default function Photography() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", color: "#fff" }}>
        <h1>Fotografía</h1>
        <p>Selecciona una categoría para ver las imágenes</p>
      </Box>
    </Container>
  );
}
