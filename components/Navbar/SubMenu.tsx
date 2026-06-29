"use client";

import { Menu, MenuItem, Button, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

interface SubMenuProps {
  language: "es" | "en";
}

export default function SubMenu({ language }: SubMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = {
    es: ["Fotografía", "Obras", "Modelado"],
    en: ["Photography", "Works", "Modeling"],
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{ color: "#fff", textTransform: "uppercase", fontSize: "0.9rem" }}
      >
        {language === "es" ? "Galería" : "Gallery"}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ "& .MuiPaper-root": { bgcolor: "#1a1a1a", color: "#fff" } }}
      >
        {menuItems[language].map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
