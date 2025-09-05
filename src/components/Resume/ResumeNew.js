import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import IndeedResume from "../../Assets/Arslan-Jaffar (1).pdf";
import MyResume from "../../Assets/MyResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Indeed Resume Section (multi-page) */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: 40 }}>
          <Button
            variant="primary"
            href={IndeedResume}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Indeed Resume
          </Button>
        </Row>
        <Row className="resume">
          <Document file={IndeedResume} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            {/* Add more <Page /> if IndeedResume has more pages */}
          </Document>
        </Row>

        {/* My Resume Section (single-page) */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: 40 }}>
          <Button
            variant="primary"
            href={MyResume}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download My Resume
          </Button>
        </Row>
        <Row className="resume">
          <Document file={MyResume} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
