import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallIcon from "@mui/icons-material/Call";

const marqaitProducts = [
  {
    name: "Truintel",
    note: "AI Search Visibility Platform",
    url: "https://truintel.ai/",
  },
  {
    name: "Kyro Systems",
    note: "AI Agency Platform",
    url: "https://www.kyro.systems/",
  },
  {
    name: "Smoodle AI",
    note: "AI Content Detection",
    url: "https://smoodle.ai/",
  },
  {
    name: "VakeelSaab",
    note: "Voice AI · 22+ languages",
    url: "tel:+914041895311",
    phone: true,
  },
];

const clients = [
  { name: "ACFM", url: "https://www.acfm.edu.in/" },
  { name: "Wiwaha", url: "https://www.wiwahabypraman.com/" },
  { name: "Rainbox", url: "https://app.rainbox.ai/" },
  { name: "BlogKit", url: "https://blog-kit-self.vercel.app/" },
  { name: "Upskill", url: "https://upskilldigitalacademy.vercel.app/" },
  { name: "SkodCyber", url: "https://skodcyber.vercel.app/" },
  { name: "Monely", url: "https://monely-landing-page.vercel.app/" },
];

const lovelyStats = ["600+ users", "100+ paid sales", "Creator marketplace"];

const cardBase = {
  display: "block",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.025)",
  borderRadius: "0.85rem",
  transition: "border-color .2s ease, background .2s ease, transform .2s ease",
  "&:hover": {
    borderColor: "rgba(255,219,112,0.35)",
    background: "rgba(255,255,255,0.05)",
    transform: "translateY(-2px)",
  },
};

const sectionLabel = {
  color: "#7f7f7f",
  textTransform: "uppercase",
  letterSpacing: "0.09em",
  fontSize: "0.68rem",
  fontWeight: 600,
  mb: 1.1,
};

function CompanyProjects() {
  return (
    <Box
      sx={{
        mb: "2rem",
        pb: "1.8rem",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Product */}
      <Typography sx={sectionLabel}>Product</Typography>
      <Box
        component="a"
        href="https://lovelydesign.in"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          ...cardBase,
          p: { xs: "1.1rem", md: "1.35rem 1.5rem" },
          mb: "1.7rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            mb: 0.9,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "1.15rem", md: "1.3rem" },
              fontFamily: "poppins",
            }}
          >
            Lovely Design
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              color: "#bdbdbd",
              fontSize: "0.82rem",
            }}
          >
            <span>lovelydesign.in</span>
            <ArrowOutwardIcon sx={{ fontSize: "1rem" }} />
          </Box>
        </Box>

        <Typography
          sx={{
            color: "#b7b7b7",
            fontSize: { xs: "0.83rem", md: "0.92rem" },
            lineHeight: 1.65,
            mb: 1.3,
            maxWidth: "64ch",
          }}
        >
          Sole architect and developer of a profitable design marketplace, built
          end-to-end from idea to production — international payments,
          authentication, analytics, deployment, and a creator marketplace where
          developers monetize their own website templates.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {lovelyStats.map((s) => (
            <Typography
              key={s}
              component="span"
              sx={{
                color: "#d8d8d8",
                fontSize: "0.72rem",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "0.5rem",
                px: 1,
                py: 0.4,
              }}
            >
              {s}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Company products */}
      <Typography sx={sectionLabel}>Marqait AI — Company Products</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: "0.7rem",
          mb: "1.7rem",
        }}
      >
        {marqaitProducts.map((item) => (
          <Box
            key={item.name}
            component="a"
            href={item.url}
            target={item.phone ? undefined : "_blank"}
            rel="noopener noreferrer"
            sx={{
              ...cardBase,
              p: "0.8rem 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  lineHeight: 1.25,
                }}
              >
                {item.name}
              </Typography>
              <Typography sx={{ color: "#8f8f8f", fontSize: "0.72rem" }}>
                {item.note}
              </Typography>
            </Box>
            {item.phone ? (
              <CallIcon sx={{ fontSize: "1.05rem", color: "#9a9a9a" }} />
            ) : (
              <ArrowOutwardIcon sx={{ fontSize: "1.05rem", color: "#9a9a9a" }} />
            )}
          </Box>
        ))}
      </Box>

      {/* Client websites */}
      <Typography sx={sectionLabel}>Client Websites</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {clients.map((item) => (
          <Box
            key={item.name}
            component="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ...cardBase,
              px: "0.9rem",
              py: "0.55rem",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
          >
            <Typography
              sx={{ color: "#e8e8e8", fontWeight: 500, fontSize: "0.85rem" }}
            >
              {item.name}
            </Typography>
            <ArrowOutwardIcon sx={{ fontSize: "0.95rem", color: "#8f8f8f" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CompanyProjects;
