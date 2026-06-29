"use client";

import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Socialicons() {
  const socials = [
    {
      icon: FacebookIcon,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: InstagramIcon,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: TwitterIcon,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: LinkedInIcon,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {socials.map((social) => (
        <IconButton
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff", "&:hover": { color: "#ddd" } }}
        >
          <social.icon />
        </IconButton>
      ))}
    </Box>
  );
}
