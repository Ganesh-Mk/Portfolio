import React from "react";

function SkillsItems({ title, skillsData }) {
  return (
    <>
      <h3 className="h3 skills-title" style={{ marginTop: "50px" }}>
        {title}
      </h3>
      <div className="skillContainer">
        {skillsData.map((skill) => (
          <div key={skill.name} className="skillBox hidden">
            <div className="skill service-item">
              <img src={skill.image} alt={skill.alt} />
              <div className="skillName">
                {skill.name.length > 12 ? (
                  <p style={{ textAlign: "center", fontSize: ".8rem" }}>
                    {skill.name}
                  </p>
                ) : (
                  <p style={{ textAlign: "center" }}>{skill.name}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsItems;
