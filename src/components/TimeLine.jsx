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
            <p className="timeline-text">{item.description}</p>
            <br />
            <div className="blog-meta">
              <p className="blog-category">Period: </p>
              <span className="dot"></span>
              <span dateTime="2022-02-23">{item.period}</span>
            </div>
            {item.percentage !== undefined && (
              <div className="blog-meta">
                <p className="blog-category">Percentage: </p>
                <span className="dot"></span>
                <span dateTime="2022-02-23">{item.percentage}</span>
              </div>
            )}
            {item.workPlace !== undefined && (
              <div className="blog-meta">
                <p className="blog-category">Work Place: </p>
                <span className="dot"></span>
                <span dateTime="2022-02-23">{item.workPlace}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default TimeLine;
