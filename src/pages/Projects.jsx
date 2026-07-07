import React, { useEffect, useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import ProjectItem from "../components/ProjectItem";
import { Box } from "@mui/material";
import { useSanityQuery } from "../lib/useSanityQuery";
import { projectsQuery } from "../lib/queries";
import Loader from "../components/Loader";

// Preferred display order for category filter chips. Any category not listed
// here (e.g. a new one added in Sanity) is appended after these.
const CATEGORY_ORDER = [
  "Web Development",
  "App Development",
  "Console Applications",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: projects } = useSanityQuery(projectsQuery);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleCategoryClick = (category) => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveCategory(category);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const list = projects || [];

  const presentCategories = [...new Set(list.map((p) => p.category).filter(Boolean))].sort(
    (a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a);
      const ib = CATEGORY_ORDER.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    }
  );
  const categories = ["All", ...presentCategories];

  const filteredProjects = list.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {!projects ? (
        <Loader />
      ) : (
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
              onClick={handleDropdownToggle}
            >
              <div className="select-value" data-select-value>
                {activeCategory}
              </div>

              <div className="select-icon">
                {isDropdownOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
              </div>
            </button>

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
              <ProjectItem key={project.id || index} project={project} />
            ))}
          </Box>
        </section>
      )}
    </article>
  );
}

export default Projects;
