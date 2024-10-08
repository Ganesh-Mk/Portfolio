import React from "react";
import {
  backendSkillsData,
  frontendSkillsData,
  programmingLangSkillsData,
} from "../data/skills";
import SkillsItems from "../components/SkillsItems";

function Skills() {
  return (
    <article className="skills active" data-page="skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      <section className="skill">
        <h3 className="h3 skills-title">Overview Skills</h3>

        <div
          style={{
            display: "grid",
            justifyContent: "end",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            justifyItems: "center",
            padding: ".5rem 0rem",
          }}
        >
          <p className="skillsOverviewText"></p>
          <p className="skillsOverviewText">Basic</p>
          <p className="skillsOverviewText">Good</p>
          <p className="skillsOverviewText">Skilled</p>
          <p className="skillsOverviewText">Master</p>
        </div>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend Development</h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend Development</h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">
                Core Subjects - OS, CN, DBMS, SDE, CyberSecurity
              </h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "40%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Problem Solving / DSA</h5>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>

      <SkillsItems title="Frontend" skillsData={frontendSkillsData} />
      <SkillsItems title="Backend" skillsData={backendSkillsData} />
      <SkillsItems
        title="Programming Languages"
        skillsData={programmingLangSkillsData}
      />
    </article>
  );
}

export default Skills;
