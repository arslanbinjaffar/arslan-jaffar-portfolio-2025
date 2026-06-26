import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiBitbucket,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiSocketdotio,
  SiRabbitmq,
  SiKubernetes,
} from "react-icons/si";

const icons = [
  CgCPlusPlus,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiMongodb,
  SiNextdotjs,
  DiGit,
  SiFirebase,
  SiRedis,
  SiPostgresql,
  DiPython,
  SiBitbucket,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiRabbitmq,
  SiSocketdotio,
];

function Techstack() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12">
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-24 h-24 rounded-2xl border border-border bg-bg-secondary text-4xl text-text-primary hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}

export default Techstack;
