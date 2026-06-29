"use client";

import { Box, Container, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ color: "#fff" }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Acerca de Mí
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#ccc" }}>
          Bienvenido a mi galería personal. Aquí comparto mi trabajo y pasión por el arte visual.
        </Typography>
      </Box>
    </Container>
  );
}
