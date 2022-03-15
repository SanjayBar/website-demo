import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./experience.css";

function Experience() {
  return (
    <section className="main-experience">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-1 order-2">
            <div className="experience-content">
              <span className="sub-title">EXPERIENCE</span>
              <h2 className="h2-title">Pay for Qualified Traffic</h2>
              <p>
                Vivamus augue quam, sagittis vitae faucibus et, pharetra id
                orci. Maecenas tempus at magna sit amet tempus. Vestibulum augue
                lectus, mattis et eleifend a, porta eu est. Cras nec lobortis
                tortor, a dignissim odio.
              </p>
            </div>
            <div className="experience-skills">
              <div className="experience-skill-list">
                {/* designing */}
                <div className="experience-skill-bar-box">
                  <h5 className="h3-title experience-skill-bar-title">
                    Designing
                  </h5>
                  <div className="h3-title experience-skill-bar-percentage">
                    <span className="experience-counting">90</span>%
                  </div>
                  <div className="experience-skill-bar">
                    <div
                      className="experience-skill-bar-inner"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                {/* development */}
                <div className="experience-skill-bar-box">
                  <h5 className="h3-title experience-skill-bar-title">
                    Development
                  </h5>
                  <div className="h3-title experience-skill-bar-percentage">
                    <span className="experience-counting">70</span>%
                  </div>
                  <div className="experience-skill-bar">
                    <div
                      className="experience-skill-bar-inner"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                {/* optimization */}
                <div className="experience-skill-bar-box">
                  <h5 className="h3-title experience-skill-bar-title">
                    Optimization
                  </h5>
                  <div className="h3-title experience-skill-bar-percentage">
                    <span className="experience-counting">60</span>%
                  </div>
                  <div className="experience-skill-bar">
                    <div
                      className="experience-skill-bar-inner"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="order-lg-2 order-1">
            <div className="experience-img">
              <img
                src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/experience-img.svg"
                alt="Experience Image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
