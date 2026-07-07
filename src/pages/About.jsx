import { useEffect } from "react";
import TimeLine from "../components/TimeLine";
import ServiceItems from "../components/ServiceItems";
import { Button } from "@mui/material";
import { useSanityQuery } from "../lib/useSanityQuery";
import {
  siteSettingsQuery,
  servicesQuery,
  educationQuery,
  experienceQuery,
} from "../lib/queries";
import Loader from "../components/Loader";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { data: settings } = useSanityQuery(siteSettingsQuery);
  const { data: services } = useSanityQuery(servicesQuery);
  const { data: education } = useSanityQuery(educationQuery);
  const { data: experience } = useSanityQuery(experienceQuery);

  const ready = settings && services && education && experience;

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      {!ready ? (
        <Loader />
      ) : (
        <>
          <section className="about-text">
            <p>{settings.aboutText}</p>
          </section>

          {settings.resumeUrl && (
            <a href={settings.resumeUrl} target="_blank" rel="noreferrer">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  width: {
                    xs: "100%",
                    md: "15rem",
                  },
                  margin: "0 0 2rem 0",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  borderRadius: "1rem",
                  cursor: "pointer",
                  border: "1px solid #FFDB70",
                }}
              >
                View Resume
              </Button>
            </a>
          )}

          {/* service */}
          <section className="service">
            <h3 className="h3 service-title">What i&apos;m doing</h3>

            <ul className="service-list">
              <ServiceItems servicesData={services} />
            </ul>
          </section>

          {/* Education */}
          <TimeLine title="Education" data={education} />

          {/* Experience */}
          <TimeLine title="Experience" data={experience} />
        </>
      )}
    </article>
  );
}

export default About;
