import { Box } from "@mui/material";
import Link from "next/link";

interface BackArrowProps {
  href: string;
  text?: string;
  position?: "top-right" | "top-left" | "bottom" | "inline";
  color?: string;
}

export default function BackArrow({
  href,
  text = "_ VOLVER _ ",
  position = "inline",
  color = "#ff0000",
}: BackArrowProps) {
  const content = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer" }}>
      <p style={{ fontSize: "1.5rem", margin: 0, color, fontWeight: "bold" }}>
        ←
      </p>
      <p
        style={{
          fontSize: "0.75rem",
          margin: 0,
          letterSpacing: "1px",
          color,
          fontWeight: 600,
        }}
      >
        {text}
      </p>
    </Box>
  );

  if (position === "top-right") {
    return (
      <Link href={href} style={{ textDecoration: "none", position: "absolute", top: "2rem", right: "2rem" }}>
        {content}
      </Link>
    );
  }

  if (position === "top-left") {
    return (
      <Link href={href} style={{ textDecoration: "none", position: "absolute", top: "2rem", left: "2rem" }}>
        {content}
      </Link>
    );
  }

  if (position === "bottom") {
    return (
      <Link href={href} style={{ textDecoration: "none", display: "flex", justifyContent: "center", py: 4 }}>
        {content}
      </Link>
    );
  }

  // inline (default)
  return <Link href={href} style={{ textDecoration: "none" }}>{content}</Link>;
}
