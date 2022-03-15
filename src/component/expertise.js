import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimpleSlider from "./slider";
import "./expertise.css";

function Expertise() {
  return (
    <section className="main-team">
      <Container>
        <Row>
          <Col>
            <div className="team-title">
              <span className="sub-title">TEAM MEMBERS</span>
              <h2 className="h2-title">Our Expertise</h2>
            </div>
          </Col>
        </Row>

        <div className="main-team-slider">
          <SimpleSlider />
        </div>
      </Container>
    </section>
  );
}

export default Expertise;
