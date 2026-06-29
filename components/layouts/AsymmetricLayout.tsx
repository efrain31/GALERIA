import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";

interface AsymmetricLayoutProps {
  categoria: string;
  title: string;
  description: string;
}

export default function AsymmetricLayout({
  categoria,
  title,
  description,
}: AsymmetricLayoutProps) {
  return (
    <Box sx={{ backgroundColor: "#faf8f5", minHeight: "100vh", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <h2
            style={{
              fontSize: "0.85rem",
              letterSpacing: "2px",
              color: "#ff0000",
              margin: 0,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {title}
          </h2>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              mb: 3,
            }}
          >
            {[1, 2].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "100%",
                  paddingBottom: "60%",
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

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
            }}
          >
            {[3, 4].map((item) => (
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
        </Box>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "#2a2a2a",
            margin: 0,
            maxWidth: "100%",
          }}
        >
          {description}
        </p>
      </Container>
    </Box>
  );
}
