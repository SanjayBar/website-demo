import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./portfolio.css";

const allProjects = [
  {
    id: "1",
    title: "Web Design",
  },
  {
    id: "2",
    title: "Web Design",
  },

  {
    id: "3",
    title: "Web Development",
  },
  {
    id: "4",
    title: "Web Development",
  },

  {
    id: "5",
    title: "Branding",
  },
  {
    id: "6",
    title: "Branding",
  },

  {
    id: "7",
    title: "Mobile App",
  },
  {
    id: "8",
    title: "Mobile App",
  },
];

const projectTitles = [
  "All",
  ...new Set(allProjects.map((project) => project.title)),
];

function Portfolio() {
  const [curOption, setCurOption] = useState("All");

  const portfoliolist = useRef(null);

  useEffect(() => {
    const elements = [...portfoliolist.current.children];

    elements.forEach((element) => {
      element.style.display = "none";
    });

    if (curOption === "All") {
      elements.forEach((element) => {
        element.style.display = "inline-block";
      });
    }

    if (curOption === "Web Design") {
      elements.forEach((element) => {
        if (element.classList.contains("web-design")) {
          element.style.display = "inline-block";
        }
      });
    }

    if (curOption === "Web Development") {
      elements.forEach((element) => {
        if (element.classList.contains("web-development")) {
          element.style.display = "inline-block";
        }
      });
    }

    if (curOption === "Branding") {
      elements.forEach((element) => {
        if (element.classList.contains("branding")) {
          element.style.display = "inline-block";
        }
      });
    }

    if (curOption === "Mobile App") {
      elements.forEach((element) => {
        if (element.classList.contains("mobile-app")) {
          element.style.display = "inline-block";
        }
      });
    }
  }, [curOption]);

  return (
    <div className="main-portfolio">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12}>
            <div className="portfolio-title">
              <span className="sub-title">PORTFOLIO</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="portfolio-title">
              <h2 className="h2-title">Featured Projects</h2>
            </div>
          </Col>
          <Col lg={6}>
            <div className="portfolio-tabbing">
              <ul>
                {projectTitles.map((proTitle, index) => {
                  return (
                    <li key={index} onClick={() => setCurOption(proTitle)}>
                      <span
                        className={`${
                          proTitle === curOption ? "filter active" : "filter"
                        }`}
                      >
                        {proTitle}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>

          <Col xs={12}>
            <div className="portfolio-list-box">
              <div ref={portfoliolist}>
                {/* 1 */}
                <div className="portfolio md-6 web-design">
                  <div className="portfolio-wrapper">
                    <div
                      className="portfolio-img back-img"
                      style={{
                        backgroundImage:
                          "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/portfolio-img1.jpg')",
                      }}
                    ></div>
                    <div className="portfolio-wrapper-text">
                      <h3 className="h3-title">Web Design</h3>
                      <p>Graphic ,Illustration</p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="portfolio md-3 branding">
                  <div className="portfolio-wrapper">
                    <div
                      className="portfolio-img back-img"
                      style={{
                        backgroundImage:
                          "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/portfolio-img2.jpg')",
                      }}
                    ></div>
                    <div className="portfolio-wrapper-text">
                      <h3 className="h3-title">Web Design</h3>
                      <p>Graphic ,Illustration</p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="portfolio md-3 mobile-app">
                  <div className="portfolio-wrapper">
                    <div
                      className="portfolio-img back-img"
                      style={{
                        backgroundImage:
                          "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/portfolio-img3.jpg')",
                      }}
                    ></div>
                    <div className="portfolio-wrapper-text">
                      <h3 className="h3-title">Web Design</h3>
                      <p>Graphic ,Illustration</p>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div className="portfolio md-3 web-development">
                  <div className="portfolio-wrapper">
                    <div
                      className="portfolio-img back-img"
                      style={{
                        backgroundImage:
                          "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/portfolio-img4.jpg')",
                      }}
                    ></div>
                    <div className="portfolio-wrapper-text">
                      <h3 className="h3-title">Web Design</h3>
                      <p>Graphic ,Illustration</p>
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div className="portfolio md-3 branding">
                  <div className="portfolio-wrapper">
                    <div
                      className="portfolio-img back-img"
                      style={{
                        backgroundImage:
                          "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/portfolio-img5.jpg')",
                      }}
                    ></div>
                    <div className="portfolio-wrapper-text">
                      <h3 className="h3-title">Web Design</h3>
                      <p>Graphic ,Illustration</p>
                    </div>
                  </div>
                </div>
                {/* 6 */}
                <div className="portfolio md-6 web-design">
                  <div className="portfolio-wrapper">
                    <div
                      className="portfolio-img back-img"
                      style={{
                        backgroundImage:
                          "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/portfolio-img6.jpg')",
                      }}
                    ></div>
                    <div className="portfolio-wrapper-text">
                      <h3 className="h3-title">Web Design</h3>
                      <p>Graphic ,Illustration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
