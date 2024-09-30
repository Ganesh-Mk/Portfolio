import React, { useState } from "react";
import { images } from "../Images";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MailOutline,
  PhoneIphone,
  CalendarToday,
  LocationOnOutlined,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

function Sidebar() {
  const [openContent, setOpenContent] = useState(false);

  return (
    <aside className={openContent ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={images.avatar1} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Richard hanrick
          </h1>

          <p className="title">Web developer</p>
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
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                richard@example.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +1 (213) 352-2795
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarToday />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnOutlined />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <Facebook />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <Twitter />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
