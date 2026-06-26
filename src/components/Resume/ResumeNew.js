import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import IndeedResume from "../../Assets/Arslan-Jaffar_indeed_sep_2025.pdf";
import MyResume from "../../Assets/MyResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js?url";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 786 ? 1.2 : 0.6;
  const singleScale = width > 786 ? 1.7 : 0.6;

  return (
    <Section className="relative !pt-24">
      <Particle />
      <Container>
        <div className="flex justify-center mb-10">
          <Button asChild className="max-w-xs">
            <a href={IndeedResume} target="_blank" rel="noopener noreferrer">
              <AiOutlineDownload className="inline mr-2" />
              Download Indeed Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-8 mb-10">
          <Document file={IndeedResume}>
            {[1, 2].map((pageNum) => (
              <div
                key={pageNum}
                className="rounded-lg bg-pdf-page p-4 max-w-[900px] w-full shadow-lg"
              >
                <Page pageNumber={pageNum} scale={scale} />
              </div>
            ))}
          </Document>
        </div>

        <div className="flex justify-center mt-10 mb-10">
          <Button asChild className="max-w-xs">
            <a href={MyResume} target="_blank" rel="noopener noreferrer">
              <AiOutlineDownload className="inline mr-2" />
              Download My Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center">
          <Document file={MyResume}>
            <Page pageNumber={1} scale={singleScale} />
          </Document>
        </div>
      </Container>
    </Section>
  );
}

export default ResumeNew;
