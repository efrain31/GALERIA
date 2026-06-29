"use client";

import { Box, Container, Typography } from "@mui/material";
import Socialicons from "@/components/Icons/Socialicons";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#000",
        color: "#fff",
        borderTop: "1px solid #333",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            GALERIA DE ARTE
          </Typography>
          <Socialicons />
          <Typography variant="caption" sx={{ display: "block", mt: 3, color: "#666" }}>
            © {new Date().getFullYear()} Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
