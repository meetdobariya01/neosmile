import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="footer-section py-5"
    >
      <Container>
        {/* TOP NAV LINKS */}
        <Row className="justify-content-center mb-4">
          <Col
            lg={8}
            className="d-flex justify-content-center gap-4 footer-links"
          >
            <Link to="/services">Services</Link>
            <Link to="/doctors">Our Doctors</Link>
            <Link to="/about">About Us</Link>
            <Link to="/price-guide">Price Guide</Link>
            <Link to="/blog">Blog</Link>
          </Col>
        </Row>

        {/* MAIN FOOTER CONTENT */}
        <Row className="text-center align-items-center">
          {/* ADDRESS */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Address</h5>
            <p>9 E 68th Street, 1C, New York, NY 10065</p>
            <p className="mt-3">Mon–Fri: 9am – 5pm</p>
            <p>Sat: By Appointment Only</p>
          </Col>

          {/* LOGO CENTER */}
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/logo.png" alt="Logo" className="footer-logo" />
            </motion.div>
          </Col>

          {/* CONTACTS */}
          <Col md={4}>
            <h5 className="footer-title">Contacts</h5>
            <p>+1 800-123-1234</p>
            <p>clinic@example.com</p>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <FaFacebookF className="social-icon" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <FaInstagram className="social-icon" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <FaYoutube className="social-icon" />
              </motion.a>
            </div>
          </Col>
        </Row>

        <p className="text-center mt-5">
          This is a sample website – cmsmasters © 2025 All Rights Reserved
        </p>
      </Container>
    </motion.footer>
  );
};

export default Footer;
