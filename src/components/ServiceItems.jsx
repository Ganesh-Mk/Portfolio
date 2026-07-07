import React from "react";

function ServiceItems({ servicesData }) {
  return (
    <>
      {servicesData.map((service) => {
        const Icon = service.icon;
        return (
          <li
            className="service-item"
            key={service.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            {/* Row 1: icon + title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div className="service-icon-box" style={{ margin: 0 }}>
                <Icon
                  aria-label={service.alt}
                  sx={{ fontSize: 40, color: "#FFDB70", display: "block" }}
                />
              </div>
              <h4 className="h4 service-item-title" style={{ margin: 0 }}>
                {service.title}
              </h4>
            </div>

            {/* Row 2: full-width description */}
            <p
              className="service-item-text"
              style={{ width: "100%", textAlign: "left" }}
            >
              {service.description}
            </p>
          </li>
        );
      })}
    </>
  );
}

export default ServiceItems;
