import { useState } from "react";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MailOutline,
  PhoneIphone,
  CalendarToday,
  LocationOnOutlined,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { useSanityQuery } from "../lib/useSanityQuery";
import { siteSettingsQuery } from "../lib/queries";

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: LinkedIn,
  github: GitHub,
  whatsapp: WhatsApp,
};

function Sidebar() {
  const [openContent, setOpenContent] = useState(false);
  const { data } = useSanityQuery(siteSettingsQuery);
  const s = data || {};
  const socials = s.socials || {};

  return (
    <aside className={openContent ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          {s.avatar && (
            <img
              style={{ borderRadius: "1rem" }}
              src={s.avatar}
              alt={s.name || "Profile photo"}
              width="80"
            />
          )}
        </figure>

        <div className="info-content">
          <h1 className="name" title={s.name}>
            {s.name}
          </h1>

          <p className="title">{s.role}</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setOpenContent((prev) => !prev)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>

          {openContent ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {s.email && (
            <li className="contact-item">
              <div className="icon-box">
                <MailOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href={`mailto:${s.email}`} className="contact-link">
                  {s.email}
                </a>
              </div>
            </li>
          )}

          {s.phone && (
            <li className="contact-item">
              <div className="icon-box">
                <PhoneIphone />
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href={`tel:${s.phone}`} className="contact-link">
                  {s.phone}
                </a>
              </div>
            </li>
          )}

          {s.birthday && (
            <li className="contact-item">
              <div className="icon-box">
                <CalendarToday />
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time>{s.birthday}</time>
              </div>
            </li>
          )}

          {s.location && (
            <li className="contact-item">
              <div className="icon-box">
                <LocationOnOutlined />
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>{s.location}</address>
              </div>
            </li>
          )}
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          {Object.entries(socialIcons).map(([key, Icon]) =>
            socials[key] ? (
              <li className="social-item" key={key}>
                <a href={socials[key]} className="social-link" target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
