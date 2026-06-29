import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";

interface CompactLayoutProps {
  categoria: string;
  title: string;
  description: string;
}

export default function CompactLayout({
  categoria,
  title,
  description,
}: CompactLayoutProps) {
  return (
    <Box sx={{ backgroundColor: "#faf8f5", minHeight: "100vh", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
            gap: { xs: 2, md: 4 },
            mb: 8,
          }}
        >
          <h2
            style={{
              fontSize: "0.85rem",
              letterSpacing: "2px",
              color: "#ff0000",
              margin: 0,
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#2a2a2a",
              margin: 0,
            }}
          >
            {description}
          </p>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {[1, 2].map((item) => (
            <Box
              key={item}
              sx={{
                width: "100%",
                paddingBottom: "70%",
                position: "relative",
                backgroundColor: "#d0d0d0",
                borderRadius: "4px",
                backgroundImage: `url(/images/galeria/${categoria}-${item}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
                overflow: "hidden",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
