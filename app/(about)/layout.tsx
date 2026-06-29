export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#faf8f5", color: "#2a2a2a" }}>
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
