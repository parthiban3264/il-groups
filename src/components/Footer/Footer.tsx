import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="logo">
            <span className="logo-i">I</span>
            <span className="logo-groups"> Groups</span>
          </h2>

          <p className="footer-desc">
            Empowering enterprises with innovative technology solutions, expert talent,
            and transformative digital experiences.
          </p>

          <div className="socials">
            <a href="#" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.5H6V17H8.34ZM7.17 9.3C7.92 9.3 8.5 8.72 8.5 7.97C8.5 7.22 7.92 6.64 7.17 6.64C6.42 6.64 5.84 7.22 5.84 7.97C5.84 8.72 6.42 9.3 7.17 9.3ZM18 17V13.2C18 11.2 16.9 10.2 15.5 10.2C14.6 10.2 14.1 10.7 13.8 11.1V10.5H11.5V17H13.8V13.6C13.8 12.7 14.3 12.1 15.1 12.1C15.9 12.1 16.3 12.7 16.3 13.6V17H18Z" />
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer" className="social-icon" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.53 3H21L13.5 10.9L22 21H15.5L10.4 14.7L4.9 21H1.4L9.4 11.8L1.2 3H7.8L12.4 8.7L17.53 3ZM16.3 19H18.2L6.7 5H4.7L16.3 19Z" />
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12C2 17.02 5.66 21.13 10.44 21.88V14.89H7.9V12H10.44V9.8C10.44 7.3 11.93 5.89 14.22 5.89C15.32 5.89 16.48 6.08 16.48 6.08V8.53H15.2C13.94 8.53 13.56 9.32 13.56 10.13V12H16.36L15.91 14.89H13.56V21.88C18.34 21.13 22 17.02 22 12Z" />
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM18 6.5C18.83 6.5 19.5 5.83 19.5 5C19.5 4.17 18.83 3.5 18 3.5C17.17 3.5 16.5 4.17 16.5 5C16.5 5.83 17.17 6.5 18 6.5ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/internship">Internship</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/branches">Branches</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <div className="contact-item">
            <span className="icon" aria-hidden="true">
              <MapPin size={16} />
            </span>
            <p className="address">Viraganur, Madurai, 625009.</p>
          </div>

          <div className="contact-item">
            <span className="icon" aria-hidden="true">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="contact-icon-image"
                style={{ width: "16px", height: "16px" }}
              />
            </span>
            <a
              href="https://wa.me/918122757017"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="Open WhatsApp chat"
            >
              <Image
                src="/icons/phone-1-text.svg"
                alt="Phone number"
                width={132}
                height={18}
                className="contact-value-image"
                style={{ width: "132px", height: "18px" }}
              />
            </a>
          </div>

          <div className="contact-item">
            <span className="icon" aria-hidden="true">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="contact-icon-image"
                style={{ width: "16px", height: "16px" }}
              />
            </span>
            <a
              href="https://wa.me/919600899149"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="Open WhatsApp chat"
            >
              <Image
                src="/icons/phone-2-text.svg"
                alt="Phone number"
                width={132}
                height={18}
                className="contact-value-image"
                style={{ width: "132px", height: "18px" }}
              />
            </a>
          </div>

          <div className="contact-item">
            <span className="icon" aria-hidden="true">
              <Image
                src="/icons/email.svg"
                alt="Email"
                width={16}
                height={16}
                className="contact-icon-image"
                style={{ width: "16px", height: "16px" }}
              />
            </span>
            <a
              href="mailto:indialeadsoffice2123@gmail.com"
              className="contact-link"
              aria-label="Send email"
            >
              <Image
                src="/icons/email-text.svg"
                alt="Email address"
                width={212}
                height={18}
                className="contact-value-image"
                style={{ width: "212px", height: "18px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          (c) 2026 <span>I Groups</span>. All rights reserved.
        </p>

        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

