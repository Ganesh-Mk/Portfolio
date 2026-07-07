import { useEffect } from "react";
import SkillsItems from "../components/SkillsItems";
import { useSanityQuery } from "../lib/useSanityQuery";
import { skillsQuery } from "../lib/queries";
import Loader from "../components/Loader";

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { data: skills } = useSanityQuery(skillsQuery);

  // Group the flat skills list by category, preserving categoryOrder.
  const groups = [];
  const byCategory = new Map();
  for (const skill of skills || []) {
    if (!byCategory.has(skill.category)) {
      const group = {
        category: skill.category,
        order: skill.categoryOrder ?? 999,
        items: [],
      };
      byCategory.set(skill.category, group);
      groups.push(group);
    }
    byCategory.get(skill.category).items.push(skill);
  }
  groups.sort((a, b) => a.order - b.order);

  return (
    <article className="skills active" data-page="skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      {!skills ? (
        <Loader />
      ) : (
        groups.map((group) => (
          <SkillsItems
            key={group.category}
            title={group.category}
            skillsData={group.items}
          />
        ))
      )}
    </article>
  );
}

export default Skills;
