"use client";

import { Box, Container } from "@mui/material";

export default function Info() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", color: "#fff" }}>
        <h1>Información</h1>
        <p>Conoce más sobre el artista</p>
      </Box>
    </Container>
  );
}
