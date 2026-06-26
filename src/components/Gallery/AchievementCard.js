import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function AchievementCard({ item, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      className="group w-full text-left bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      aria-label={`View ${item.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-tertiary">
        <img
          src={item.imgPath}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.category && (
          <span className="absolute top-2.5 right-2.5 bg-accent text-bg-primary text-xs font-bold px-2.5 py-1 rounded-xl">
            {item.category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-text-primary line-clamp-2">{item.title}</h3>
        {item.date && (
          <p className="text-sm text-text-secondary mt-1">{item.date}</p>
        )}
      </div>
    </motion.button>
  );
}

AchievementCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AchievementCard;
