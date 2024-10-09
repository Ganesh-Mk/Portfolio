import React, { useEffect } from "react";
import TimeLine from "../components/TimeLine";
import { educationData } from "../data/education";
import { experienceData } from "../data/experience";
import ServiceItems from "../components/ServiceItems";
import { servicesData } from "../data/serviceItems";

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
          A dedicated developer with experience in both web and app development,
          specializing in full-stack projects. I have a strong foundation in
          problem-solving. I am currently pursuing my 5th semester of BCA at KLE
          Society's College of BCA, Gokak.
        </p>

        <p>
          I've interned in collaborative environments, utilizing GitHub for
          version control and delivering high-quality, production-level code. My
          aim is to bring your projects to life with modern solutions and best
          practices. Let's create something amazing together!
        </p>
      </section>

      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <ServiceItems servicesData={servicesData} />
        </ul>
      </section>

      {/* Education */}
      <TimeLine title="Education" educationData={educationData} />

      {/* Experience */}
      <TimeLine title="Experience" educationData={experienceData} />
    </article>
  );
}

export default About;
