import React from "react";
import Container from "./Container";

function Section({ fluid = true, className = "", children, id }) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-20 bg-section ${fluid ? "w-full" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

Section.Container = Container;

export default Section;
