import React from "react";
import {
  backendSkillsData,
  frontendSkillsData,
  librarySkillsData,
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
              <h5 className="h5">Core Subject - OS, CN, DBMS, DAA</h5>
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
              <h5 className="h5">Data Structure and Algorithm</h5>
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
      <SkillsItems title="Library/Framework" skillsData={librarySkillsData} />
      <SkillsItems
        title="Programming Languages"
        skillsData={programmingLangSkillsData}
      />
    </article>
  );
}

export default Skills;
