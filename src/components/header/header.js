import React, { useState } from "react";
import {  Nav, Container, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiMapPin,
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "./header.css"; // 

const Header = () => {
   const [mobileOpen, setMobileOpen] = useState(false);

  // simple dropdown labels (replace href values with actual routes)
  const menu = [
    { title: "HOME", href: "/" },
    { title: "SERVICES", href: "/services" },
    { title: "PAGES", href: "/pages" },
    { title: "BLOG", href: "/blog" },
    { title: "CONTACTS", href: "/contact" },
  ];

  return (
    <div>
      <div>
          <header className="site-header">
      {/* BACKGROUND: keep hero behind header if needed; header transparent */}
      <div className="header-inner container-fluid">
        <Container className="d-flex align-items-center header-row">
          {/* LEFT stacked call + location (visible on lg and up) */}
          <div className="left-side d-none d-lg-flex flex-column">
            <a className="left-item call-link" href="tel:08001231234">
              <FiPhone className="left-icon" />
              <span>0 800 123 1234</span>
            </a>

            <a
              className="left-item loc-link"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              <FiMapPin className="left-icon" />
              <span>OUR LOCATIONS</span>
            </a>
          </div>

          {/* CENTER: logo */}
          <div className="brand-wrap d-flex justify-content-center align-items-center">
            <a href="/" className="brand-link">
              <img src="/images/logo.png" alt="AESTHETICA" className="brand-logo" />
              {/* <span className="brand-text">AESTHETICA</span> */}
            </a>
          </div>

          {/* RIGHT: icons + button */}
          <div className="right-side d-flex align-items-center justify-content-end">
            {/* Desktop icons */}
            <div className="icons d-none d-lg-flex align-items-center">
            

              

           

              <Button className="book-btn" href="/book-visit">
                BOOK A VISIT
              </Button>
            </div>

            {/* Mobile hamburger (visible on small screens) */}
            <div className="mobile-toggle d-lg-none ms-2">
              <button
                className="hamburger-btn"
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="menu"
              >
                {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>
        </Container>

        {/* CENTERED MENU (desktop) - beneath the center logo visually */}
        <nav className="center-menu d-none d-lg-flex justify-content-center mt-5">
          <ul className="menu-list d-flex">
            {menu.map((m) => (
              <li key={m.title} className="menu-item">
                {/* animated hover */}
                <motion.a
                  href={m.href}
                  className="menu-link"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {m.title}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            className="mobile-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
          >
            <div className="mobile-inner p-4">
              <div className="mobile-top d-flex justify-content-between align-items-center mb-3">
                <a href="/" className="mobile-brand d-flex align-items-center">
                  <img src="/images/logo.png" alt="logo" className="mobile-logo" />
                </a>
                <button className="close-btn" onClick={() => setMobileOpen(false)}>
                  <FiX size={22} />
                </button>
              </div>

              <div className="mobile-links mb-3">
                <a className="mobile-call d-flex align-items-center mb-2" href="tel:08001231234">
                  <FiPhone className="left-icon" />
                  <span>0 800 123 1234</span>
                </a>

                <a
                  className="mobile-loc d-flex align-items-center mb-3"
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMapPin className="left-icon" />
                  <span>OUR LOCATIONS</span>
                </a>

                <Nav className="flex-column">
                  {menu.map((m) => (
                    <Nav.Link key={m.title} href={m.href} className="mobile-nav-link">
                      {m.title}
                    </Nav.Link>
                  ))}
                </Nav>

                <Button className="mobile-book-btn mt-3" href="/book-visit">
                  BOOK A VISIT
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
      </div>

    </div>
  )
}

export default Header;