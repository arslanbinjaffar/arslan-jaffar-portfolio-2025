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
  SiOpenai,
  SiAmazon,
} from "react-icons/si";
import { Brain, Network } from "lucide-react";

const icons = [
  { Icon: CgCPlusPlus },
  { Icon: DiJavascript1 },
  { Icon: DiNodejs },
  { Icon: DiReact },
  { Icon: DiMongodb },
  { Icon: SiNextdotjs },
  { Icon: DiGit },
  { Icon: SiFirebase },
  { Icon: SiRedis },
  { Icon: SiPostgresql },
  { Icon: DiPython },
  { Icon: SiOpenai, title: "LLM / OpenAI" },
  { Icon: Brain, title: "RAG / AI Engineering", isLucide: true },
  { Icon: Network, title: "LangGraph / Agents", isLucide: true },
  { Icon: SiAmazon, title: "AWS Cloud" },
  { Icon: SiBitbucket },
  { Icon: SiVite },
  { Icon: SiTypescript },
  { Icon: SiTailwindcss },
  { Icon: SiDocker },
  { Icon: SiKubernetes },
  { Icon: SiRabbitmq },
  { Icon: SiSocketdotio },
];

function Techstack() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12">
      {icons.map(({ Icon, title, isLucide }, i) => (
        <div
          key={i}
          title={title}
          className="flex items-center justify-center w-24 h-24 rounded-2xl border border-border bg-bg-secondary text-4xl text-text-primary hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300"
        >
          <Icon className={isLucide ? "w-10 h-10" : undefined} />
        </div>
      ))}
    </div>
  );
}

export default Techstack;
