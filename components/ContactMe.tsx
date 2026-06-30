import { Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

interface ContactMeProps {
  galleryLink?: string;
}

export default function ContactMe({ galleryLink = "http://172.16.2.201:3000/galeria" }: ContactMeProps) {
  return (
    <Box sx={{ backgroundColor: "#f5f0eb", minHeight: { xs: "auto", md: "100vh" } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 0,
          minHeight: { xs: "auto", md: "100vh" },
          alignItems: "center",
        }}
      >
        {/* Left Section - Cream Background */}
        <Box
          sx={{
            backgroundColor: "#f5f0eb",
            py: { xs: 6, md: 0 },
            px: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
        <h2
          style={{
            fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
            fontWeight: 900,
            margin: "0 0 3rem 0",
            letterSpacing: "-1px",
            color: "#ff0000",
            lineHeight: 1.2,
          }}
        >
          WORK<br />
          WITH ME
        </h2>

        {/* Contact Items */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Website */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box sx={{ mt: 0.3 }}>
              <LanguageIcon sx={{ color: "#2a2a2a", fontSize: "1.2rem" }} />
            </Box>
            <Box>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, margin: "0 0 0.3rem 0", color: "#2a2a2a", letterSpacing: "0.5px" }}>
                Website
              </p>
              <a
                href="https://www.mydrygodstodie.com"
                style={{
                  fontSize: "0.8rem",
                  color: "#2a2a2a",
                  textDecoration: "none",
                }}
              >
                www.mydrygodstodie.com
              </a>
            </Box>
          </Box>

          {/* Email */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box sx={{ mt: 0.3 }}>
              <EmailIcon sx={{ color: "#2a2a2a", fontSize: "1.2rem" }} />
            </Box>
            <Box>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, margin: "0 0 0.3rem 0", color: "#2a2a2a", letterSpacing: "0.5px" }}>
                E-mail
              </p>
              <a
                href="mailto:hello@mydrygodstodie.com"
                style={{
                  fontSize: "0.8rem",
                  color: "#2a2a2a",
                  textDecoration: "none",
                }}
              >
                hello@mydrygodstodie.com
              </a>
            </Box>
          </Box>

          {/* Phone */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box sx={{ mt: 0.3 }}>
              <PhoneIcon sx={{ color: "#2a2a2a", fontSize: "1.2rem" }} />
            </Box>
            <Box>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, margin: "0 0 0.3rem 0", color: "#2a2a2a", letterSpacing: "0.5px" }}>
                Telephone
              </p>
              <a
                href="tel:+1234567890"
                style={{
                  fontSize: "0.8rem",
                  color: "#2a2a2a",
                  textDecoration: "none",
                }}
              >
                +1 (234) 567-8900
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

        {/* Right Section - Image */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", md: "85vh" },
            backgroundColor: "#ddd",
            backgroundImage: "url(/images/contact-photo.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: { xs: 0, md: "0 20px 0 0" },
          }}
        />
      </Box>
    </Box>
  );
}
