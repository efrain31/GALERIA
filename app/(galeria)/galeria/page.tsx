import { Box, Container } from "@mui/material";
import Link from "next/link";
import BackArrow from "@/components/BackArrow";

export default function Galeria() {
  const categories = [
    {
      id: "01",
      title: "PORTRAIT PHOTOGRAPHY",
      description: "Short description here",
      href: "/galeria/portrait",
    },
    {
      id: "02",
      title: "COMMERCIAL PHOTOGRAPHY",
      description: "Short description here",
      href: "/galeria/commercial",
    },
    {
      id: "03",
      title: "LANDSCAPE PHOTOGRAPHY",
      description: "Short description here",
      href: "/galeria/landscape",
    },
    {
      id: "04",
      title: "EVENT PHOTOGRAPHY",
      description: "Short description here",
      href: "/galeria/event",
    },
    {
      id: "05",
      title: "FASHION PHOTOGRAPHY",
      description: "Short description here",
      href: "/galeria/fashion",
    },
    {
      id: "06",
      title: "EDITORIAL PHOTOGRAPHY",
      description: "Short description here",
      href: "/galeria/editorial",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#faf8f5", minHeight: "100vh", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Title with Back Arrow */}
        <Box sx={{ mb: 6, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Box>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                color: "#ff0000",
                margin: "0 0 1rem 0",
                fontWeight: 900,
                letterSpacing: "-2px",
              }}
            >
              TABLE OF
            </h1>
          </Box>
          <BackArrow href="/about" text="_ VOLVER _" />
        </Box>
        <Box sx={{ borderBottom: "2px solid #2a2a2a", pb: 3, mb: 4 }} />

        {/* Content Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          {/* Left - Categories List */}
          <Box>
            {categories.map((category, index) => (
              <Link key={category.id} href={category.href} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    mb: 3,
                    pb: 3,
                    borderBottom: index < categories.length - 1 ? "1px solid #2a2a2a" : "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(10px)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <h2
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        color: "#2a2a2a",
                        margin: 0,
                      }}
                    >
                      {category.id}
                    </h2>
                    <Box>
                      <h3
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#2a2a2a",
                          margin: 0,
                          letterSpacing: "1px",
                        }}
                      >
                        {category.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          margin: "0.5rem 0 0 0",
                        }}
                      >
                        {category.description}
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>

          {/* Right - Images and CONTENTS */}
          <Box sx={{ position: "relative", minHeight: "400px" }}>
            {/* Sample Images */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: "url(/images/galeria/sample1.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: "url(/images/galeria/sample2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>

            {/* CONTENTS Text */}
            <h2
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                color: "#ff0000",
                margin: "0 0 2rem 0",
                fontWeight: 900,
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              CONTENTS
            </h2>

            {/* Divider */}
            <Box sx={{ borderBottom: "1px solid #2a2a2a", mb: 3 }} />

            {/* Categories 05-06 */}
            <Box>
              {categories.slice(4).map((category, index) => (
                <Link key={category.id} href={category.href} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      mb: 2,
                      pb: 2,
                      borderBottom: index < 1 ? "1px solid #2a2a2a" : "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(10px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <h3
                        style={{
                          fontSize: "2rem",
                          fontWeight: 900,
                          color: "#2a2a2a",
                          margin: 0,
                        }}
                      >
                        {category.id}
                      </h3>
                      <Box>
                        <h4
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            color: "#2a2a2a",
                            margin: 0,
                            letterSpacing: "0.5px",
                          }}
                        >
                          {category.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            color: "#666",
                            margin: "0.3rem 0 0 0",
                          }}
                        >
                          {category.description}
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom Images */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "180px",
              backgroundColor: "#d0d0d0",
              borderRadius: "4px",
              backgroundImage: "url(/images/galeria/sample3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              width: "100%",
              height: "180px",
              backgroundColor: "#d0d0d0",
              borderRadius: "4px",
              backgroundImage: "url(/images/galeria/sample4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              width: "100%",
              height: "180px",
              backgroundColor: "#d0d0d0",
              borderRadius: "4px",
              backgroundImage: "url(/images/galeria/sample5.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
