import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Senior Software Engineer - MERN Stack",
          "Backend Developer - Node.js & Express",
          "Frontend Developer - React.js",
          "Full Stack Developer",
          "Team Lead (MERN Stack) – ERP Project"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
