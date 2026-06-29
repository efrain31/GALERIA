"use client";

import { Box, Container } from "@mui/material";

export default function Works() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", color: "#fff" }}>
        <h1>Obras de Arte</h1>
        <p>Selecciona una categoría para ver las obras</p>
      </Box>
    </Container>
  );
}
