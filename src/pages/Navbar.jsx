import React from "react";

function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={
              activeSection === "About" ? " navbar-link active" : "navbar-link"
            }
            onClick={() => setActiveSection("About")}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Skills" ? " navbar-link active" : "navbar-link"
            }
            onClick={() => setActiveSection("Skills")}
          >
            Skills
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Portfolio"
                ? " navbar-link active"
                : "navbar-link"
            }
            onClick={() => setActiveSection("Portfolio")}
          >
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Achievements"
                ? " navbar-link active"
                : "navbar-link"
            }
            onClick={() => setActiveSection("Achievements")}
          >
            Achievements
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Contact"
                ? " navbar-link active"
                : "navbar-link"
            }
            onClick={() => setActiveSection("Contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
