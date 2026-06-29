import { Box } from "@mui/material";
import Link from "next/link";

export default function About() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#faf8f5" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: "100vh",
        }}
      >
        {/* Left Section - Dark Background with Photo */}
        <Box
          sx={{
            backgroundColor: "#3a3a3a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, md: 0 },
            minHeight: { xs: "400px", md: "auto" },
          }}
        >
          <Box
            sx={{
              width: { xs: "220px", md: "300px" },
              height: { xs: "220px", md: "300px" },
              borderRadius: "50%",
              backgroundColor: "#b0b0b0",
              backgroundImage: "url(/images/about/profile.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            }}
          />
        </Box>

        {/* Right Section - Content */}
        <Box
          sx={{
            backgroundColor: "#faf8f5",
            p: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            position: "relative",
          }}
        >
          {/* Arrow Link - Top Right */}
          <Link href="/galeria" style={{ textDecoration: "none", position: "absolute", top: "2rem", right: "2rem" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer" }}>
              <p style={{ fontSize: "0.75rem", margin: 0, letterSpacing: "1px", color: "#ff0000", fontWeight: 600 }}>
                IR _ ALERÍA
              </p>
              <p style={{ fontSize: "1.5rem", margin: 0, color: "#ff0000", fontWeight: "bold" }}>
                →
              </p>
            </Box>
          </Link>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
              color: "#ff0000",
              margin: "0 0 0.2rem 0",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            Richard
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                marginLeft: "0.3em",
              }}
            >
              Sanchez
            </span>
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "0.85rem",
              letterSpacing: "3px",
              color: "#666",
              margin: "0 0 1.5rem 0",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Photographer
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#2a2a2a",
              margin: "0 0 1.5rem 0",
              maxWidth: "500px",
            }}
          >
            Con más de una década de experiencia en fotografía profesional, he
            dedicado mi carrera a capturar los momentos más significativos de la
            vida. Desde retratos íntimos hasta sesiones de moda de gran escala,
            mi enfoque se centra en la autenticidad y la expresión visual. Cada
            proyecto es una oportunidad para contar historias únicas a través del
            lente, combinando técnica artística con una sensibilidad especial hacia
            la luz, la composición y el detalle. Mi trabajo ha sido expuesto en
            galerías internacionales y ha colaborado con marcas reconocidas globalmente.
          </p>

          {/* Divider Line */}
          <Box sx={{ borderBottom: "1.5px solid #2a2a2a", my: 2 }} />

          {/* Contact Info */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, md: 5 },
              mt: 2,
            }}
          >
            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                📞
              </Box>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#2a2a2a" }}>
                123-456-7890
              </p>
            </Box>

            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                ✉️
              </Box>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#2a2a2a" }}>
                hello@reallygreatsite.com
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
