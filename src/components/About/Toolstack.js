import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJira,
  SiClickup,
} from "react-icons/si";
import { TbCursorText } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import cusorCodeAi from "../../Assets/cusor_code_editor.webp";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={cusorCodeAi} alt="Cursor AI" style={{ width: "40px", height: "40px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode />
      </Col>
    </Row>
  );
}

export default Toolstack;
