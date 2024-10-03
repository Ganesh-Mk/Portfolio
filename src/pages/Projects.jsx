import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { projects, categories } from "../data/projectsData";

import ProjectItem from "../components/ProjectItem";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

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

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Projects;
