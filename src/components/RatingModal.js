import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import "./RatingModal.css";

function RatingModal() {
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRatedBefore, setHasRatedBefore] = useState(false);

  useEffect(() => {
    // Check if user has already rated
    const previousRating = localStorage.getItem("portfolio_rating");
    if (previousRating) {
      setHasRatedBefore(true);
    }

    // Set up beforeunload listener for exit-intent
    const handleBeforeUnload = () => {
      if (!hasRatedBefore && !previousRating) {
        setShowRating(true);
        return false; // Show browser's default "leaving site" dialog
      }
    };

    // Check after 5 seconds if user tries to leave
    let exitIntentTimeout;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasRatedBefore) {
        setShowRating(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(exitIntentTimeout);
    };
  }, [hasRatedBefore]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmitRating = () => {
    if (rating > 0) {
      // Save rating to localStorage
      const ratingData = {
        rating: rating,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      };
      localStorage.setItem("portfolio_rating", JSON.stringify(ratingData));
      setHasRatedBefore(true);
      setShowRating(false);
    }
  };

  const handleSkip = () => {
    setShowRating(false);
  };

  return (
    <Modal
      show={showRating}
      onHide={handleSkip}
      centered
      className="rating-modal"
      backdrop="static"
    >
      <Modal.Header closeButton className="rating-modal-header">
        <Modal.Title className="rating-modal-title">
          How did you like my portfolio?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="rating-modal-body">
        <p className="rating-description">
          Your feedback helps me improve my work and showcase projects better.
        </p>

        <div className="star-rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              className="star-button"
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleRating(star)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {star <= (hoverRating || rating) ? (
                <AiFillStar className="star-filled" />
              ) : (
                <AiOutlineStar className="star-empty" />
              )}
            </motion.button>
          ))}
        </div>

        {rating > 0 && (
          <motion.p
            className="rating-feedback"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {rating === 1 && "😞 I'd love to hear what I can improve!"}
            {rating === 2 && "😐 Please share your feedback for improvement."}
            {rating === 3 && "😊 Glad you liked it! Any suggestions?"}
            {rating === 4 && "😄 Great! Happy to hear that!"}
            {rating === 5 && "🎉 Awesome! Thank you so much!"}
          </motion.p>
        )}
      </Modal.Body>
      <Modal.Footer className="rating-modal-footer">
        <Button
          variant="outline-secondary"
          onClick={handleSkip}
          className="skip-btn"
        >
          Skip
        </Button>
        <Button
          onClick={handleSubmitRating}
          disabled={rating === 0}
          className="submit-rating-btn"
        >
          {rating > 0 ? "Submit Rating" : "Select a rating"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RatingModal;
