import React from "react";
import BookIcon from "@mui/icons-material/Book";

function TimeLine({ title, educationData }) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <BookIcon />
        </div>

        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {educationData.map((item) => (
          <li className="timeline-item" key={item.id}>
            <h4 className="h4 timeline-item-title">{item.title}</h4>

            <span>{item.period}</span>

            <p className="timeline-text">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default TimeLine;
