import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galería de Arte",
  description: "Galería personal de arte y fotografía",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
