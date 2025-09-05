import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { experienceData } from "./experienceData";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies I've worked with recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experienceData.map((experience, index) => (
            <Col md={6} lg={4} className="experience-card" key={index}>
              <Card className="experience-card-view">
                <Card.Img 
                  variant="top" 
                  src={experience.companyImage} 
                  alt="company"
                  style={{ height: "200px", objectFit: "contain", padding: "20px" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#623686" }}>
                    {experience.role}
                  </Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: "#4db5e8" }}>
                    {experience.company}
                  </Card.Subtitle>
                  <Card.Text style={{ color: "#a588c0", fontSize: "0.9em" }}>
                    <strong>Designation:</strong> {experience.designation}
                  </Card.Text>
                  <Card.Text style={{ color: "#a588c0", fontSize: "0.9em" }}>
                    <strong>Duration:</strong> {experience.duration}
                  </Card.Text>
                  <Card.Text style={{ textAlign: "justify", color: "white" }}>
                    {experience.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;