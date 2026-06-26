import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import ResumePdf from "../../Assets/Arslan-Jaffar-Resume-ATS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js?url";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { routeSeo } from "@/config/seo";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 786 ? 1.2 : 0.6;

  return (
    <Section className="relative !pt-24">
      <Seo {...routeSeo["/resume"]} path="/resume" />
      <Particle />
      <Container>
        <div className="flex justify-center mb-10">
          <Button asChild className="max-w-xs">
            <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
              <AiOutlineDownload className="inline mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Document
            file={ResumePdf}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from({ length: numPages ?? 0 }, (_, i) => (
              <div
                key={i + 1}
                className="rounded-lg bg-pdf-page p-4 max-w-[900px] w-full shadow-lg"
              >
                <Page pageNumber={i + 1} scale={scale} />
              </div>
            ))}
          </Document>
        </div>
      </Container>
    </Section>
  );
}

export default ResumeNew;
