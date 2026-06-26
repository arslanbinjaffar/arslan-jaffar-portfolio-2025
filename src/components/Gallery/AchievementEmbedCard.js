import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function AchievementEmbedCard({ item }) {
  return (
    <motion.article
      className="bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
            {item.date && (
              <p className="text-sm text-text-secondary mt-1">{item.date}</p>
            )}
          </div>
          {item.category && (
            <span className="shrink-0 bg-accent text-bg-primary text-xs font-bold px-2.5 py-1 rounded-xl">
              {item.category}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.description}</p>
        )}
      </div>
      <div className="flex justify-center bg-bg-tertiary p-2 sm:p-4">
        <iframe
          src={item.embedSrc}
          height={item.embedHeight ?? 670}
          width={item.embedWidth ?? 504}
          className="max-w-full border-0 rounded-lg"
          title={item.embedTitle ?? item.title}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </motion.article>
  );
}

AchievementEmbedCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    embedSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    embedHeight: PropTypes.number,
    embedWidth: PropTypes.number,
    embedTitle: PropTypes.string,
  }).isRequired,
};

export default AchievementEmbedCard;
