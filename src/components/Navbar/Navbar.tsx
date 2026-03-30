"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Internship", path: "/internship" },
  { name: "Event", path: "/event" },
  { name: "Career", path: "/career" },
  { name: "Branches", path: "/branches" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="navbar nav-show">
        <div className="navbar-container">
          <div className="logo glow-text">
            <span className="logo-i">I</span>
            <span className="logo-groups"> Groups</span>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`nav-link ${pathname === item.path ? "active" : ""}`}
                >
                  {item.name}
                  <span className="hover-line" />
                </Link>
              </li>
            ))}
          </ul>

          <button className="contact-btn desktop-only">Contact Us</button>

          <button
            type="button"
            className={`hamburger mobile-only ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-links">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`mobile-link ${pathname === item.path ? "active" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}

          <Link href="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
