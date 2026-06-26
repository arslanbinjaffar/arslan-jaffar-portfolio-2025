import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Systems Engineer",
          "Senior Software Engineer @ PixelPK",
          "RAG & LLM Orchestration",
          "LangGraph Multi-Agent Developer",
          "Team Lead @ Beyond Technologies",
          "Backend Architect - Node.js / NestJS",
          "Microservices and API Specialist",
          "Cloud-Native Systems Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
