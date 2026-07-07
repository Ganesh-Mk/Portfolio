import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";

const FILE_ID = "1t0Pfrh1mbTuymx7k-oMwYujoLI12D31u";
const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const VIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/view`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

function ResumeButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="large"
        sx={{
          color: "white",
          width: { xs: "100%", md: "15rem" },
          margin: "0 0 2rem 0",
          fontWeight: "bold",
          textTransform: "capitalize",
          borderRadius: "1rem",
          cursor: "pointer",
          border: "1px solid #FFDB70",
        }}
      >
        View Resume
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            borderRadius: "1.2rem",
            background: "rgba(10, 10, 10, 0.92)",
            backdropFilter: "blur(20px)",
            overflow: "hidden",
          },
        }}
        BackdropProps={{
          style: {
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.2,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "poppins",
              fontSize: "1.2rem",
            }}
          >
            Resume
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Tooltip title="Download">
              <IconButton
                component="a"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#FFDB70" }}
              >
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open in new tab">
              <IconButton
                component="a"
                href={VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#FFDB70" }}
              >
                <OpenInNewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Close">
              <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <DialogContent
          sx={{ p: 0, height: { xs: "70vh", md: "80vh" }, background: "#0d0d0d" }}
        >
          <iframe
            src={PREVIEW_URL}
            title="Ganesh Koparde Resume"
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="autoplay"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ResumeButton;
