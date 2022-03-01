import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import mainLogo from "../assets/logo/mainLogo.jpg";
import "./footer.css";

function Footer() {
  return (
    <>
      <div style={{ marginTop: "2rem" }}></div>
      <footer className="site-footer">
        <Container>
          <Row className="d-flex">
            <Col lg={3}>
              <div className="footer-info">
                <div className="footer-logo">
                  <a href="#" title="Shiva">
                    <img src={mainLogo} alt="logo" />
                  </a>
                </div>
                <p>
                  Quisque ut magna id ex aliquet blandit id ac neque. Phasellus
                  ut lacus neque. Aliquam quis justo at lorem bibendum porttitor
                  mattis non augue.
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF className="social-icon" />
                  </a>
                  <a href="https://www.instagram.com/?hl=en">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="https://twitter.com/">
                    <FaTwitter className="social-icon" />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="footer-contact">
                <h3 className="h3-title footer-title">Contact Us</h3>
                <div className="footer-contact-box">
                  <div className="footer-contact-link">
                    <span className="icon">
                      <FaMapMarkerAlt />
                    </span>
                    <a href="#">
                      1247/Plot No. 39, 15th Phase, Colony, Kukatpally,
                      Hyderabad
                    </a>
                  </div>
                </div>

                <div className="footer-contact-box">
                  <div className="footer-contact-link">
                    <span className="icon">
                      <FaPhoneAlt />
                    </span>
                    <a href="#">1800-1700-1600</a>
                    <a href="#">+91 989-645-5342</a>
                  </div>
                </div>

                <div className="footer-contact-box">
                  <div className="footer-contact-link">
                    <span className="icon">
                      <FaEnvelope />
                    </span>
                    <a href="#">info@gmail.com</a>
                    <a href="#">services@gmail.com</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="our-links">
                <h3 className="h3-title footer-title">Our Links</h3>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                  <li>FAQ</li>
                  <li>Team</li>
                  <li>Pricing</li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="our-services">
                <h3 className="h3-title footer-title">Our Services</h3>
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>SEO Marketing</li>
                  <li>Research & Idea</li>
                  <li>Mobile App</li>
                  <li>UI/UX</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <section className="footer-last">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <div className="copy-right">
                <p>
                  Copyright &copy; 2022
                  <a href="#"> Dexignzone</a>. All rights reserve
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="footer-last-link">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Of Services</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
