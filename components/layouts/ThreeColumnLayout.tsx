import { Box, Container } from "@mui/material";
import BackArrow from "@/components/BackArrow";

interface ThreeColumnLayoutProps {
  categoria: string;
  title: string;
  number: string;
  description: string;
}

export default function ThreeColumnLayout({
  categoria,
  title,
  number,
  description,
}: ThreeColumnLayoutProps) {
  return (
    <Box sx={{ backgroundColor: "#faf8f5", minHeight: "100vh", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <BackArrow href="/galeria" text="_ VOLVER _" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1fr 1fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* Left Column */}
          <Box>
            <Box
              sx={{
                width: "100%",
                paddingBottom: "120%",
                position: "relative",
                backgroundColor: "#d0d0d0",
                borderRadius: "4px",
                backgroundImage: `url(/images/galeria/${categoria}-1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
                overflow: "hidden",
                mb: 3,
              }}
            />
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[2, 3].map((item) => (
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

          {/* Center Column */}
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 12vw, 5rem)",
                color: "#ff0000",
                margin: "0 0 0.5rem 0",
                fontWeight: 900,
                letterSpacing: "-2px",
                lineHeight: 0.9,
              }}
            >
              {number}
            </h1>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                color: "#ff0000",
                margin: "0 0 2rem 0",
                fontWeight: 900,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#2a2a2a",
                margin: 0,
              }}
            >
              {description}
            </p>
          </Box>

          {/* Right Column */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[4, 5].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "100%",
                  paddingBottom: item === 4 ? "80%" : "100%",
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
