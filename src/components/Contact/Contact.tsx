"use client";

import { useState } from 'react';
import './Contact.css';
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    service: '',
    resume: null as File | null,
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    phone: '',
  });
  const validateForm = () => {
    let valid = true;
    const errors = { email: '', phone: '' };

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Enter a valid email address";
      valid = false;
    }

    // ✅ Phone validation (+91 + 10 digits)
    const phoneRegex = /^\+91\d{10}$/;
    if (form.phone && !phoneRegex.test(form.phone)) {
      errors.phone = "Phone must be +91 followed by 10 digits";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, resume: file });
  };
  const uploadToCloudinary = async (file: File): Promise<string> => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "il-groups-resume-uploads");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtkxbpvdj/auto/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    console.log("Cloudinary result:", result);

    if (!result.secure_url) {
      console.error(result);
      throw new Error("Upload failed");
    }

    // 🔥 FORCE DOWNLOAD ACCESS
    let url = result.secure_url;
    url = url.replace("/upload/", "/upload/fl_attachment/");

    return url;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Validate before submit
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      let resumeUrl = "";

      if (form.resume) {
        resumeUrl = await uploadToCloudinary(form.resume);
      }

      await emailjs.send(
        "service_iegdb6x",
        "template_uklfuay",
        {
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          age: form.age,
          service: form.service,
          resume: resumeUrl,
        },
        "kjJczz1RYO02wvP8-"
      );

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="section-tag">Contact</div>
        <h1 className="section-title">Let's Build <span>Together</span></h1>
        <p>Have a project in mind? We'd love to hear about it. Reach out and our team will get back within 24 hours.</p>
      </div>

      <section className="contact-main">
        <div className="container">
          <div className="contact-info">
            <div className="section-tag">Getnnnn in Touch</div>
            <h2>We're Here to <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Help</span></h2>
            <p>Whether you're looking to start a new project, join our team, or just have a question — we're always happy to talk.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="cc-icon">📍</div>
                <div className="cc-text">
                  <h4>Headquarters</h4>
                  <p>TVS Shanmuga Nagar, Pudukkottai – 622001</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">📞</div>
                <div className="cc-text">
                  <h4>Call Us</h4>
                  <p>+91 99523 63079 · Mon–Sat, 9am–7pm IST</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">✉️</div>
                <div className="cc-text">
                  <h4>Email Us</h4>
                  <p>igroups2025@gmail.com · Replies within 24 hrs</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">💬</div>
                <div className="cc-text">
                  <h4>Live Chat</h4>
                  <p>Available on our website · 24/7 support</p>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link">
                <FaXTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">🎉</span>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out to I Groups. Our team will review your message and get back to you within 24 business hours.</p>
              </div>
            ) : (
              <>
                <h3>Send Us a Message</h3>
                <p>Fill in your details and we'll connect you with the right team.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="fullName" type="text" placeholder="Arun" value={form.fullName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+919952363079"
                        value={form.phone}
                        onChange={(e) => {
                          let value = e.target.value;

                          // Auto add +91
                          if (!value.startsWith("+91")) {
                            value = "+91" + value.replace(/^\+?91?/, "");
                          }

                          // Allow only numbers after +91
                          value = "+91" + value.slice(3).replace(/\D/g, "").slice(0, 10);

                          setForm({ ...form, phone: value });
                        }}
                      />
                      {formErrors.phone && (
                        <p style={{ color: "red", fontSize: "0.75rem" }}>
                          {formErrors.phone}
                        </p>
                      )}                
                        </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="arun@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.email && (
                      <p style={{ color: "red", fontSize: "0.75rem" }}>
                        {formErrors.email}
                      </p>
                    )}                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Age</label>
                      <input name="age" type="text" placeholder="25" value={form.age} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Service Interested In</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option>Assistant Manager</option>
                        <option>Senior Manager</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="aform-group">
                    <label>Resume / CV *</label>
                    <div className={`resume-upload-box ${form.resume ? 'has-file' : ''}`}>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
                      {form.resume ? (
                        <>
                          <span className="upload-icon">✅</span>
                          <div className="upload-text">File Selected</div>
                          <div className="upload-filename">{form.resume.name}</div>
                        </>
                      ) : (
                        <>
                          <span className="upload-icon">📎</span>
                          <div className="upload-text">Click to upload your resume</div>
                          <div className="upload-hint">PDF, DOC, DOCX — Max 5 MB</div>
                        </>
                      )}
                    </div>
                  </div>

                  {error && (
                    <div style={{ color: 'red', marginTop: '10px' }}>⚠️ {error}</div>
                  )}

                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container">
          <div className="map-box">
            {/* REAL GOOGLE MAP */}
            <iframe
              src="https://www.google.com/maps?q=TVS+Shanmuga+Nagar,+Pudukkottai+622001&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="real-map"
            />

            {/* YOUR EXISTING DESIGN OVERLAY (UNCHANGED)
  <div className="map-grid" />
  <div className="map-pin">📍</div>
  <div className="map-label">I Groups Headquarters</div>
  <div className="map-sublabel">TVS Shanmuga Nagar, Pudukkottai – 622001</div> */}
          </div>
        </div>
      </section>
    </div>
  );
}