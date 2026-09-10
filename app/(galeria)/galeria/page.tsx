'use client';

import { Box, Container } from "@mui/material";
import Link from "next/link";
import BackArrow from "@/components/BackArrow";
import PromotionalBanner from "@/components/PromotionalBanner";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";
import { categories, mainPageConfig } from "@/lib/data";

export default function Galeria() {
  const isJapanese = useLanguageToggle();
  const tableOfText = isJapanese ? mainPageConfig.tableOfLabelJa : mainPageConfig.tableOfLabel;
  const contentsText = isJapanese ? mainPageConfig.contentsLabelJa : mainPageConfig.contentsLabel;
  const workWithMeText = isJapanese ? "一緒に働きましょう →" : mainPageConfig.workWithMeLink;

  return (
    <div suppressHydrationWarning style={{ backgroundColor: mainPageConfig.backgroundColor, minHeight: "100vh", padding: "2.5rem 0" }}>
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
                        fontSize: "clamp(2rem, 8vw, 4rem)",
                        fontWeight: 900,
                        color: "#ff0000",
                        margin: 0,
                      }}
                    >
                      {category.id}
                    </h2>
                    <Box>
                      <h3
                        style={{
                          fontSize: "clamp(0.85rem, 3vw, 1.5rem)",
                          fontWeight: 700,
                          color: "#ff0000",
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
                  backgroundImage: `url(${mainPageConfig.sampleImages.leftTop})`,
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
                  backgroundImage: `url(${mainPageConfig.sampleImages.rightTop})`,
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
                        fontSize: "clamp(2rem, 8vw, 4rem)",
                        fontWeight: 900,
                        color: "#ff0000",
                        margin: 0,
                      }}
                    >
                      {category.id}
                    </h2>
                    <Box>
                      <h3
                        style={{
                          fontSize: "clamp(0.85rem, 3vw, 1.5rem)",
                          fontWeight: 700,
                          color: "#ff0000",
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
                  backgroundImage: `url(${mainPageConfig.sampleImages.leftBottom1})`,
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
                  backgroundImage: `url(${mainPageConfig.sampleImages.leftBottom2})`,
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
            {categories.slice(4, 6).map((category) => (
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
                        fontSize: "clamp(1.5rem, 5vw, 3rem)",
                        fontWeight: 900,
                        color: "#ff0000",
                        margin: 0,
                      }}
                    >
                      {category.id}
                    </h3>
                    <Box>
                      <h4
                        style={{
                          fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)",
                          fontWeight: 700,
                          color: "#ff0000",
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
        <Box sx={{ mt: 8, pt: 6, borderTop: "2px solid #2a2a2a", mb: 8 }}>
          <Link href="/galeria/contact" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontSize: "3.5rem",
                  color: "#ff0000",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  margin: 0,
                  paddingBottom: "1.5rem",
                  borderBottom: "5px solid #ff0000",
                  lineHeight: 1.2,
                }}
              >
                {workWithMeText}
              </p>
            </Box>
          </Link>
        </Box>
      </Container>

      {/* Promotional Banner */}
      <Box sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 6, md: 8 } }}>
        <PromotionalBanner
          title={isJapanese ? "ポートレート写真" : "ONI-OOH PHOTOGRAPHY"}
          description={isJapanese
            ? "è¦ªå¯†ã§è¡¨ç¾åŠ›è±Šã‹ãªãƒãƒ¼ãƒˆãƒ¬ãƒ¼ãƒˆã‚’é€šã˜ã¦å€‹äººã®æœ¬è³ªã¨äººæ ¼ã‚’ã‚­ãƒ£ãƒ—ãƒãƒ£ã—ã¾ã™ã€‚"
            : "Capturing the essence and personality of individuals through intimate and expressive portraits."}
          imageUrl="/images/galeria/16.webp"
          linkHref="/galeria/portrait"
        />
      </Box>

      {/* FULL HOUSE Section Header */}
      <Box sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 4, md: 11 }, display: "flex", justifyContent: "flex-end", pr: { xs: 2, md: 20 } }}>
        <Box sx={{ textAlign: "right", width: "100%" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 12vw, 4.5rem)",
              color: "#ff0000",
              margin: "0 0 1.5rem 0",
              fontWeight: 900,
              letterSpacing: "-5px",
              lineHeight: 1,
              textAlign: "right",
            }}
          >
            {isJapanese ? "( フルハウス )" : "( FULL HOUSE )"}
          </h2>
          <Box sx={{ width: "100%", borderBottom: "2px solid #2a2a2a" }} />
        </Box>
      </Box>

      {/* Parallel Promotional Banners */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          mt: { xs: 6, md: 10 },
          mb: { xs: 8, md: 12 },
        }}
      >
        {/* Shot Hearts Banner */}
        <PromotionalBanner
          title={isJapanese ? "ショット・ハート" : "SHOT GALERRY"}
          description={isJapanese
            ? "æ„Ÿæƒ…çš„ãªãƒãƒ¼ãƒˆãƒ¬ãƒ¼ãƒˆã‚’é€šã˜ã¦ç”Ÿã®æ„Ÿæƒ…ã¨è¦ªå¯†ãªçž¬é–“ã‚’ã‚­ãƒ£ãƒ—ãƒãƒ£ã—ã¾ã™ã€‚"
            : "Capturing raw emotions and intimate moments through striking portraiture."}
          imageUrl="/images/galeria/9.png"
          linkHref="/galeria/shot-hearts"
        />

        {/* Full Heaven/Hell Banner */}
        <PromotionalBanner
          title={isJapanese ? "フル・ヘブン/ヘル" : "FULL HEAVEN/HELL"}
          description={isJapanese
            ? "å…‰ã¨å½±ã®å¯¾æ¯”ã€ç¾Žã¨æ··ä¹±ã®äºŒé¢æ€§ã‚’æŽ¢ã‚‹å†™çœŸä½œå“ã€‚"
            : "Exploring the contrast between light and shadow, beauty and chaos."}
          imageUrl="/images/galeria/11.png"
          linkHref="/galeria/full-haven-hell"
        />
      </Box>

      {/* Categories 09-10 List with Alternating Layout */}
      <Container maxWidth="lg">
        <Box sx={{ mt: { xs: 4, md: 6 }, mb: { xs: 8, md: 12 } }}>
          {categories.slice(8, 10).map((category, index) => (
            <Link key={category.id} href={category.href} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: { xs: 3, md: 6 },
                  mb: 6,
                  pb: 4,
                  borderBottom: "2px solid #2a2a2a",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                  // Alternate layout: even indices on left, odd on right
                  ...(index % 2 === 1 && { direction: "rtl" }),
                }}
              >
                {/* Text Content */}
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", direction: "ltr" }}>
                  <h3
                    style={{
                      fontSize: "clamp(2rem, 8vw, 3.5rem)",
                      fontWeight: 900,
                      color: "#ff0000",
                      margin: 0,
                      minWidth: "max-content",
                    }}
                  >
                    {category.id}
                  </h3>
                  <Box>
                    <h4
                      style={{
                        fontSize: "clamp(0.9rem, 3vw, 1.5rem)",
                        fontWeight: 700,
                        color: "#ff0000",
                        margin: 0,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {category.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
                        color: "#666",
                        margin: "0.5rem 0 0 0",
                        lineHeight: 1.4,
                      }}
                    >
                      {category.description}
                    </p>
                  </Box>
                </Box>

                {/* Images Grid */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2,
                    direction: "ltr",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      paddingBottom: "100%",
                      position: "relative",
                      backgroundColor: "#d0d0d0",
                      borderRadius: "4px",
                      backgroundImage: `url(/images/galeria/${category.href.split("/").pop()}/${category.href.includes("perro") ? "16.jwebp" : "n1.jpeg"})`,
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
                      backgroundImage: `url(/images/galeria/${category.href.split("/").pop()}/${category.href.includes("perro") ? "17.jwebp" : "n2.jpeg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </div>
  );
}
