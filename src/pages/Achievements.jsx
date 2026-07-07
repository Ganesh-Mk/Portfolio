import { useEffect } from "react";
import AchievementItem from "../components/AchievementItem";
import { ImageList, ImageListItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useSanityQuery } from "../lib/useSanityQuery";
import { achievementsQuery } from "../lib/queries";
import Loader from "../components/Loader";

function Achievements() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: achievements } = useSanityQuery(achievementsQuery);

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      {!achievements ? (
        <Loader />
      ) : (
        <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={"1.7rem"}>
          {achievements.map((data) => (
            <ImageListItem key={data.id}>
              <AchievementItem
                images={data.images || []}
                title={data.title}
                date={data.date}
                desc={data.desc}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </article>
  );
}

export default Achievements;
