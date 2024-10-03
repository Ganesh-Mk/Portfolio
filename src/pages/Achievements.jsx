import React from "react";
import AchievementItem from "../components/AchievementItem";
import { achievementData } from "../data/achievementsData";

function Achievements() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {achievementData.map((data) => (
            <AchievementItem
              key={data.title}
              image={data.image}
              title={data.title}
              date={data.date}
              desc={data.desc}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Achievements;
