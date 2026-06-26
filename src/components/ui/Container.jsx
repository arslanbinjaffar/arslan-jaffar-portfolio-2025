import React from "react";

function Container({ fluid = false, className = "", children, ...props }) {
  const base = fluid
    ? "w-full px-4 sm:px-6 lg:px-8"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  return (
    <div className={`${base} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export default Container;
