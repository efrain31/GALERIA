"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import SubMenu from "./SubMenu";

export default function Navbar() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguage((prev) => (prev === "es" ? "en" : "es"));
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const navItems = {
    es: [
      { label: "Inicio", href: "/" },
      { label: "Portafolio", href: "/portafolio" },
      { label: "Acerca de", href: "/about" },
    ],
    en: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portafolio" },
      { label: "About", href: "/about" },
    ],
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#000", borderBottom: "1px solid #333" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box sx={{ fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer" }}>
              GALERIA
            </Box>
          </Link>

          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems[language].map((item) => (
              <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fff", textTransform: "uppercase", fontSize: "0.9rem" }}>
                  {item.label}
                </Button>
              </Link>
            ))}
            <SubMenu language={language} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
