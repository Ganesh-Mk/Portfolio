import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, Snackbar, Alert, CircularProgress } from "@mui/material"; // Import Snackbar and Alert
import emailjs from "emailjs-com";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

function Contact() {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  }); // Snackbar state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields before submitting.",
        severity: "warning",
      });
      return;
    }

    setLoading(true);

    const emailData = {
      ...formData,
      from_name: "Portfolio Website",
      user_email: formData.email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID).then(
      (result) => {
        setLoading(false);
        setFormData({ fullname: "", email: "", message: "" });
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        }); // Show success toast
      },
      (error) => {
        console.error("Failed to send email.", error.text);
        setLoading(false);
        setSnackbar({
          open: true,
          message: "Failed to send message. Try again later.",
          severity: "error",
        }); // Show error toast
      }
    );
  };

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
            <Instagram style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
          <a href="https://x.com/Ganesh_Koparde_" className="social-link">
            <Twitter style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/ganesh-koparde/"
            className="social-link"
          >
            <LinkedIn style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
          <a href="https://github.com/Ganesh-Mk" className="social-link">
            <GitHub style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
          <a href="https://wa.me/9380795986" className="social-link">
            <WhatsApp style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
      </ul>

      <section className="contact-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              onChange={handleChange}
              value={formData.fullname}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            onChange={handleChange}
            value={formData.message}
          ></textarea>

          <button className="form-btn" type="submit" disabled={loading}>
            {loading ? (
              <>
                <CircularProgress size={24} color="inherit" />
                <span>Sending Message..</span>
              </>
            ) : (
              <>
                <SendIcon />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </section>
    </article>
  );
}

export default Contact;
