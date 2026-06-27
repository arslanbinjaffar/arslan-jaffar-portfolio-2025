import React from "react";
import PropTypes from "prop-types";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import ImageWithSkeleton from "../ImageWithSkeleton";
import placeholderImg from "../../Assets/Projects/placeholder.png";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function FeaturedProjectCard({
  imgPath,
  title,
  impact,
  businessProblem,
  solution,
  techStack,
  ghLink,
  demoLink,
  caseStudyLink,
  role,
  labels,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <Card className="h-full overflow-hidden gap-0 py-0 hover:shadow-xl hover:shadow-accent/10 transition-shadow">
        <div className="grid lg:grid-cols-2 gap-0">
          <ImageWithSkeleton
            src={imgPath || placeholderImg}
            alt={`${title} project screenshot`}
            loading="lazy"
            className="h-[220px] lg:h-full lg:min-h-[280px]"
            imgClassName="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = placeholderImg;
            }}
          />
          <CardContent className="p-6 lg:p-8 flex flex-col">
            {role && (
              <span className="text-xs font-semibold text-accent mb-2">{role}</span>
            )}
            <CardTitle className="text-xl font-bold text-text-primary mb-2">{title}</CardTitle>
            {impact && <p className="text-sm text-accent mb-4">⚡ {impact}</p>}

            {businessProblem && (
              <div className="mb-3">
                <p className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-1">
                  {labels.problem}
                </p>
                <p className="text-sm text-text-secondary">{businessProblem}</p>
              </div>
            )}

            {solution && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-1">
                  {labels.solution}
                </p>
                <p className="text-sm text-text-secondary">{solution}</p>
              </div>
            )}

            {techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full border border-border text-text-secondary"
                    dir="ltr"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {ghLink && (
                <Button asChild size="sm">
                  <a href={ghLink} target="_blank" rel="noopener noreferrer">
                    <BsGithub className="inline mr-1" />
                    GitHub
                  </a>
                </Button>
              )}
              {demoLink && (
                <Button asChild size="sm" variant="outline">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <CgWebsite className="inline mr-1" />
                    {labels.demo}
                  </a>
                </Button>
              )}
              {caseStudyLink && (
                <Button asChild size="sm" variant="outline">
                  <a href={caseStudyLink} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="inline mr-1" />
                    {labels.caseStudy}
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

FeaturedProjectCard.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  impact: PropTypes.string,
  businessProblem: PropTypes.string,
  solution: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
  caseStudyLink: PropTypes.string,
  role: PropTypes.string,
  labels: PropTypes.shape({
    problem: PropTypes.string,
    solution: PropTypes.string,
    demo: PropTypes.string,
    caseStudy: PropTypes.string,
  }).isRequired,
};

export default FeaturedProjectCard;
