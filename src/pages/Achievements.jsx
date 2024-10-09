import React, { useEffect } from "react";
import AchievementItem from "../components/AchievementItem";
import { achievementData } from "../data/achievementsData";
import { ImageList, ImageListItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function Achievements() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={"1.7rem"}>
        {achievementData.map((data, index) => (
          <ImageListItem key={data.title}>
            <AchievementItem
              images={data.images}
              title={data.title}
              date={data.date}
              desc={data.desc}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </article>
  );
}

export default Achievements;
