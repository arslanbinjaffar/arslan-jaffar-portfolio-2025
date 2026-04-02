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
          My Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          A timeline of roles, responsibilities, and outcomes from my software
          engineering journey.
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
                  {experience.highlights?.length > 0 && (
                    <ul style={{ color: "#d9d9d9", textAlign: "left", paddingLeft: "18px" }}>
                      {experience.highlights.map((point, pointIndex) => (
                        <li key={`${experience.company}-point-${pointIndex}`} style={{ marginBottom: "8px" }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {experience.tech?.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                      {experience.tech.map((techItem) => (
                        <span
                          key={`${experience.company}-${techItem}`}
                          style={{
                            background: "rgba(98, 54, 134, 0.25)",
                            border: "1px solid rgba(163, 122, 201, 0.35)",
                            color: "#f2dcff",
                            borderRadius: "999px",
                            fontSize: "0.76em",
                            padding: "5px 10px",
                          }}
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  )}
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