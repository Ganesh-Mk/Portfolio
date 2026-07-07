import { Box, CircularProgress } from "@mui/material";

function Loader({ minHeight = "40vh" }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight,
        width: "100%",
      }}
    >
      <CircularProgress sx={{ color: "#FFDB70" }} />
    </Box>
  );
}

export default Loader;
