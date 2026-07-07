import { useEffect } from "react";
import TimeLine from "../components/TimeLine";
import { educationData } from "../data/education";
import { experienceData } from "../data/experience";
import ServiceItems from "../components/ServiceItems";
import { servicesData } from "../data/serviceItems";
import ResumeButton from "../components/ResumeButton";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Software Development Engineer with 1 year of experience shipping
          production full-stack AI products — autonomous agents, voice AI, and
          multi-tenant SaaS platforms. Multiple-time hackathon winner and
          student mentor with hands-on experience in system design,
          client-facing delivery, and taking products from idea to production
          rapidly.
        </p>
      </section>

      <ResumeButton />

      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <ServiceItems servicesData={servicesData} />
        </ul>
      </section>

      {/* Education */}
      <TimeLine title="Education" data={educationData} />

      {/* Experience */}
      <TimeLine title="Experience" data={experienceData} />
    </article>
  );
}

export default About;
