import React, { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; // Option 2

import { Instagram, VisibilityOutlined } from "@mui/icons-material";
import { images } from "../Images";
import CloseIcon from "@mui/icons-material/Close";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProjectItem({ index, project }) {
  const [openReadMoreDialog, setOpenReadMoreDialog] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  console.log(project);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const buttonContainer = {
    cursor: "pointer",
    width: "3rem",
    height: "3rem",
    padding: ".7rem",
  };
  const buttonTextStyle = {
    textAlign: "center",
    fontSize: "0.6rem",
    marginTop: "0.5rem",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    cssEase: "ease",
    pauseOnHover: false,
  };

  const handleReadMoreDialogOpen = () => {
    setOpenReadMoreDialog(true);
  };

  const handleReadMoreDialogClose = () => {
    setOpenReadMoreDialog(false);
  };

  return (
    <>
      <li
        key={index}
        className="project-item active"
        data-filter-item
        data-category={project.category.toLowerCase()}
        onClick={handleReadMoreDialogOpen}
      >
        <div>
          <figure className="project-img">
            <div
              className="project-item-icon-box"
              style={{ cursor: "pointer" }}
            >
              <VisibilityOutlined />
              <p style={{ fontSize: "0.6rem" }}>View More</p>
            </div>
            <img src={project.images[0]} alt={project.alt} loading="lazy" />
          </figure>

          <h3 className="project-title">{project.title}</h3>

          <p className="project-category">{`${project.desc.slice(
            0,
            100
          )}...`}</p>

          <div
            className="skillBox hidden"
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div className="skill service-item" style={buttonContainer}>
              <LaunchIcon className="project-btns" />
              <div className="skillName">
                <p style={buttonTextStyle}>Live</p>
              </div>
            </div>
            <div className="skill service-item" style={buttonContainer}>
              <GitHubIcon className="project-btns" />
              <div className="skillName">
                <p style={buttonTextStyle}>Repo</p>
              </div>
            </div>
            <div className="skill service-item" style={buttonContainer}>
              <MoreHorizIcon className="project-btns" />
              <div className="skillName">
                <p style={buttonTextStyle}>More</p>
              </div>
            </div>
          </div>
        </div>
      </li>

      <Dialog
        open={openReadMoreDialog}
        onClose={handleReadMoreDialogClose}
        aria-labelledby="read-more-dialog-title"
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            borderRadius: "1.5rem",
            backdropFilter: "blur(20px)",
            background: "rgba(0, 0, 0, 0.6)",
          },
        }}
        BackdropProps={{
          style: {
            backdropFilter: "blur(10px)",
            backgroundColor: "transparent",
          },
        }}
      >
        <DialogTitle
          id="read-more-dialog-title"
          component="div"
          sx={{
            position: "relative",
            display: "grid",
            placeItems: "center",
            padding: "1rem",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", lg: "2.4rem" },
              paddingRight: "2.2rem",
              color: "white",
              fontFamily: "poppins",
            }}
          >
            {project.title}
          </Typography>

          <IconButton
            aria-label="close"
            onClick={handleReadMoreDialogClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "text.primary",
            }}
          >
            <CloseIcon
              sx={{
                fontSize: "2.5rem",
                color: "white",
              }}
            />
          </IconButton>
        </DialogTitle>

        <DialogContent
          dividers
          className="has-scrollbar"
          sx={{ padding: { xs: "1rem", lg: "2rem" } }}
        >
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  src={image}
                  alt="image1"
                  style={{
                    borderRadius: "1rem",
                    maxWidth: "90%",
                    maxHeight: "20rem",
                    margin: "0 auto",
                    cursor: isDragging ? "grabbing" : "grab",
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                />
              </div>
            ))}
          </Slider>

          <Divider />
          <Divider />
          <Divider />

          <Typography variant="h2" gutterBottom sx={{ marginTop: "2rem" }}>
            <Box sx={{ whiteSpace: "pre-wrap" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "lightGrey",
                  fontFamily: "poppins",
                  fontSize: { xs: ".9rem", lg: "1.2rem" },
                  lineHeight: "1.5",
                }}
                dangerouslySetInnerHTML={{ __html: `${project.desc}` }}
              />
            </Box>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProjectItem;
