"use client";

import { Box, Container, Typography } from "@mui/material";

export default function AleVazquez() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ color: "#fff" }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          El Artista
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#ccc" }}>
          Información detallada del artista y su trayectoria profesional.
        </Typography>
      </Box>
    </Container>
  );
}
