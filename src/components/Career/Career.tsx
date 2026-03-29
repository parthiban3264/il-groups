"use client";

import { useState } from 'react';
import './Career.css';
import emailjs from "@emailjs/browser";

const jobs = [
  { title: 'Senior React Developer', dept: 'Engineering', type: 'Full-time', loc: 'Chennai / Remote' },
  { title: 'Node.js Backend Engineer', dept: 'Engineering', type: 'Full-time', loc: 'Bangalore' },
  { title: 'UI/UX Designer', dept: 'Design', type: 'Full-time', loc: 'Chennai' },
  { title: 'DevOps Engineer', dept: 'Infrastructure', type: 'Full-time', loc: 'Remote' },
  { title: 'AI/ML Engineer', dept: 'Engineering', type: 'Full-time', loc: 'Hyderabad' },
  { title: 'Product Manager', dept: 'Product', type: 'Full-time', loc: 'Chennai' },
  { title: 'Business Development Executive', dept: 'Sales', type: 'Full-time', loc: 'Mumbai' },
  { title: 'Technical Content Writer', dept: 'Marketing', type: 'Part-time', loc: 'Remote' },
  { title: 'QA Automation Engineer', dept: 'Engineering', type: 'Full-time', loc: 'Chennai / Remote' },
];

const perks = [
  { icon: '🏥', label: 'Health Insurance' },
  { icon: '🏠', label: 'Remote Friendly' },
  { icon: '📚', label: 'Learning Budget' },
  { icon: '⏰', label: 'Flexible Hours' },
  { icon: '✈️', label: 'Annual Retreat' },
  { icon: '💻', label: 'Device Allowance' },
  { icon: '🎂', label: 'Birthday Leave' },
  { icon: '🚀', label: 'Fast Growth' },
];

const roles = [
  'Assistant Manager',
  'Senior Manager',
  'Other',
];

const ageOptions = Array.from({ length: 33 }, (_, i) => 18 + i);

interface AppForm {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  service: string;
  resume: File | null;
}

export default function Career() {
  const [active, setActive] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<AppForm>({
    fullName: '', phone: '', email: '', age: '', service: '', resume: null,
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    phone: '',
  });

  const validateForm = () => {
    let valid = true;
    const errors = { email: '', phone: '' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Enter a valid email address";
      valid = false;
    }

    const phoneRegex = /^\+91\d{10}$/;
    if (form.phone && !phoneRegex.test(form.phone)) {
      errors.phone = "Phone must be +91 followed by 10 digits";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const filtered = active === 'All' ? jobs : jobs.filter(j => j.dept === active);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm(prev => ({ ...prev, resume: file }));
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

    let url = result.secure_url;
    url = url.replace("/upload/", "/upload/fl_attachment/");

    return url;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    <div className="career-page">
      <div className="page-hero">
        <div className="section-tag">Careers</div>
        <h1 className="section-title">Grow with <span>I Groups</span></h1>
        <p>Join a team of passionate innovators building the future of enterprise technology across India.</p>
      </div>
      <section className="career-culture">
        <div className="container">
          <div className="culture-text">
            <div className="section-tag">Life at I Groups</div>
            <h2 className="section-title">More Than a <span>Job</span></h2>
            <p>At I Groups, we believe great work happens when people feel empowered, supported, and inspired. We've built a culture that blends high performance with genuine care for every team member.</p>
            <p>From flexible work arrangements and continuous learning to fast career growth and a deeply collaborative environment — we invest in you as much as you invest in us.</p>
            <div className="culture-perks">
              {perks.map((p, i) => (
                <div className="perk" key={i}>
                  <span className="perk-icon">{p.icon}</span>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">🎉</span>
                <h4>Application Submitted!</h4>
                <p>
                  Thanks for applying to <strong>I Groups</strong>. Our HR team will review your
                  application and reach out within 3–5 business days.
                </p>
              </div>
            ) : (
              <>
                <h3>Quick Apply</h3>
                <p>Fill in the details below — takes less than 2 minutes.</p>
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
                    )}                  
                    </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>AGE *</label>
                      <div className="select-wrap">
                        <select name="age" value={form.age} onChange={handleChange} required>
                          <option value="">Select age</option>
                          {ageOptions.map(a => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Applying For *</label>
                      <div className="select-wrap">
                        <select name="service" value={form.service} onChange={handleChange} required>
                          <option value="">Select role</option>
                          {roles.map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
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
                    {loading ? 'Submitting...' : 'Submit Application →'}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}