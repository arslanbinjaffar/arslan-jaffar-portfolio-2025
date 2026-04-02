import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import placeholderImg from "../../Assets/Projects/placeholder.png";

function ProjectCards({
  imgPath,
  isBlog,
  title,
  description,
  ghLink,
  demoLink,
  isBackend,
  role,
  impact,
  techStack,
}) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 160;
  const isLong = description && description.length > maxLength;
  const displayDesc = isLong && !expanded
    ? description.slice(0, maxLength) + "…"
    : description;

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.02}
      transitionSpeed={400}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <Card
          className="project-card-view"
          role="article"
          aria-labelledby={`project-title-${title}`}
        >
          <div className="project-card-img-wrapper">
            <Card.Img
              variant="top"
              src={imgPath || placeholderImg}
              alt={`${title} project screenshot`}
              loading="lazy"
              onError={(e) => {
                e.target.src = placeholderImg;
              }}
            />
            {(isBackend || role) && (
              <span className="backend-badge">{role || "Backend Project"}</span>
            )}
          </div>
          <Card.Body>
            <Card.Title id={`project-title-${title}`}>{title}</Card.Title>

            {impact && (
              <p className="project-impact">⚡ {impact}</p>
            )}

            <Card.Text
              style={{
                textAlign: "justify",
                color: "#d0d0d0",
                fontSize: "0.9em",
              }}
            >
              {displayDesc}
              {isLong && (
                <Button
                  variant="link"
                  className="read-more"
                  onClick={() => setExpanded(!expanded)}
                  style={{ padding: "0 4px", fontSize: "0.85em" }}
                >
                  {expanded ? "Show less" : "Read more"}
                </Button>
              )}
            </Card.Text>

            {techStack?.length > 0 && (
              <div className="project-tech-row">
                {techStack.map((t) => (
                  <motion.span
                    key={t}
                    className="project-tech-tag"
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "#c770f0",
                      color: "#0c0513",
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            )}

            <div className="project-card-buttons">
              {ghLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="primary"
                    href={ghLink}
                    target="_blank"
                    aria-label={`View ${title} on GitHub`}
                  >
                    <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
                  </Button>
                </motion.div>
              )}
              {!isBlog && demoLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="primary"
                    href={demoLink}
                    target="_blank"
                    style={{ marginLeft: ghLink ? "10px" : "0" }}
                    aria-label={`View demo of ${title}`}
                  >
                    <CgWebsite /> &nbsp; Demo
                  </Button>
                </motion.div>
              )}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Tilt>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string,
  isBlog: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
  isBackend: PropTypes.bool,
  role: PropTypes.string,
  impact: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
};

ProjectCards.defaultProps = {
  imgPath: null,
  description: "",
  ghLink: null,
  demoLink: null,
  isBackend: false,
  role: null,
  impact: null,
  techStack: [],
};


// Memoize to prevent unnecessary re-renders
export default React.memo(ProjectCards);