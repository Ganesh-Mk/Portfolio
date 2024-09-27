import React, { useState } from "react";
import { images } from "../Images";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  VisibilityOutlined,
} from "@mui/icons-material";

const categories = [
  "All",
  "Web Development",
  "App Development",
  "Console Applications",
];
const projects = [
  {
    title: "WEB",
    category: "Web Development",
    image: images.project1,
    alt: "finance",
  },
  {
    title: "App",
    category: "App Development",
    image: images.project2,
    alt: "orizon",
  },
  {
    title: "Console",
    category: "Console Applications",
    image: images.project2,
    alt: "orizon",
  },
  {
    title: "Orizon",
    category: "Web Development",
    image: images.project2,
    alt: "orizon",
  },
  // Add more projects here if needed
];

function Portfolio() {
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
        <h2 className="h2 article-title">Portfolio</h2>
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
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={project.category.toLowerCase()}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <VisibilityOutlined />
                  </div>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
