import React from "react";

function PageHeading({ children, accent, className = "", subtitle }) {
  return (
    <div className={`text-center mb-10 ${className}`.trim()}>
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary pb-2">
        {children}{" "}
        {accent && <strong className="text-accent">{accent}</strong>}
      </h1>
      {subtitle && (
        <p className="text-text-secondary mt-2 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export default PageHeading;
