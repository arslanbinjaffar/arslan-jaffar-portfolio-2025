import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function RatingModal() {
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRatedBefore, setHasRatedBefore] = useState(false);

  useEffect(() => {
    const previousRating = localStorage.getItem("portfolio_rating");
    if (previousRating) {
      setHasRatedBefore(true);
    }

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasRatedBefore && !previousRating) {
        setShowRating(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasRatedBefore]);

  const handleSubmitRating = () => {
    if (rating > 0) {
      localStorage.setItem(
        "portfolio_rating",
        JSON.stringify({
          rating,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        })
      );
      setHasRatedBefore(true);
      setShowRating(false);
    }
  };

  const feedbackMessages = {
    1: "😞 I'd love to hear what I can improve!",
    2: "😐 Please share your feedback for improvement.",
    3: "😊 Glad you liked it! Any suggestions?",
    4: "😄 Great! Happy to hear that!",
    5: "🎉 Awesome! Thank you so much!",
  };

  return (
    <Dialog open={showRating} onOpenChange={setShowRating}>
      <DialogContent className="rounded-2xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle>How did you like my portfolio?</DialogTitle>
        </DialogHeader>

        <p className="text-text-secondary text-center mb-6">
          Your feedback helps me improve my work and showcase projects better.
        </p>

        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              type="button"
              className="text-3xl bg-transparent border-0 cursor-pointer p-1"
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {star <= (hoverRating || rating) ? (
                <AiFillStar className="text-star" />
              ) : (
                <AiOutlineStar className="text-text-secondary" />
              )}
            </motion.button>
          ))}
        </div>

        {rating > 0 && (
          <motion.p
            className="text-center text-text-secondary mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {feedbackMessages[rating]}
          </motion.p>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={() => setShowRating(false)}>
            Skip
          </Button>
          <Button onClick={handleSubmitRating} disabled={rating === 0}>
            {rating > 0 ? "Submit Rating" : "Select a rating"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RatingModal;
