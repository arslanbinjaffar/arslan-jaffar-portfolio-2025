import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import placeholderImg from "../../Assets/Projects/placeholder.png"; // Add a placeholder image in your assets

function ProjectCards({
  imgPath,
  isBlog,
  title,
  description,
  ghLink,
  demoLink,
  isBackend, // New prop to indicate backend project
}) {
  // Handle newline characters in description
  const formattedDescription = description
    ? description.split("\n").map((line, index) => (
        <p key={index} style={{ margin: "0.5em 0" }}>
          {line}
        </p>
      ))
    : "No description available.";

  // Truncate description if too long (optional)
  const maxLength = 150;
  const isLongDescription = description && description.length > maxLength;
  const shortDescription = isLongDescription
    ? `${description.slice(0, maxLength)}...`
    : description;

  return (
    <Card className="project-card-view" role="article" aria-labelledby={`project-title-${title}`}>
      <div className="project-card-img-wrapper">
        <Card.Img
          variant="top"
          src={imgPath || placeholderImg}
          alt={`${title} project screenshot`}
          loading="lazy"
          onError={(e) => {
            e.target.src = placeholderImg; // Fallback image on error
          }}
        />
        {isBackend && (
          <span className="backend-badge">Backend Project</span>
        )}
      </div>
      <Card.Body>
        <Card.Title id={`project-title-${title}`}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {isLongDescription ? shortDescription : formattedDescription}
          {isLongDescription && (
            <Button
              variant="link"
              className="read-more"
              onClick={() => alert(description)} // Replace with modal or tooltip for full description
            >
              Read More
            </Button>
          )}
        </Card.Text>
        <div className="project-card-buttons">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              aria-label={`View ${title} on GitHub`}
            >
              <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: ghLink ? "10px" : "0" }}
              aria-label={`View demo of ${title}`}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

// PropTypes for type checking
ProjectCards.propTypes = {
  imgPath: PropTypes.string,
  isBlog: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
  isBackend: PropTypes.bool,
};

// Default props
ProjectCards.defaultProps = {
  imgPath: null,
  description: "",
  ghLink: null,
  demoLink: null,
  isBackend: false,
};

// Memoize to prevent unnecessary re-renders
export default React.memo(ProjectCards);