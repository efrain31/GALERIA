"use client";

import { Box, Card, CardMedia, Typography } from "@mui/material";
import { ImageData } from "@/data/data";
import { useState } from "react";

interface ImagenCardProps {
  image: ImageData;
}

export default function ImagenCard({ image }: ImagenCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        bgcolor: "#1a1a1a",
        border: "1px solid #333",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "#666",
          boxShadow: "0 8px 24px rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 300,
          bgcolor: "#000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          {image.url ? (
            <img
              src={image.url}
              alt={image.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
          ) : (
            "Imagen no disponible"
          )}
        </Box>
      </CardMedia>

      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
          {image.title}
        </Typography>
        {image.description && (
          <Typography variant="body2" sx={{ color: "#999" }}>
            {image.description}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
