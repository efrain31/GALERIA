import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";

interface TwoColumnLayoutProps {
  categoria: string;
  title: string;
  tagline: string;
  description: string;
}

export default function TwoColumnLayout({
  categoria,
  title,
  tagline,
  description,
}: TwoColumnLayoutProps) {
  return (
    <Box sx={{ backgroundColor: "#faf8f5", minHeight: "100vh", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "start",
          }}
        >
          <Box>
            <h2
              style={{
                fontSize: "0.85rem",
                letterSpacing: "2px",
                color: "#ff0000",
                margin: "0 0 2rem 0",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {title}
            </h2>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                color: "#ff0000",
                margin: "0 0 2rem 0",
                fontWeight: 900,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
              }}
            >
              {tagline}
            </h1>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#2a2a2a",
                margin: 0,
                maxWidth: "500px",
              }}
            >
              {description}
            </p>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "100%",
                  paddingBottom: "100%",
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
      </Container>
    </Box>
  );
}
