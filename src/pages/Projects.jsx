import React, { useEffect, useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { projects, categories } from "../data/projectsData";

import ProjectItem from "../components/ProjectItem";
import { images } from "../Images";
import { Box } from "@mui/material";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleCategoryClick = (category) => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggles the dropdown state
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box ">
          <button
            className={`filter-select active`}
            data-select
            onClick={handleDropdownToggle} // Toggle dropdown on click
          >
            <div className="select-value" data-select-value>
              {activeCategory}
            </div>

            <div className="select-icon">
              {isDropdownOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            </div>
          </button>

          {/* Conditionally render the dropdown based on isDropdownOpen */}
          {isDropdownOpen && (
            <ul className="select-list">
              {categories.map((category, index) => (
                <li key={index} className="select-item">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    data-select-item
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "1.8rem",
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </Box>
      </section>
    </article>
  );
}

export default Projects;
