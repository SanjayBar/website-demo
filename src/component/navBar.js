import React, { useState, useEffect, useContext } from "react";
import mainLogo from "../assets/logo/mainLogo.png";
import menuIcon from "../assets/icon/menuIcon.png";
import { BsChevronDown } from "react-icons/bs";
import {
  FaSistrix,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Container, Col, Row, Nav } from "react-bootstrap";
import { OtechContext } from "../otechContext";
import { NavLink, Link } from "react-router-dom";
import "./navBar.css";

const pageSubItems = [
  "Pages",
  "Pricing",
  "Portfolio",
  "Portfolio Detail",
  "Team",
  "FAQ",
];
const blogSubItems = ["Blog", "Blog List", "Blog Detail"];

function NavBar() {
  const { isSubmenuOpen, setIsSubmenuOpen } = useContext(OtechContext);
  const [sideMainNav, setSideMainNav] = useState(false);
  const [extraInfo, setExtraInfo] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      }
      if (window.scrollY < 50) {
        setScroll(false);
      }
    });
  }, []);

  const handleMouseOver = (e) => {
    const value = e.target.textContent;
    if (pageSubItems.includes(value) || blogSubItems.includes(value)) {
      setIsSubmenuOpen(value);
    } else {
      setIsSubmenuOpen("");
    }
  };
  console.log(extraInfo);

  return (
    <>
      <header
        className={`${scroll ? "site-header sticky-header" : "site-header"}`}
        onMouseOver={handleMouseOver}
      >
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={12}>
              <div className="header-box">
                <div className="site-logo">
                  <NavLink to="/">
                    <img src={mainLogo} className="img-logo" />
                  </NavLink>
                </div>
                <div className="header-menu">
                  <Nav
                    className={`${
                      sideMainNav
                        ? "main-navigation toggle-nav-menu"
                        : "main-navigation"
                    }`}
                  >
                    <button
                      className="toggle-btn"
                      onClick={() => setSideMainNav(!sideMainNav)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <ul className="header-menu-items">
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>

                      <li>
                        <NavLink to="/about-us">About Us</NavLink>
                      </li>

                      <li>
                        <NavLink to="/services">Services</NavLink>
                      </li>

                      <li
                        className={`${
                          pageSubItems.includes(isSubmenuOpen)
                            ? "sub-items show-pages"
                            : "sub-items"
                        }`}
                      >
                        <Link to="">
                          Pages
                          <BsChevronDown
                            style={{
                              paddingLeft: "2px",
                              fontSize: "12px",
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/pricing">Pricing</NavLink>
                          </li>
                          <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                          </li>
                          <li>
                            <NavLink to="/portfolio-detail">
                              Portfolio Detail
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/team">Team</NavLink>
                          </li>
                          <li>
                            <NavLink to="/FAQ">FAQ</NavLink>
                          </li>
                        </ul>
                      </li>

                      <li
                        className={`${
                          blogSubItems.includes(isSubmenuOpen)
                            ? "sub-items show-blog"
                            : "sub-items"
                        }`}
                      >
                        <Link to="">
                          Blog
                          <BsChevronDown
                            style={{
                              paddingLeft: "2px",
                              fontSize: "12px",
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/blog-list">Blog List</NavLink>
                          </li>
                          <li>
                            <NavLink to="/blog-detail">Blog Detail</NavLink>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                      </li>
                    </ul>
                  </Nav>
                </div>
                <div className="header-search">
                  <div className="search-box">
                    <div className="search-icon">
                      <span onClick={() => setExtraInfo(true)}>
                        <FaSistrix />
                      </span>
                    </div>
                  </div>
                  <div className="extra-menu">
                    <div
                      className="extra-menu-icon"
                      onClick={() => setExtraInfo(true)}
                    >
                      <span>
                        <img src={menuIcon} alt="image" />
                      </span>
                    </div>
                    <div
                      className={`${
                        extraInfo
                          ? "extra-menu-info activeInfo"
                          : "extra-menu-info"
                      }`}
                    >
                      <span
                        className="close-extra-menu"
                        onClick={() => setExtraInfo(false)}
                      ></span>
                      <div className="extra-info-text">
                        <div className="extra-info-logo">
                          <img src={mainLogo} alt="logo" />
                        </div>
                        <div className="search-input">
                          <form>
                            <input
                              type="text"
                              name="search"
                              className="form-input"
                              placeholder="Search here..."
                              required
                            />
                            <button type="submit" className="sec-btn">
                              <span>
                                <FaSistrix />
                              </span>
                            </button>
                          </form>
                        </div>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                      <div className="extra-info-text">
                        <h3 className="h3-title">Categories</h3>
                        <ul>
                          <li>Web Design</li>
                          <li>Ideas & Research</li>
                          <li>Web Development</li>
                          <li>SEO & Marketing</li>
                        </ul>
                      </div>
                      <div className="extra-info-text">
                        <h3 className="h3-title">Contacts</h3>
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
                      <div className="extra-info-text">
                        <div className="social-icon">
                          <a href="" title="Follow on Facebook">
                            <FaFacebookF className="extraLinkIcon" />
                          </a>
                          <a href="" title="Follow on Instagram">
                            <FaInstagram className="extraLinkIcon" />
                          </a>
                          <a href="" title="Follow on Twitter">
                            <FaTwitter className="extraLinkIcon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default NavBar;
