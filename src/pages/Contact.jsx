import React from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

function Contact() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <h3 className="h3 form-title" style={{ textAlign: "center" }}>
        Connect with me
      </h3>

      <ul
        className="social-list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.3rem",
          marginBottom: "2rem",
        }}
      >
        <li className="social-item">
          <a
            href="https://www.instagram.com/ganesh_mk_247/"
            className="social-link"
          >
            <Instagram
              style={{
                width: "2.3rem",
                height: "3rem",
              }}
            />
          </a>
        </li>
        <li className="social-item">
          <a href="https://x.com/Ganesh_Koparde_" className="social-link">
            <Twitter
              style={{
                width: "2.3rem",
                height: "3rem",
              }}
            />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/ganesh-koparde/"
            className="social-link"
          >
            <LinkedIn
              style={{
                width: "2.3rem",
                height: "3rem",
              }}
            />
          </a>
        </li>

        <li className="social-item">
          <a href="https://github.com/Ganesh-Mk" className="social-link">
            <GitHub
              style={{
                width: "2.3rem",
                height: "3rem",
              }}
            />
          </a>
        </li>

        <li className="social-item">
          <a href="https://wa.me/9380795986" className="social-link">
            <WhatsApp
              style={{
                width: "2.3rem",
                height: "3rem",
              }}
            />
          </a>
        </li>
      </ul>

      <section className="contact-form">
        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
            <SendIcon />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
