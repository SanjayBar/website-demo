import React, { useState, useEffect, useContext } from "react";
import mainLogo from "../assets/logo/mainLogo.png";
import menuIcon from "../assets/icon/menuIcon.png";
import { BsChevronDown } from "react-icons/bs";
import { FaSistrix } from "react-icons/fa";
import { Container, Col, Row, Nav } from "react-bootstrap";
import { OtechContext } from "../otechContext";
import { Link } from "react-router-dom";
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
                  <Link to="/">
                    <img src={mainLogo} className="img-logo" />
                  </Link>
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
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>

                      <li>
                        <Link to="/services">Services</Link>
                      </li>

                      <li
                        className={`${
                          pageSubItems.includes(isSubmenuOpen)
                            ? "sub-items show-pages"
                            : "sub-items"
                        }`}
                      >
                        <Link to="#">
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
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/portfolio-detail">Portfolio Detail</Link>
                          </li>
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                          <li>
                            <Link to="/FAQ">FAQ</Link>
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
                        <Link to="#">
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
                            <Link to="/blog-list">Blog List</Link>
                          </li>
                          <li>
                            <Link to="/blog-detail">Blog Detail</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </Nav>
                </div>
                <div className="header-search">
                  <div className="search-box">
                    <div className="search-icon">
                      <a href="#">
                        <FaSistrix />
                      </a>
                    </div>
                  </div>
                  <div className="extra-menu">
                    <div className="extra-menu-icon">
                      <a href="#">
                        <img src={menuIcon} alt="image" />
                      </a>
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
