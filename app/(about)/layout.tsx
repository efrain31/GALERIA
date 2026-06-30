export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ flex: 1, backgroundColor: "#faf8f5", color: "#2a2a2a", minHeight: "100vh" }}>
      {children}
    </main>
  );
}
