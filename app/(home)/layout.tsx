export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ height: "100vh", margin: 0, padding: 0, backgroundColor: "#000", overflow: "hidden" }}>
      {children}
    </main>
  );
}
