'use client';

import { Box, Container } from "@mui/material";
import Link from "next/link";
import BackArrow from "@/components/BackArrow";
import { useLanguageToggle, translations } from "@/hooks/useLanguageToggle";

export default function Galeria() {
  const isJapanese = useLanguageToggle();
  const tableOfText = isJapanese ? "コンテンツ" : "TABLE OF";
  const contentsText = isJapanese ? "目次" : "CONTENTS";
  const workWithMeText = isJapanese ? "一緒に働きましょう →" : "WORK WITH ME →";
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
        {/* Header */}
        <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 10vw, 5rem)",
              color: "#ff0000",
              margin: 0,
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            {tableOfText}
          </h1>
          <BackArrow href="/about" text="_ VOLVER _" />
        </Box>
        <Box sx={{ borderBottom: "2px solid #2a2a2a", mb: 6 }} />

        {/* Main Grid Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            mb: 6,
          }}
        >
          {/* Left Column - Categories 01-02, Images, and Categories 03-04 */}
          <Box>
            {/* Categories 01-02 */}
            {categories.slice(0, 2).map((category) => (
              <Link key={category.id} href={category.href} style={{ textDecoration: "none" }}>
                <Box sx={{ cursor: "pointer", transition: "all 0.3s ease", "&:hover": { transform: "translateX(5px)" } }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 1 }}>
                    <h2
                      style={{
                        fontSize: "2rem",
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
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#2a2a2a",
                          margin: 0,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        {category.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#666",
                          margin: "0.3rem 0 0 0",
                        }}
                      >
                        {category.description}
                      </p>
                    </Box>
                  </Box>
                  <Box sx={{ borderBottom: "1px solid #2a2a2a", mb: 3 }} />
                </Box>
              </Link>
            ))}

            {/* Images */}
            <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 2, mb: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  paddingBottom: "80%",
                  position: "relative",
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
                  paddingBottom: "100%",
                  position: "relative",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: "url(/images/galeria/sample2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>

            {/* Categories 03-04 */}
            {categories.slice(2, 4).map((category) => (
              <Link key={category.id} href={category.href} style={{ textDecoration: "none" }}>
                <Box sx={{ cursor: "pointer", transition: "all 0.3s ease", "&:hover": { transform: "translateX(5px)" } }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 1 }}>
                    <h2
                      style={{
                        fontSize: "2rem",
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
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#2a2a2a",
                          margin: 0,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        {category.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#666",
                          margin: "0.3rem 0 0 0",
                        }}
                      >
                        {category.description}
                      </p>
                    </Box>
                  </Box>
                  <Box sx={{ borderBottom: "1px solid #2a2a2a", mb: 3 }} />
                </Box>
              </Link>
            ))}
          </Box>

          {/* Right Column */}
          <Box>
            {/* Top Images */}
            <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 2, mb: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  paddingBottom: "70%",
                  position: "relative",
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
                  paddingBottom: "100%",
                  position: "relative",
                  backgroundColor: "#d0d0d0",
                  borderRadius: "4px",
                  backgroundImage: "url(/images/galeria/sample4.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>

            {/* CONTENTS */}
            <h2
              style={{
                fontSize: "clamp(3rem, 15vw, 5.5rem)",
                color: "#ff0000",
                margin: "1rem 0 1.5rem 0",
                fontWeight: 900,
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              {contentsText}
            </h2>
            <Box sx={{ borderBottom: "2px solid #2a2a2a", mb: 3 }} />

            {/* Categories 05-06 */}
            {categories.slice(4).map((category) => (
              <Link key={category.id} href={category.href} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    mb: 2,
                    pb: 2,
                    borderBottom: "1px solid #2a2a2a",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <h3
                      style={{
                        fontSize: "1.5rem",
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
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "#2a2a2a",
                          margin: 0,
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {category.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.7rem",
                          color: "#666",
                          margin: "0.2rem 0 0 0",
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

        {/* Contact Link */}
        <Box sx={{ mt: 8, pt: 6, borderTop: "2px solid #2a2a2a" }}>
          <Link href="/galeria/contact" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#ff0000",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  margin: 0,
                  paddingBottom: "0.5rem",
                  borderBottom: "2px solid #ff0000",
                }}
              >
                {workWithMeText}
              </p>
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
