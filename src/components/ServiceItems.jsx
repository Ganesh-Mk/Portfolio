import React from "react";

function ServiceItems({ servicesData }) {
  return (
    <>
      {servicesData.map((service) => (
        <li className="service-item" key={service.id}>
          <div className="service-icon-box">
            <img src={service.icon} alt={service.alt} width="40" />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">{service.title}</h4>
            <p className="service-item-text">{service.description}</p>
          </div>
        </li>
      ))}
    </>
  );
}

export default ServiceItems;
