import React, { useState } from "react";
import { images } from "../Images";
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
            Ganesh Koparde
          </h1>

          <p className="title">Full Stack Developer</p>
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

              <a href="mailto:ganeshmk247@gmail.com" className="contact-link">
                ganeshmk247@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+91 9380795986" className="contact-link">
                +91 9380795986
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarToday />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">Dec 17, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnOutlined />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Gokak, Karnataka, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://x.com/Ganesh_Koparde_" className="social-link">
              <Twitter />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/ganesh_mk_247/"
              className="social-link"
            >
              <Instagram />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/Ganesh-Mk" className="social-link">
              <GitHub />
            </a>
          </li>
          <li className="social-item">
            <a href="https://wa.me/9380795986" className="social-link">
              <WhatsApp />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/ganesh-koparde/"
              className="social-link"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
