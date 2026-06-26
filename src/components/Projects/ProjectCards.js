import React, { useState } from "react";
import PropTypes from "prop-types";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import placeholderImg from "../../Assets/Projects/placeholder.png";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  const displayDesc =
    isLong && !expanded ? description.slice(0, maxLength) + "…" : description;

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
          className="h-full gap-0 py-0 hover:shadow-xl hover:shadow-accent/10 transition-shadow overflow-hidden"
          role="article"
          aria-labelledby={`project-title-${title}`}
        >
          <div className="relative">
            <img
              src={imgPath || placeholderImg}
              alt={`${title} project screenshot`}
              loading="lazy"
              className="w-full object-cover h-[200px]"
              onError={(e) => {
                e.target.src = placeholderImg;
              }}
            />
            {(isBackend || role) && (
              <span className="absolute top-2.5 right-2.5 bg-accent text-bg-primary text-xs font-bold px-2.5 py-1 rounded-xl">
                {role || "Backend Project"}
              </span>
            )}
          </div>
          <CardContent className="p-5">
            <CardTitle
              id={`project-title-${title}`}
              className="text-lg font-bold text-text-primary mb-2"
            >
              {title}
            </CardTitle>

            {impact && (
              <p className="text-sm text-accent mb-2">⚡ {impact}</p>
            )}

            <CardDescription className="text-justify text-text-secondary">
              {displayDesc}
              {isLong && (
                <Button
                  variant="link"
                  onClick={() => setExpanded(!expanded)}
                  className="inline h-auto p-0 text-sm ml-1"
                >
                  {expanded ? "Show less" : "Read more"}
                </Button>
              )}
            </CardDescription>

            {techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 my-3">
                {techStack.map((t) => (
                  <motion.span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-border text-text-secondary hover:bg-accent hover:text-bg-primary transition-colors"
                    whileHover={{ scale: 1.08 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-3">
              {ghLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="text-sm px-4 py-2">
                    <a href={ghLink} target="_blank" rel="noopener noreferrer">
                      <BsGithub className="inline mr-1" />
                      {isBlog ? "Blog" : "GitHub"}
                    </a>
                  </Button>
                </motion.div>
              )}
              {!isBlog && demoLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="text-sm px-4 py-2">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                      <CgWebsite className="inline mr-1" />
                      Demo
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </CardContent>
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

export default React.memo(ProjectCards);
