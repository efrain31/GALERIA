export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" style={{ margin: 0, padding: 0, backgroundColor: "#000", height: "100%" }}>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#000", color: "#fff", height: "100vh", overflow: "hidden" }}>
        <main style={{ height: "100vh", margin: 0, padding: 0, backgroundColor: "#000" }}>{children}</main>
      </body>
    </html>
  );
}
