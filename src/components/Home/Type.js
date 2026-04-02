import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer (MERN)",
          "Backend Architect - Node.js / NestJS",
          "Full Stack Engineer - React.js & Next.js",
          "Team Lead - ERP & Event Platforms",
          "Microservices and API Specialist",
          "Cloud and DevOps Focused Developer",
          "System Design Enthusiast",
          "Freelance Full Stack Consultant"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
