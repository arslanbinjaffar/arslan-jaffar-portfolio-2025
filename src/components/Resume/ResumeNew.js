import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import ResumePdf from "../../Assets/Arslan-Jaffar-Resume-ATS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js?url";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import ResumeSkeleton from "../skeletons/ResumeSkeleton";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeNew() {
  const { t } = useTranslation("resume");
  const { t: tc } = useTranslation("common");
  const seo = useRouteSeo("/resume");
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 786 ? 1.2 : 0.6;

  return (
    <Section className="relative !pt-24">
      <Seo {...seo} path="/resume" />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>
        <div className="flex justify-center mb-10">
          <Button asChild className="max-w-xs">
            <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
              <AiOutlineDownload className="inline me-2" />
              {tc("buttons.downloadResume")}
            </a>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-8">
          {pdfLoading && <ResumeSkeleton />}
          <Document
            file={ResumePdf}
            onLoadSuccess={({ numPages: pages }) => {
              setNumPages(pages);
              setPdfLoading(false);
            }}
            onLoadError={() => setPdfLoading(false)}
            loading=""
            className={pdfLoading ? "sr-only" : ""}
          >
            {Array.from({ length: numPages ?? 0 }, (_, i) => (
              <div
                key={i + 1}
                className="rounded-lg bg-pdf-page p-4 max-w-[900px] w-full shadow-lg"
                dir="ltr"
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
